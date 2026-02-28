import "./App.css";
import Modal from "./components/Modal";
import Preloader from "./components/Preloader";
import ProductsGrid from "./components/ProductsGrid";
import useProducts from "./hooks/useProducts";

function App() {
  const { products, isLoading, isError } = useProducts();

  return (
    <div className="w-screen pt-24  min-h-screen py-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto">
        {isLoading ? <Preloader /> : <ProductsGrid products={products} />}
        {isError && <p className="text-white text-center font-bold">{isError}</p>}
      </div>
      <Modal />
    </div>
  );
}

export default App;
