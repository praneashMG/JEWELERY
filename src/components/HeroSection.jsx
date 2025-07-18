import React from 'react';

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col md:flex-row overflow-hidden">
            <div className="h-full md:w-1/2 bg-black flex items-center px-7 md:px-16">
        <div>
          <h1
            className="text-4xl md:text-6xl font-bold text-[#D4AF37] leading-tight drop-shadow-lg mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Gold Luxury <br /> Collection
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light tracking-wide mb-6">
            Exquisite handcrafted gold jewelry that embodies timeless elegance and sophistication.
          </p>
          <button className="bg-[#D4AF37] hover:bg-[#f2cd5c] text-black px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg hover:shadow-yellow-500/30">
            DISCOVER MORE
          </button>
        </div>
      </div>

      {/* Right Side: Full Image */}
      <div className="w-full md:w-2/2 h-[50vh] md:h-full">
        <img
          src="https://www.icer.it/wp-content/uploads/2018/01/Quotazione-Argento-Usato.jpg"
          alt="Luxury Necklace"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
