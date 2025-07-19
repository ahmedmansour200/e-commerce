"use client"
import React, { useState } from 'react'
import { Trash } from 'lucide-react'
import Spinner from './Spinner'
import { IProduct } from '@/interfaces'
import { Button } from '@/components/ui/button'
import { EditProductForm } from './EditProductForm'
import { deleteProductActions } from '@/actions/product.actions'

const ProductAction = ({product} : {product:IProduct}) => {
     const [loading, setLoading] = useState(false);
    
        const handleDelete = async (id: string) => {
            setLoading(true);
            await deleteProductActions({ id });
            setLoading(false);
        }
  return (
      <div className="flex items-center justify-end gap-2">
            <EditProductForm product={product} /> 
             <Button  onClick={() => handleDelete(product.id as string)} size={'icon'} variant="destructive">
                   {loading ? <Spinner/> : <Trash size={16} />}  
            </Button>
        </div>
  )
}

export default ProductAction
