#!/usr/bin/env node
'use strict'

const { spawn, exec } = require('child_process')
const path = require('path')

// ── Helpers ────────────────────────────────────────────────────────────────

/** Strip ANSI escape codes so regex works on coloured Vite output. */
const stripAnsi = (str) =>
  str.replace(/\x1B\[[0-9;]*[mGKHFJK]/g, '').replace(/\x1B\].*?\x07/g, '')

/** Cross-platform browser opener — no external deps needed. */
const openBrowser = (url) => {
  const cmd =
    process.platform === 'win32'  ? `start "" "${url}"` :
    process.platform === 'darwin' ? `open "${url}"` :
                                    `xdg-open "${url}"`

  exec(cmd, (err) => {
    if (err) {
      process.stderr.write(`[vite-autoopen] ⚠  Could not open browser: ${err.message}\n`)
    }
  })
}

/** Parse CLI args: vite-autoopen [--script <name>] [--cwd <dir>] */
const parseArgs = (argv) => {
  const args = { script: 'dev', cwd: process.cwd() }
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--script' && argv[i + 1]) args.script = argv[++i]
    if (argv[i] === '--cwd'    && argv[i + 1]) args.cwd    = path.resolve(argv[++i])
  }
  return args
}

// ── Main ───────────────────────────────────────────────────────────────────

const { script, cwd } = parseArgs(process.argv)

process.stdout.write(
  `\n[vite-autoopen] Starting "npm run ${script}" in ${cwd}\n\n`
)

const child = spawn('npm', ['run', script], {
  cwd,
  stdio: ['inherit', 'pipe', 'pipe'],
  shell: true,
})

let opened = false

const tryOpen = (chunk) => {
  const raw = chunk.toString()
  process.stdout.write(raw)
  if (opened) return

  const clean = stripAnsi(raw)

  // Match Vite's "Local:   http://localhost:PORT/" line
  const match = clean.match(/Local:\s+(https?:\/\/localhost:\d+\/?)/m)
  if (match) {
    opened = true
    const url = match[1].replace(/\/$/, '')
    process.stdout.write(`\n[vite-autoopen] ✓ Opening ${url} in your browser…\n\n`)
    setTimeout(() => openBrowser(url), 400)
  }
}

child.stdout.on('data', tryOpen)

child.stderr.on('data', (chunk) => {
  process.stderr.write(chunk)
  // Vite sometimes routes the server-ready message through stderr
  if (!opened) tryOpen(chunk)
})

child.on('close', (code) => {
  if (code) process.exit(code)
})

// Forward kill signals so Ctrl+C cleanly stops Vite too
process.on('SIGINT',  () => { child.kill('SIGINT');  process.exit(0) })
process.on('SIGTERM', () => { child.kill('SIGTERM'); process.exit(0) })
