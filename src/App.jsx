import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GoldCollection from './components/GoldCollection';
import LuxuryGoldChokers from './components/LuxuryGoldChokers';
import CartPage from './components/CartPage';
import Footer from './components/footer';

import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter(item => item.id !== itemId));
  };

  return (
    <div className="App">
      <Navbar cartItemCount={cart.length} />

      <Routes>
        <Route path="/" element={<><HeroSection /><GoldCollection /></>} />
        <Route path="/LuxuryGoldChokers" element={<LuxuryGoldChokers addToCart={addToCart} />} />
        <Route path="/CartPage" element={<CartPage cartItems={cart} removeFromCart={removeFromCart} />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
