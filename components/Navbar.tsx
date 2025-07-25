import { Car, CardSim, CircleUserRound, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <div className="flex justify-center items-center gap-10">
    <Link href={'/'} className="justify-center text-black text-[32px] font-bold cursor-pointer">SHOP.CO</Link>
    <div className="flex justify-start items-center gap-6">
        <Link href={'/products'} className="justify-start text-black text-base font-normal font-['Satoshi'] cursor-pointer">Shop</Link>
        <div className="justify-start text-black text-base font-normal font-['Satoshi']">On Sale</div>
        <div className="justify-start text-black text-base font-normal font-['Satoshi']">New Arrivals</div>
        <div className="justify-start text-black text-base font-normal font-['Satoshi']">Brands</div>
    </div>
    <div className="w-60 px-4 py-3 bg-[#efefef] rounded-[62px] flex justify-start items-start gap-3 overflow-hidden">
        <Search  color='#00000066'/>
        <p className="justify-start text-black/40 text-base font-normal font-['Satoshi']">Search for products...</p>
    </div>
    <div className="flex justify-start items-start gap-3.5">
       <Link href={'/cart'} className="flex justify-center items-center text-black text-base font-normal font-['Satoshi'] cursor-pointer">
       <ShoppingCart  />
       </Link>
      <CircleUserRound />  
    </div>
</div>
  )
}

export default Navbar
