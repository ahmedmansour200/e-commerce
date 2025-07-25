'use server'
import { IProduct } from '@/interfaces';
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';


const prisma = new PrismaClient()

export const geProductListActions = async () => {
    return await prisma.product.findMany({
        orderBy: {
            createdAt: 'desc'
        },}
    )
}
export const createProductActions = async ({title , body , price, image, color , size }:IProduct) => {
    await prisma.product.create({
        data: {
            title,
            body,
            price,
            image,
            color,
            size,

        }
    },)
    revalidatePath('/', 'layout')

}
export const getProductIdActions = async ({id}: {id:string}) => {
    if (!id) {
        throw new Error('ID is required to get a product')
    }
    return await prisma.product.findUnique({
        where: {
            id
        }
    })
}
export const updateProductActions = async ({id ,title,body,price, image, color , size} : IProduct) => {
    await prisma.product.update(
        {
            where: {
                id: id
            },
            data: {
                title,
                body,
                price,
                image,
                color,
                size,
            }
        }
    )
    revalidatePath('/', 'layout')
}
export const deleteProductActions = async ({id}:{id:string}) => {
    if (!id) {
        throw new Error('ID is required to delete a todo item')
    }
    await prisma.product.delete({
        where: {
            id
        }
    })
    revalidatePath('/', 'layout')
}
