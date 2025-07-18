import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', '').replace(',', ''));
    return total + price * item.quantity;
  }, 0);

  const tax = subtotal * 0.1;
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
            <div className="text-lg text-gray-700 space-y-2">
              <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
              <p>Tax (10%): ₹{tax.toFixed(2)}</p>
              <p>Shipping: ₹{shipping.toFixed(2)}</p>
              <hr />
              <p className="font-bold text-black">Total: ₹{total.toFixed(2)}</p>
            </div>
            <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg text-lg">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
