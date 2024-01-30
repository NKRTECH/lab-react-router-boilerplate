import './App.css'
import Navbar from './pages/Navbar'
import {  Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import KYC from './pages/KYC';

function App() {

  return (
    <>
      <Navbar />

      <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/KYC' element={<KYC />} />
      </Routes>
      </div>
    </>
  )
}

export default App
