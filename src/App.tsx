import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Preloader from "./components/Preloader";
import ProductsGrid from "./components/ProductsGrid";
import type { IProduct } from "./interfaces/IProduct";
import type { IProductResponse } from "./interfaces/IProductResponse";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const res = await axios.get<IProductResponse>("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsError(error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }
  return (
    <div className="w-screen pt-24  min-h-screen py-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto">
        {isLoading ? <Preloader /> : <ProductsGrid products={products} />}
        {isError && <p className="text-white text-center font-bold">{isError}</p>}
      </div>
    </div>
  );
}

export default App;
