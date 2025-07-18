import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GoldCollection from './components/GoldCollection';
import LuxuryGoldChokers from './components/LuxuryGoldChokers';
import CartPage from './components/CartPage';
import Footer from './components/footer'; // Make sure the filename is lowercase if the file is named `footer.jsx`

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
      <Navbar />

      <Routes>
        <Route path="/" element={<><HeroSection /><GoldCollection /></>} />
        <Route path="/LuxuryGoldChokers" element={<LuxuryGoldChokers addToCart={addToCart} />} />
        <Route path="/CartPage" element={<CartPage cartItems={cart} removeFromCart={removeFromCart} />} />
      </Routes>

      {/* ✅ Correct usage of Footer */}
      <Footer />
    </div>
  );
}

export default App;
