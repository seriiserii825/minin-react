import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-screen flex-col h-screen items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl font-bold text-white">Hello, World!</h1>
      <p className="mt-4 text-lg text-white">Welcome to your React app with Tailwind CSS!</p>
      <div className="mt-6 text-2xl font-semibold text-white">Count: {count}</div>
      <button
        className="mt-6 px-4 py-2 bg-white text-purple-500 rounded hover:bg-gray-200 transition"
        onClick={() => setCount(count + 1)}>
        Increment count
      </button>
    </div>
  );
}

export default App;
