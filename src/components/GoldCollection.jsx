import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  // NECKLACES
  {
    id: 1,
    category: 'Necklaces',
    title: 'Luxury Gold Choker',
    price: '₹1,250',
    image: 'https://www.katerinaperez.com/uploads/editor_file/link/29895/HARAKH_Haveli_pink_diamond_necklace_single.jpg',
    route: '/LuxuryGoldChokers',
  },
  {
    id: 2,
    category: 'Necklaces',
    title: 'Pearl-Embedded Necklace',
    price: '₹1,850',
    image: 'https://images.squarespace-cdn.com/content/v1/58ca05eabf629a24b325fdea/1625399687648-IFNG2LDZ6NL6M1AAZLAY/3_CRH7000803%20-%20CARTIER%20-%20GOLSHIFTEH%20FARAHANI%20-%20SIXIEME%20SENS%20PAR%20CARTIER%20.jpg',
    route: '/PearlEmbeddedNecklace',
  },
  {
    id: 3,
    category: 'Necklaces',
    title: 'Royal Bridal Set',
    price: '₹2,950',
    image: 'https://i5.walmartimages.com/asr/a2083d14-b3b4-4565-abd5-d83a807bd330.69e17335018a4dc52f643f956cf0ec08.jpeg',
    route: '/RoyalBridalSet',
  },

  // EARRINGS
  {
    id: 4,
    category: 'Earrings',
    title: 'Gold Leaf Earrings',
    price: '₹620',
    image: 'https://www.jwojewelers.com/wp-content/uploads/2016/04/Diamond-Earrings-1024x683.jpg',
    route: '/GoldLeafEarrings',
  },
  {
    id: 5,
    category: 'Earrings',
    title: 'Traditional Temple Drops',
    price: '₹790',
    image: 'https://southindiajewels.com/wp/wp-content/uploads/2020/06/one-gram-gold-finish-earrings.jpg',
    route: '/TempleDrops',
  },
  {
    id: 6,
    category: 'Earrings',
    title: 'Minimal Diamond Studs',
    price: '₹540',
    image: 'https://i.pinimg.com/736x/ca/2f/ab/ca2fabdba572aaa3e7506caacd1abfe8.jpg',
    route: '/DiamondStuds',
  },

  // BRACELETS
  {
    id: 7,
    category: 'Bracelets',
    title: 'Elegant Gold Bracelet',
    price: '₹980',
    image: 'https://www.glam.com/img/gallery/bracelets-vs-bangles-the-differences-between-the-wrist-adornments/l-intro-1677627055.jpg',
    route: '/ElegantBracelet',
  },
  {
    id: 8,
    category: 'Bracelets',
    title: 'Antique Kada Bangle',
    price: '₹1,100',
    image: 'https://sc04.alicdn.com/kf/H78d0a7cf5f214ab7a08c737eeb0e52f4V/Wholesale-Women-Bracelet-Jewelry-Custom-Silver-Gold-Plated-Adjustable-butterfly-Charm-Bracelet.jpg',
    route: '/KadaBangle',
  },
  {
    id: 9,
    category: 'Bracelets',
    title: 'Beaded Gold Chain',
    price: '₹740',
    image: 'https://www.jaipurjewels.in/wp-content/uploads/2021/06/FBR1635W18DI1_b.jpg',
    route: '/BeadedChain',
  },

  // RINGS
  {
    id: 10,
    category: 'Rings',
    title: 'Classic Gold Ring',
    price: '₹320',
    image: 'https://img.buzzfeed.com/buzzfeed-static/static/2021-05/20/22/asset/c1322ae3bccd/sub-buzz-497-1621548223-5.jpg',
    route: '/ClassicRing',
  },
  {
    id: 11,
    category: 'Rings',
    title: 'Diamond Solitaire',
    price: '₹1,480',
    image: 'https://i.ytimg.com/vi/JGl_pPOeyqQ/maxresdefault.jpg',
    route: '/DiamondSolitaire',
  },
  {
    id: 12,
    category: 'Rings',
    title: 'Traditional Ethnic Ring',
    price: '₹390',
    image: 'https://kinclimg1.bluestone.com/f_jpg,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIPM0018R01_YAA22XXXXXXXXXXXX_ABCD00-PICS-00001-1024-5657.png',
    route: '/EthnicRing',
  },
];

const categories = ['Necklaces', 'Earrings', 'Bracelets', 'Rings'];

export default function GoldCollection() {
  const [activeTab, setActiveTab] = useState('Necklaces');
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 md:px-24 bg-white">
      <h2 className="text-center text-5xl font-extrabold text-[#A67C00] font-serif mb-4 tracking-wide">
        ✨ Discover Our Gold Collection
      </h2>
      <hr className="w-24 border-t-4 border-[#A67C00] mx-auto mb-12 rounded-full" />

      {/* Tabs */}
      <div className="flex justify-center gap-6 flex-wrap mb-14 text-lg font-medium">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              activeTab === cat
                ? 'bg-gradient-to-r from-[#FFD700] to-[#A67C00] text-white shadow-md'
                : 'border border-[#A67C00] text-[#A67C00] hover:bg-[#A67C00] hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {products
          .filter((product) => product.category === activeTab)
          .map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E6E6E6] transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-[#A67C00] text-lg mb-4 font-semibold">
                  {product.price}
                </p>
                <button
                  onClick={() => navigate(product.route)}
                  className="mt-2 px-6 py-2 rounded-full border-2 border-[#A67C00] text-[#A67C00] font-medium hover:bg-[#A67C00] hover:text-white transition-all duration-300"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
