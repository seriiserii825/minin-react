import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import type { IProductResponse } from "./interfaces/IProductResponse";
import type { IProduct } from "./interfaces/IProduct";
import ProductsGrid from "./components/ProductsGrid";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const res = await axios.get<IProductResponse>("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }
  return (
    <div className="flex justify-center items-center w-screen  min-h-screen py-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {isLoading ? "Loading..." : <ProductsGrid products={products} />}
    </div>
  );
}

export default App;
