'use server'
import { IProduct } from '@/interfaces';
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';


const prisma = new PrismaClient()

export const getUserTodoListActions = async () => {
    return await prisma.product.findMany({
        orderBy: {
            createdAt: 'desc'
        },}
    )
}
export const createTodoActions = async ({title , body , price, image }:IProduct) => {
    await prisma.product.create({
        data: {
            title,
            body,
            price,
            image

        }
    },)
    revalidatePath('/', 'layout')

}
export const updateTodoActions = async ({id ,title,body,price, image} : IProduct) => {
    await prisma.product.update(
        {
            where: {
                id: id
            },
            data: {
                title,
                body,
                price,
                image
            }
        }
    )
    revalidatePath('/', 'layout')
}
export const deleteTodoActions = async ({id}:{id:string}) => {
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
