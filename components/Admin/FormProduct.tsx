"use client"
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import Spinner from '../Spinner'
import { UseFormReturn } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface IFormTodoProps {
    onSubmit:  (data: {title: string ;body?: string | undefined;
        price: number; image: string; color: string; size: string;}) => Promise<void>;
    form: UseFormReturn<{ title: string; body?: string | undefined 
        price: number; image: string; color: string; size: string;
     }, unknown, { title: string; body?: string | undefined 
        price: number; image: string; color: string; size: string;
     }>;
    loading: boolean;
}
type FormProductProps = {
  onSubmit: (data: { title: string; body?: string; price: number; image: string; color: string; size: string; }) => Promise<void>;
  form: any;
  loading: boolean;
};
const FormProduct = ({onSubmit, form , loading}:FormProductProps) => {
  return (
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title todo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desertion</FormLabel>
              <FormControl>
                    <Textarea placeholder="Type your description here." {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="title price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input placeholder="title image" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Color</FormLabel>
              <FormControl>
                <Input placeholder="title color" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />

            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
              <FormItem>
                <FormLabel>Size</FormLabel>
                <FormControl>
                <select
                  {...field}
                  className="border rounded px-3 py-2 w-full"
                >
                  <option value="">Select size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
            />
        <div className="flex items-center gap-3">
      </div>
        <div className="flex justify-flex-start items-center">
          {loading ? <Spinner/> : 
            <Button type="submit">Save</Button>
          }  
        </div>
      </form>
    </Form>
  )
}

export default FormProduct
