import { geProductListActions } from '@/actions/product.actions'
import ProductItem from '@/components/ProductItem'
import React, { Fragment } from 'react'
const page =async () => {
    const getProducts = await geProductListActions()
  return (
    <div className='container mx-auto grid grid-cols-3 grid-rows-3 space-x-4 space-y-6'>
    {
        getProducts && getProducts.map((item,idx) => (
            <Fragment key={item.id}>
            <ProductItem item={item}/>           
            </Fragment>
        ))
    }
    </div>
  )
}

export default page
