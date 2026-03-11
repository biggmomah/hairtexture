import { CarritoProvider } from './context/CarritoContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Productos from './components/Productos'
import CarritoDrawer from './components/CarritoDrawer'
import Footer from './components/Footer'

export default function App() {
  return (
    <CarritoProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Servicios />
          <Productos />
        </main>
        <Footer />
        <CarritoDrawer />
      </div>
    </CarritoProvider>
  )
}
