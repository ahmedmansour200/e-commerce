import { IProduct } from '@/interfaces'
import React, { Fragment } from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products} : {products:IProduct[]}) => {
  return (
    <div className='container mx-auto grid grid-cols-3 grid-rows-3 space-x-4 space-y-6'>
    {
        products && products.map((item,index) => (
            <Fragment key={item.id}>
            <ProductItem item={item}/>           
            </Fragment>
        ))
    }
    </div>
  )
}

export default ProductList
