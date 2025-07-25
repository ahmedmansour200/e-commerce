"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import FormProduct from "./FormProduct"
import { createProductActions } from "@/actions/product.actions"
const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
   body: z?.string().optional(),
  price: z.number().min(0, {
    message: "Price must be a positive number.",
  }),
  image: z.string().url({ message: "Image must be a valid URL." }),
  color: z.string().min(1, { message: "Color is required." }),
  size: z.string().min(1, { message: "Size is required." }),
})

export function AddProductForm() {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
      price: 4.34,
      image: "",
      color: "",
      size: "L",
    },
  })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {  
      console.log(data)
      setLoading(true)
      await createProductActions(
          {
            title: data.title,
            body: data.body as string,
            price: data.price,
            image: data.image,
            color: data.color,
            size: data.size,
          }
        )
        setLoading(false)
        setOpen(false)
        form.reset();
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <Button variant="outline">
            <Plus />
            Add Todo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Add a new Product item to your list.
          </DialogDescription>
        </DialogHeader>

              <FormProduct onSubmit={onSubmit} form={form} loading={loading} />
        </DialogContent>
    </Dialog>
  )
}
