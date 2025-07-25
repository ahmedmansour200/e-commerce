'use client';
import { IProduct } from '@/interfaces'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import QuantitySelector from './QuantitySelector'

const ProductItem = ({item}:{item:IProduct}) => {
  const [quantity, setQuantity] = useState(0);
  return (
   <div className="group relative bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <Link href={`/products/${item.id}`}>
  <div className="overflow-hidden rounded-md">
    <img
      src={item.image[2] || "placeholder.png"}
      alt={item.body || "empty"}
      className="aspect-square w-full h-72 object-cover transition-opacity duration-300 group-hover:opacity-75"
    />
  </div>

  <div className="mt-4 flex flex-col justify-between items-start">
      <div className="flex justify-between items-center w-full">

     <h3 className="text-xl font-bold tracking-tight text-gray-900 ">{item?.title}</h3>
      <p className="text-md font-bold text-gray-900">${item.price}</p>

      </div>

      {/* color */}
        <div className='mt-2 flex items-center gap-1.5'>
             {item?.color && item.color.map((item, idx) =>  (
                <div key={idx} className="flex rounded-full outline -outline-offset-1 outline-black/10">
                          <span className={`size-4 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-400 focus-visible:outline-3 focus-visible:outline-offset-3`} 
                          style={{ backgroundColor: item }}
                          />
                        </div>

        ))}
      </div>

    </div>
    </Link>

    <div className='flex gap-2 mt-2'>
     <div className="space-y-4">
    <QuantitySelector quantity={quantity} setQuantity={setQuantity} maxStock={5} />
    { quantity === 0 && (
      <Button size={'lg'} onClick={() => {
        setQuantity(prev => prev + 1)
      }} className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">Add to Cart</Button>
    )}
  </div>
    </div>
</div>



  )
}

export default ProductItem
