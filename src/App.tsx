import "./App.css";
import Product from "./components/Product";
import { products } from "./data/products_data";
// https://dummyjson.com/products

function App() {
  return (
    <div className="flex justify-center items-center w-screen  h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="grid grid-cols-3 gap-2 max-w-4xl px-4 mx-auto">
        <Product product={products[0]} />
      </div>
    </div>
  );
}

export default App;
