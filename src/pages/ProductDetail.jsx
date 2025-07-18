import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-10 text-red-500">Product not found</h2>;
  }

  return (
    <div className="min-h-screen bg-white px-6 md:px-32 py-12 flex flex-col md:flex-row gap-10 items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:w-1/2 object-cover rounded-xl shadow-xl"
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-serif text-yellow-700 font-bold">{product.title}</h1>
        <p className="text-2xl mt-4 text-gray-700">{product.price}</p>
        <p className="mt-6 text-gray-600 leading-relaxed">
          Crafted with the finest materials and timeless elegance. Our gold collection features the perfect blend of luxury and tradition.
        </p>
        <button className="mt-6 px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
