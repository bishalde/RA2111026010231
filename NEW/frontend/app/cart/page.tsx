import React from 'react';

const CartPage = () => {
  return (
    <div className="max-w-4xl my-10 mx-auto p-4  bg-gray-300 rounded-lg shadow-lg">
      <h1 className='text-3xl font-bold text-gray-800 my-6'>Your Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product 1 */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Name 1</h2>
            <p className="text-gray-600 mb-2">Price: $100</p>
            <p className="text-gray-600 mb-2">Quantity: 2</p>
            <button className="bg-red-500 text-white rounded-md px-4 py-2 mt-2 focus:outline-none hover:bg-red-600 transition duration-300">Remove from Cart</button>
          </div>
        </div>
        
        {/* Product 2 */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Name 2</h2>
            <p className="text-gray-600 mb-2">Price: $50</p>
            <p className="text-gray-600 mb-2">Quantity: 1</p>
            <button className="bg-red-500 text-white rounded-md px-4 py-2 mt-2 focus:outline-none hover:bg-red-600 transition duration-300">Remove from Cart</button>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="mt-8 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Total: $250</h2>
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 focus:outline-none hover:bg-blue-600 transition duration-300">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
