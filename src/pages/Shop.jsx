import React from 'react';

const Shop = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Shop Our Jewelry</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="bg-gray-200 h-64 mb-4 rounded-md"></div>
            <h3 className="font-semibold">Jewelry Item {item}</h3>
            <p className="text-gray-600">$99.99</p>
            <button className="mt-2 w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Shop;
