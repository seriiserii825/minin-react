import axios from "axios";
import { useState } from "react";

interface CreateProductProps {
  onCreate: () => void;
}

export default function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");

  async function createProductApi() {
    try {
      const res = await axios.post("https://dummyjson.com/products/add", {
        title: value,
      });
      console.log(res, "res");
    } catch (error) {
      console.log(error, "error");
    }
  }

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();

    if (!value.trim()) {
      alert("Product name cannot be empty");
      return;
    }

    await createProductApi();
    onCreate();
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Product Name"
        className="border p-2 w-full mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Product
      </button>
    </form>
  );
}
