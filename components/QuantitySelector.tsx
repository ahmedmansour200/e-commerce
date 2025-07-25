'use client';
import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react"; // Or any icon library

interface QuantitySelectorProps {
    quantity: number;
    setQuantity: (value: number) => void;
    maxStock?: number; // Optional prop to limit the maximum stock
}
const QuantitySelector = ({ quantity, setQuantity, maxStock = 10 }: QuantitySelectorProps  ) => {
  const handleIncrement = () => {
    if (quantity < maxStock) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  console.log(quantity, 'quantity')

  return (
    <>
    {quantity !== 0 && (

        <div className="flex items-center justify-between w-32 border-2 border-yellow-400 rounded-full px-3 py-1">
      {quantity === 1 ? (
          <button onClick={() => setQuantity(0)} className="text-black">
          <Trash2 size={18} />
        </button>
      ) : (
          <button onClick={handleDecrement} className="text-black text-xl">
          −
        </button>
      )}
      <span className="mx-2 font-medium">{quantity}</span>
      <button onClick={handleIncrement} className="text-black text-xl">
        +
      </button>
         </div>
)}
    </>
  );
};
export default QuantitySelector;