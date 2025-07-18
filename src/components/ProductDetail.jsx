// import React from 'react';
// import { useParams } from 'react-router-dom';
// import products from './productData';

// export default function ProductDetail() {
//   const { id } = useParams();
//   const product = products.find((item) => item.id === parseInt(id));

//   if (!product) return <div className="text-center mt-20 text-xl">Product not found.</div>;

//   return (
//     <div className="min-h-screen bg-white flex flex-col md:flex-row p-8 md:p-20">
//       <div className="w-full md:w-1/2 flex justify-center">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="rounded-xl w-full h-auto max-w-lg shadow-xl"
//         />
//       </div>
//       <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-16">
//         <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">{product.title}</h1>
//         <p className="text-2xl text-[#A67C00] font-semibold mb-4">{product.price}</p>

//         <div className="mb-4">
//           <label className="block mb-2 text-gray-600">Purity:</label>
//           <select className="border p-2 rounded w-40">
//             <option>14 KT</option>
//             <option>18 KT</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2 text-gray-600">Colour:</label>
//           <select className="border p-2 rounded w-40">
//             <option>Yellow Gold</option>
//             <option>Rose Gold</option>
//           </select>
//         </div>

//         <div className="mb-6">
//           <label className="block mb-2 text-gray-600">Size:</label>
//           <select className="border p-2 rounded w-40">
//             <option>14.5</option>
//             <option>15.0</option>
//           </select>
//         </div>

//         <button className="bg-[#A67C00] hover:bg-[#8C5F00] text-white font-medium px-6 py-3 rounded mr-4">
//           Add to Cart
//         </button>
//         <button className="border border-[#A67C00] text-[#A67C00] font-medium px-6 py-3 rounded hover:bg-[#A67C00] hover:text-white">
//           Buy it now
//         </button>
//       </div>
//     </div>
//   );
// }
