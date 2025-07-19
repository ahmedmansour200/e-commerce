import React from 'react'
import TableProducts from '../components/TableProducts'
import { geProductListActions } from '@/actions/product.actions'
import { IProduct } from '@/interfaces'
import { AddProductForm } from '../components/AddProductForm'

export default async function page() {

const getProduct = await geProductListActions()
  return (
     <div className=" flex flex-col justify-center">
          <AddProductForm/>
        <TableProducts product={getProduct} />
        </div>
  )
}
