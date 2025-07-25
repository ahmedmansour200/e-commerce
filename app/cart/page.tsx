'use client';
import { useState } from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';

const Cart = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Cool T-shirt',
      body: 'Comfortable cotton T-shirt',
      price: 29.99,
      stock: 5,
      quantity: 1,
      image: ['https://via.placeholder.com/150'],
    },
    {
      id: 2,
      title: 'Stylish Hat',
      body: 'Fashionable and modern',
      price: 19.99,
      stock: 3,
      quantity: 2,
      image: ['https://via.placeholder.com/150'],
    },
  ]);

  const handleQuantityChange = (id: number, newQty: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-6 border-b pb-6 mb-6">
              <img
                src={item.image[0]}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md border"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.body}</p>
                <p className="text-base font-bold mt-2">${item.price}</p>

                {/* Quantity Controls */}
                <div className="mt-4">
                  <div className="flex items-center justify-between w-32 border-2 border-yellow-400 rounded-full px-3 py-1">
                    {item.quantity === 1 ? (
                      <button onClick={() => handleRemoveItem(item.id)}>
                        <Trash2 size={18} />
                      </button>
                    ) : (
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="text-xl">
                        −
                      </button>
                    )}
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() =>
                        item.quantity < item.stock &&
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="text-xl"
                    >
                      +
                    </button>
                  </div>
                  {item.stock && item.quantity >= item.stock && (
                    <p className="text-sm text-red-500 mt-1">
                      Only {item.stock} left in stock
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-indigo-600 text-white py-3 font-medium hover:bg-indigo-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

// const CartItem = ({ item }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleIncrement = () => {
//     if (quantity < item.stock) setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     } else {
//       // Optional: remove item
//       console.log('Remove from cart');
//     }
//   };

//   return (
//     <div className="flex items-center gap-6 border-b pb-6 mb-6">
//       {/* Image */}
//       <img
//         src={item.image[0]}
//         alt={item.title}
//         className="w-24 h-24 object-cover rounded-md border"
//       />

//       {/* Product Info */}
//       <div className="flex-1">
//         <h3 className="text-lg font-semibold">{item.title}</h3>
//         <p className="text-sm text-gray-600 mt-1">{item.body}</p>
//         <p className="text-base font-bold mt-2">${item.price}</p>

//         {/* Quantity Selector */}
//         <div className="mt-4">
//           <div className="flex items-center justify-between w-32 border-2 border-yellow-400 rounded-full px-3 py-1">
//             {quantity === 1 ? (
//               <button onClick={handleDecrement}>
//                 <Trash2 size={18} />
//               </button>
//             ) : (
//               <button onClick={handleDecrement} className="text-xl">
//                 −
//               </button>
//             )}
//             <span className="font-medium">{quantity}</span>
//             <button
//               onClick={handleIncrement}
//               disabled={quantity >= item.stock}
//               className="text-xl"
//             >
//               +
//             </button>
//           </div>

//           {item.stock && quantity >= item.stock && (
//             <p className="text-sm text-red-500 mt-1">Only {item.stock} left in stock</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
