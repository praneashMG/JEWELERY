import React from 'react';

const Collections = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Our Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Collection items */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Engagement Rings</h2>
          <p className="text-gray-600">Timeless designs for your special moment</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Necklaces</h2>
          <p className="text-gray-600">Elegant pieces for every neckline</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Bracelets</h2>
          <p className="text-gray-600">Delicate adornments for your wrist</p>
        </div>
      </div>
    </main>
  );
};

export default Collections;
