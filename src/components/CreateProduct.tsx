import { useState } from "react";

interface CreateProductProps {
  onCreate: () => void;
}

export default function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    console.log("Product created!");
    onCreate();
  }
  return (
    <form onSubmit={submitHandler}>
      <span>{value}</span>
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
