import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Decorations from './pages/Decorations'
import Consultations from './pages/Consultations'
import Garden from './pages/Garden'
import Location from './pages/Location'
import Renovation from './pages/Renovation'
import Courses from './pages/Courses'
import OtherServices from './pages/OtherServices'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decorations" element={<Decorations />} />
        <Route path="/consultations" element={<Consultations />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/location" element={<Location />} />
        <Route path="/renovation" element={<Renovation />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/other-services" element={<OtherServices />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
