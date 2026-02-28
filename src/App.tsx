import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Preloader from "./components/Preloader";
import ProductsGrid from "./components/ProductsGrid";
import type { IProduct } from "./interfaces/IProduct";
import type { IProductResponse } from "./interfaces/IProductResponse";

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
      {isLoading ? <Preloader /> : <ProductsGrid products={products} />}
    </div>
  );
}

export default App;
