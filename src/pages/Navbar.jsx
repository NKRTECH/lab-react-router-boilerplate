import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <>

    <div id='navbar'>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/About">About</Link></span>
        <span><Link to="/Contact">Contact</Link></span>
        <span><Link to="/KYC">KYC</Link></span>
        <span className='kalvium'>KALVIUM ❤️</span>
    </div>

    </>
  )
}

export default Navbar