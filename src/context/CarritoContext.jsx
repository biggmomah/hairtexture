import { createContext, useContext, useState } from 'react'

const CarritoContext = createContext()

export function CarritoProvider({ children }) {
  const [items, setItems] = useState([])
  const [abierto, setAbierto] = useState(false)

  const agregar = (producto) => {
    setItems(prev => {
      const existe = prev.find(i => i.id === producto.id)
      if (existe) return prev.map(i => i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i)
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }

  const eliminar = (id) => setItems(prev => prev.filter(i => i.id !== id))

  const cambiarCantidad = (id, cantidad) => {
    if (cantidad < 1) return eliminar(id)
    setItems(prev => prev.map(i => i.id === id ? { ...i, cantidad } : i))
  }

  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0)
  const cantidad = items.reduce((acc, i) => acc + i.cantidad, 0)

  return (
    <CarritoContext.Provider value={{ items, agregar, eliminar, cambiarCantidad, total, cantidad, abierto, setAbierto }}>
      {children}
    </CarritoContext.Provider>
  )
}

export const useCarrito = () => useContext(CarritoContext)
