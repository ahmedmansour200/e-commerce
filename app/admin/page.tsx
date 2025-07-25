import React from 'react'
import TableProducts from '../../components/Admin/TableProducts'
import { geProductListActions } from '@/actions/product.actions'
import { AddProductForm } from '../../components/Admin/AddProductForm'

export default async function page() {

const getProduct = await geProductListActions()
  return (
     <div className=" flex flex-col justify-center">
          <AddProductForm/>
        <TableProducts product={getProduct} />
        </div>
  )
}
