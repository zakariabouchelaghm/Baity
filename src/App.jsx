import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Decorations from './pages/Decorations'
import Consultations from './pages/Consultations'
import Garden from './pages/Garden'
import Location from './pages/Location'
import Renovation from './pages/Renovation'
import Courses from './pages/Courses'
import OtherServices from './pages/OtherServices'
import Portfolio from './pages/Portfolio'
import DesignFromScratch from './pages/DesignFromScratch'
import Designs from './pages/Designs'
import Modifications from './pages/Modifications'
import ConsultationsPage from './pages/ConsultationsPage'
import Cart from './pages/Cart'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (offer) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === offer.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === offer.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...offer, quantity: 1 }]
    })
  }

  const removeFromCart = (offerId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== offerId))
  }

  const updateQuantity = (offerId, newQuantity) => {
    if (newQuantity < 1) return
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === offerId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  return (
    <div className="app">
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        <Route path="/decorations" element={<Decorations addToCart={addToCart} />} />
        <Route path="/consultations" element={<Consultations />} />
        <Route path="/garden" element={<Garden addToCart={addToCart} />} />
        <Route path="/location" element={<Location addToCart={addToCart} />} />
        <Route path="/renovation" element={<Renovation addToCart={addToCart} />} />
        <Route path="/courses" element={<Courses addToCart={addToCart} />} />
        <Route path="/other-services" element={<OtherServices addToCart={addToCart} />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/design-from-scratch" element={<DesignFromScratch addToCart={addToCart} />} />
        <Route path="/designs" element={<Designs addToCart={addToCart} />} />
        <Route path="/modifications" element={<Modifications addToCart={addToCart} />} />
        <Route path="/consultations-page" element={<ConsultationsPage addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
