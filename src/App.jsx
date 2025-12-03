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

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/decorations" element={<Decorations />} />
        <Route path="/consultations" element={<Consultations />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/location" element={<Location />} />
        <Route path="/renovation" element={<Renovation />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/other-services" element={<OtherServices />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/design-from-scratch" element={<DesignFromScratch />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/modifications" element={<Modifications />} />
        <Route path="/consultations-page" element={<ConsultationsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
