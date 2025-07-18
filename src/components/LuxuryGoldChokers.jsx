import React, { useState } from 'react';
import { FiHeart, FiShoppingBag, FiSearch, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const LuxuryGoldChokers = () => {
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  const chokers = [
    {
      id: 1,
      name: "Imperial Diamond Collar",
      price: "$2,850",
      originalPrice: "$3,200",
      image: "https://i.pinimg.com/originals/31/a2/a4/31a2a4e7d9ac7e73f548cf72c26cc9db.jpg",
      images: [
  "https://sothebys-com.brightspotcdn.com/dims4/default/45bb0b4/2147483647/strip/true/crop/4397x4397+0+0/resize/566x566!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Ff1%2F1d%2Fa67ad8e24c6e86b2fefc8b080ea7%2Fls2202-98dsd-1-t1.jpg",
  "https://i.pinimg.com/originals/ef/12/ee/ef12ee28edfcb85232d0583c35065401.jpg",
  "https://i.pinimg.com/originals/ef/5a/d4/ef5ad48c45523341e03ec3be90529d31.jpg",
  "https://img.joomcdn.net/b1c36a92c044126c919794631c7f77f9f37539b4_original.jpeg"
],

      description: "24K gold with 2ct diamond accents",
      category: "diamond",
      limited: true,
      rating: 5
    },
    {
      id: 2,
      name: "Renaissance Pearl Choker",
      price: "$1,950",
      image: "https://i.pinimg.com/originals/25/75/d5/2575d55b886423f90704f84417651600.jpg",
      description: "18K gold with Akoya pearls",
      category: "pearl",
      bestseller: true,
      rating: 4
    },
    {
      id: 3,
      name: "Celestial Moon Choker",
      price: "$1,750",
      image: "https://i.etsystatic.com/17902521/r/il/4bf581/2055834557/il_1588xN.2055834557_c0p8.jpg",
      description: "Moon phases in 18K gold",
      category: "statement",
      new: true,
      rating: 5
    },
    {
      id: 4,
      name: "Art Deco Geometric",
      price: "$2,150",
      image: "https://i.pinimg.com/736x/d4/14/f2/d414f2956b523a7b5278f02ade903384.jpg",
      description: "Angular 14K gold with onyx",
      category: "vintage",
      rating: 4
    },
    {
      id: 5,
      name: "Modernist Gold Band",
      price: "$1,350",
      originalPrice: "$1,600",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvbGQlMjBuZWNrbGFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description: "Sleek 18K gold fluid design",
      category: "minimalist",
      rating: 5
    },
    {
      id: 6,
      name: "Royal Sapphire Border",
      price: "$2,750",
      image: "https://i.pinimg.com/originals/eb/88/97/eb88974f4e5889c86fd06758623c75ed.jpg",
      description: "18K gold with Ceylon sapphires",
      category: "diamond",
      rating: 5
    },
    {
      id: 7,
      name: "Victorian Lace",
      price: "$1,850",
      image: "https://images-na.ssl-images-amazon.com/images/I/81XjKlKMGaL._AC_UL1500_.jpg",
      description: "Delicate 14K gold filigree",
      category: "vintage",
      rating: 4
    },
    {
      id: 8,
      name: "Orient Pearl Cascade",
      price: "$2,450",
      image: "https://i.pinimg.com/736x/c7/e8/ae/c7e8ae1243595cdb2e148ffef3f734d7.jpg",
      description: "Tahitian pearls on gold chain",
      category: "pearl",
      limited: true,
      rating: 5
    },
    {
      id: 9,
      name: "Baroque Gold Statement",
      price: "$2,650",
      originalPrice: "$3,000",
      image: "https://i.pinimg.com/originals/a2/7e/37/a27e37a9b701f6628466e884da60a90e.jpg",
      description: "Ornate 22K gold with rubies",
      category: "statement",
      rating: 5
    },
    {
      id: 10,
      name: "Bridal Diamond Band",
      price: "$1,950",
      image: "https://i.pinimg.com/736x/d4/89/ad/d489ad60668c7dc09cc97843ff8524e9.jpg",
      description: "Micro-pavé diamonds on gold",
      category: "diamond",
      bestseller: true,
      rating: 5
    },
    {
      id: 11,
      name: "Empress Gold Collar",
      price: "$3,250",
      image: "https://i.pinimg.com/originals/84/8e/a4/848ea4e02460aa7bc0e79c1eb3b65f7c.jpg",
      description: "22K gold Byzantine pattern",
      category: "statement",
      new: true,
      rating: 5
    },
    {
      id: 12,
      name: "Minimalist Gold Torque",
      price: "$1,150",
      image: "https://www.harperkendall.com/cdn/shop/products/1.35.0063.jpg",
      description: "Solid 18K gold contemporary",
      category: "minimalist",
      rating: 4
    }
  ];

  const filteredChokers = activeFilter === 'all' 
    ? chokers 
    : chokers.filter(choker => choker.category === activeFilter);

  const addToCart = (item) => {
    setCart([...cart, item]);
    navigate('/cart'); // Navigate to cart page
  };

  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
    navigate('/wishlist'); // Navigate to wishlist page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Luxury Header */}
      <header className="pt-16 pb-12 px-6 text-center">
        <h1 className="text-5xl font-serif font-bold text-amber-900 mb-4 tracking-wider">GOLDEN ÉCLAT</h1>
        <p className="text-lg text-amber-700 max-w-2xl mx-auto italic">
          "Heirloom-quality gold chokers crafted by master jewelers"
        </p>
      </header>

      {/* Collection Filters */}
      <div className="flex justify-center gap-4 mb-12 px-6 flex-wrap">
        {['all', 'diamond', 'pearl', 'statement', 'minimalist', 'vintage'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full capitalize transition-all ${
              activeFilter === filter 
                ? 'bg-amber-800 text-white shadow-md' 
                : 'bg-white text-amber-800 hover:bg-amber-50'
            }`}
          >
            {filter === 'all' ? 'All Collections' : filter}
          </button>
        ))}
      </div>

      {/* Choker Collection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 pb-20 max-w-7xl mx-auto">
        {filteredChokers.map((choker) => (
          <div key={choker.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative">
            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 space-y-2">
              {choker.limited && (
                <span className="bg-amber-900 text-white text-xs px-3 py-1 rounded-full block">
                  Limited Edition
                </span>
              )}
              {choker.bestseller && (
                <span className="bg-amber-700 text-white text-xs px-3 py-1 rounded-full block">
                  Bestseller
                </span>
              )}
              {choker.new && (
                <span className="bg-amber-600 text-white text-xs px-3 py-1 rounded-full block">
                  New Arrival
                </span>
              )}
            </div>

            {/* Wishlist Button */}
            <button 
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors shadow-sm"
              onClick={() => addToWishlist(choker)}
            >
              <FiHeart className="text-amber-800" />
            </button>

            {/* Product Image */}
            <div className="h-80 bg-amber-50 overflow-hidden relative">
              <img
                src={choker.image}
                alt={choker.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button 
                  onClick={() => setQuickViewItem(choker)}
                  className="bg-white text-amber-900 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-amber-100"
                >
                  <FiSearch /> Quick View
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < choker.rating ? 'text-amber-500' : 'text-amber-200'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-xl font-serif font-medium text-amber-900 mb-1">{choker.name}</h3>
              <p className="text-amber-700 text-sm mb-3">{choker.description}</p>
              <div className="flex justify-between items-center pt-3 border-t border-amber-100">
                <div>
                  <span className="text-lg font-bold text-amber-800">{choker.price}</span>
                  {choker.originalPrice && (
                    <span className="text-amber-500 line-through text-sm ml-2">{choker.originalPrice}</span>
                  )}
                </div>
                <button 
                  className="bg-amber-800 hover:bg-amber-700 text-white p-2 rounded-full transition-colors"
                  onClick={() => addToCart(choker)}
                >
                  <FiShoppingBag />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {quickViewItem && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setQuickViewItem(null)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-amber-50"
            >
              <FiX className="text-amber-800 text-lg" />
            </button>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-amber-50">
                <div className="h-96 bg-white rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                  <img 
                    src={quickViewItem.images?.[activeImageIndex] || quickViewItem.image} 
                    alt={quickViewItem.name} 
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {quickViewItem.images?.map((img, i) => (
                    <div 
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`h-20 bg-white rounded overflow-hidden cursor-pointer border-2 ${activeImageIndex === i ? 'border-amber-500' : 'border-transparent'} hover:border-amber-500`}
                    >
                      <img 
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-2xl font-serif font-bold text-amber-900 mb-2">{quickViewItem.name}</h2>
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < quickViewItem.rating ? 'text-amber-500' : 'text-amber-200'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-amber-700 text-sm">12 Reviews</span>
                </div>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-amber-800">{quickViewItem.price}</span>
                  {quickViewItem.originalPrice && (
                    <span className="text-amber-500 line-through ml-3">{quickViewItem.originalPrice}</span>
                  )}
                </div>
                
                <p className="text-amber-700 mb-6">{quickViewItem.description}</p>
                
                <div className="mb-8">
                  <h3 className="font-medium text-amber-900 mb-2">Details</h3>
                  <ul className="text-amber-700 space-y-1 text-sm">
                    <li>• 18K-24K solid gold construction</li>
                    <li>• Handcrafted by master jewelers</li>
                    <li>• Adjustable length (14"-16")</li>
                    <li>• Includes premium velvet gift box</li>
                    <li>• Lifetime craftsmanship guarantee</li>
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <button 
                    className="bg-amber-800 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2"
                    onClick={() => {
                      addToCart(quickViewItem);
                    }}
                  >
                    <FiShoppingBag /> Add to Cart
                  </button>
                  <button 
                    className="border border-amber-800 text-amber-800 hover:bg-amber-50 px-6 py-3 rounded-full font-medium"
                    onClick={() => {
                      addToWishlist(quickViewItem);
                    }}
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Luxury Footer */}
     
    </div>
  );
};

export default LuxuryGoldChokers;
// import React, { useState, useEffect } from 'react';
// import { FiHeart, FiShoppingBag, FiSearch, FiX } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LuxuryGoldChokers = () => {
//   const [chokers, setChokers] = useState([]);
//   const [quickViewItem, setQuickViewItem] = useState(null);
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [activeFilter, setActiveFilter] = useState('all');
//   const navigate = useNavigate();

//   // ✅ Fetch chokers from MongoDB
//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/items/all');
//         setChokers(response.data);
//       } catch (err) {
//         console.error("Failed to fetch chokers:", err.message);
//       }
//     };
//     fetchItems();
//   }, []);

//   // Reset image index when quick view opens
//   useEffect(() => {
//     setActiveImageIndex(0);
//   }, [quickViewItem]);

//   const filteredChokers =
//     activeFilter === 'all'
//       ? chokers
//       : chokers.filter((choker) => choker.category === activeFilter);

//   // ✅ Add to MongoDB cart
//   const addToCart = async (item) => {
//     try {
//       await axios.post('http://localhost:5000/api/items/add', {
//         ...item,
//         type: 'cart',
//       });
//       navigate('/cart');
//     } catch (err) {
//       console.error("Add to cart error:", err.message);
//     }
//   };

//   // ✅ Add to MongoDB wishlist
//   const addToWishlist = async (item) => {
//     try {
//       await axios.post('http://localhost:5000/api/items/add', {
//         ...item,
//         type: 'wishlist',
//       });
//       navigate('/wishlist');
//     } catch (err) {
//       console.error("Add to wishlist error:", err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col">
//       {/* Header */}
//       <header className="pt-16 pb-12 px-6 text-center">
//         <h1 className="text-5xl font-serif font-bold text-amber-900 mb-4 tracking-wider">GOLDEN ÉCLAT</h1>
//         <p className="text-lg text-amber-700 max-w-2xl mx-auto italic">
//           "Heirloom-quality gold chokers crafted by master jewelers"
//         </p>
//       </header>

//       {/* Filters */}
//       <div className="flex justify-center gap-4 mb-12 px-6 flex-wrap">
//         {['all', 'diamond', 'pearl', 'statement', 'minimalist', 'vintage'].map((filter) => (
//           <button
//             key={filter}
//             onClick={() => setActiveFilter(filter)}
//             className={`px-5 py-2 rounded-full capitalize transition-all ${
//               activeFilter === filter
//                 ? 'bg-amber-800 text-white shadow-md'
//                 : 'bg-white text-amber-800 hover:bg-amber-50'
//             }`}
//           >
//             {filter === 'all' ? 'All Collections' : filter}
//           </button>
//         ))}
//       </div>

//       {/* Chokers Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 pb-20 max-w-7xl mx-auto">
//         {filteredChokers.map((choker) => (
//           <div key={choker._id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative">
//             {/* Badges */}
//             <div className="absolute top-4 left-4 z-10 space-y-2">
//               {choker.limited && <span className="bg-amber-900 text-white text-xs px-3 py-1 rounded-full block">Limited Edition</span>}
//               {choker.bestseller && <span className="bg-amber-700 text-white text-xs px-3 py-1 rounded-full block">Bestseller</span>}
//               {choker.new && <span className="bg-amber-600 text-white text-xs px-3 py-1 rounded-full block">New Arrival</span>}
//             </div>

//             {/* Wishlist */}
//             <button 
//               className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors shadow-sm"
//               onClick={() => addToWishlist(choker)}
//             >
//               <FiHeart className="text-amber-800" />
//             </button>

//             {/* Image */}
//             <div className="h-80 bg-amber-50 overflow-hidden relative">
//               <img
//                 src={choker.image}
//                 alt={choker.name}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <button 
//                   onClick={() => setQuickViewItem(choker)}
//                   className="bg-white text-amber-900 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-amber-100"
//                 >
//                   <FiSearch /> Quick View
//                 </button>
//               </div>
//             </div>

//             {/* Info */}
//             <div className="p-6">
//               <div className="flex mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} className={`w-4 h-4 ${i < choker.rating ? 'text-amber-500' : 'text-amber-200'}`} fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292..." />
//                   </svg>
//                 ))}
//               </div>
//               <h3 className="text-xl font-serif font-medium text-amber-900 mb-1">{choker.name}</h3>
//               <p className="text-amber-700 text-sm mb-3">{choker.description}</p>
//               <div className="flex justify-between items-center pt-3 border-t border-amber-100">
//                 <div>
//                   <span className="text-lg font-bold text-amber-800">{choker.price}</span>
//                   {choker.originalPrice && <span className="text-amber-500 line-through text-sm ml-2">{choker.originalPrice}</span>}
//                 </div>
//                 <button 
//                   className="bg-amber-800 hover:bg-amber-700 text-white p-2 rounded-full transition-colors"
//                   onClick={() => addToCart(choker)}
//                 >
//                   <FiShoppingBag />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Quick View Modal */}
//       {/* ... (already correct, no changes needed) */}

//       {/* Footer */}
//       <footer className="mt-auto bg-amber-900 text-white text-center py-6 px-4">
//         <p className="font-serif text-lg mb-1">GOLDEN ÉCLAT</p>
//         <p className="text-sm">© {new Date().getFullYear()} Golden Éclat. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default LuxuryGoldChokers;
