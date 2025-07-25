import Image from "next/image";
import Navbar from "../components/Navbar";
import { geProductListActions } from "@/actions/product.actions";
import ProductList from "../components/ProductList";

export default async function Home() {
  const getProducts = await geProductListActions()
  return (
   <div className="flex flex-col gap-4">
   <ProductList products = {getProducts}/>
   </div>
  );
}
