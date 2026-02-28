import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import type { IProduct } from "../interfaces/IProduct";
import type { IProductResponse } from "../interfaces/IProductResponse";
export default function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const res = await axios.get<IProductResponse>("https://dummyjson.com/products?limit=12");
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
  return { products, isLoading, isError };
}
