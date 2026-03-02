import CreateProduct from "../components/CreateProduct";
import Modal from "../components/Modal";
import Preloader from "../components/Preloader";
import ProductsGrid from "../components/ProductsGrid";
import useProducts from "../hooks/useProducts";

export default function HomePage() {
  const { products, isLoading, isError, isModalOpen, setIsModalOpen } = useProducts();
  return (
    <div className="pt-24  min-h-screen py-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto">
        {isLoading ? (
          <Preloader />
        ) : (
          <ProductsGrid createProduct={() => setIsModalOpen(true)} products={products} />
        )}
        {isError && <p className="text-white text-center font-bold">{isError}</p>}
      </div>
      {isModalOpen && (
        <Modal title="Create New Product">
          <CreateProduct onCreate={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}
