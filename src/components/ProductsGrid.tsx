import type { IProduct } from "../interfaces/IProduct";
import Product from "./Product";

interface IProductsProps {
  products: IProduct[];
}

export default function ProductsGrid({ products }: IProductsProps) {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-4xl text-white font-bold text-center mb-12">Products</h2>
        <div className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full">
          {products.length}
        </div>
      </header>
      <div className="grid grid-cols-4 gap-2 px-4 mx-auto">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
