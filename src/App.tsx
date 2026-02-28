import "./App.css";
import Product from "./components/Product";

function App() {
  return (
    <div className="flex justify-center items-center w-screen  h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="grid grid-cols-4 gap-2">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default App;
