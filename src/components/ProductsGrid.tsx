import type { IProduct } from "../interfaces/IProduct";
import Product from "./Product";

interface IProductsProps {
  products: IProduct[];
}

export default function ProductsGrid({ products }: IProductsProps) {
  return (
    <div className="grid grid-cols-3 gap-2 max-w-4xl px-4 mx-auto">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
