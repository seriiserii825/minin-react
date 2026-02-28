import type { IProduct } from "../interfaces/IProduct";
import formatPrice from "../utils/formatPrice";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  return (
    <div className="group relative w-full max-w-xs sm:max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
        />

        <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-medium px-2.5 py-1 rounded-full uppercase tracking-wide">
          {product.category}
        </span>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 min-h-[3rem]">
          {product.title}
        </h3>

        <p className="text-sm text-gray-600">{product.description}</p>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-yellow-400 text-lg">★★★★☆</span>
          </div>
          <span className="text-sm text-gray-500">
            {product.rating} • {product.reviews.length} reviews
          </span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">{formatPrice(product.price)}</span>
          </div>

          <button className="flex items-center gap-2 bg-indigo-400 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
