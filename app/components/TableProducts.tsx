import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IProduct } from "@/interfaces";
import ProductAction from "./ProductAction";
import Image from "next/image";
const TableProducts = ({product} : {product:IProduct[]}) => {
   
  return (
    <Table>
        <TableHeader className="hidden md:table-header-group">
            <TableRow>
                <TableHead className="w-[100px]">Counter</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Body</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Color</TableHead>
                <TableHead className="text-right">Size</TableHead>
                <TableHead className="text-right">Image</TableHead>
                <TableHead className="text-right">Action</TableHead>
            </TableRow>
        </TableHeader>
  <TableBody>
        {product.map((item,index) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="font-medium">{item.title}</TableCell>
            <TableCell>{item.body && item.body?.length > 19 ? item.body?.slice(0,19) : item.body}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.color}</TableCell>
            <TableCell>{item.size}</TableCell>
            <TableCell className="text-right">
              <img src={item.image} className="h-12 w-12"  alt={item.body ? item.body : "empty"}/>
              {/* {item.image} */}
              </TableCell>
            <TableCell className="text-right">
            <ProductAction product={item} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
        <TableFooter>
            <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="text-end">product{product.length > 0 ? product.length : "The Empty Product"}</TableCell>
            </TableRow>
        </TableFooter>
    </Table>
  )
}

export default TableProducts;
