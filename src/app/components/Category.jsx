"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Category() {
      const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, prodRes] = await Promise.all([
          fetch("https://code-commando.com/api/v1/category"),
          fetch("https://code-commando.com/api/v1/products"),
        ]);

        if (!catRes.ok || !prodRes.ok) {
          throw new Error("Failed to load data");
        }

        const catData = await catRes.json();
        const prodData = await prodRes.json();

        const filtered = catData.data.filter(
          (cat) => cat.categoryName.toLowerCase() !== "drinksss"
        );
        const all = { id: "all", categoryName: "All" };
        setCategories([all, ...filtered]);

        setProducts(prodData.data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts =
    selectedCategoryId === "all"
      ? products.slice(0, 8)
      : products
          .filter((product) => product.categoryId === selectedCategoryId)
          .slice(0, 8);

  if (loading) {
    return <div className="text-center mt-32 text-lg">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-32 text-red-500 font-semibold text-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-[200px]">
      {/* Header */}
      <div className="lg:w-[448px] mx-auto text-center px-4 lg:px-0">
        <h3 className="text-xl rounded-lg highlight highlight_bg w-[147px] h-8 mx-auto">
          Our product
        </h3>
        <h3 className="lg:text-[48px] text-[32px] font-semibold">Our Fresh Products</h3>
        <p className="text-center">
          We pride ourselves on offering a wide variety of fresh and flavourful
          fruits, vegetables, and salad ingredients.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mt-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`py-3 px-6 rounded-xl border ${
              selectedCategoryId === cat.id
                ? "bg-[#749B3F] text-white"
                : "bg-white text-[#A6A6A6] border-[#A6A6A6]"
            }`}
            onClick={() => setSelectedCategoryId(cat.id)}
          >
            {cat.categoryName}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 lg:px-[120px]">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/details/${product.id}`}>
            <div className="p-4 shadow-sm h-[360px] space-y-3">
              <img
                src={product.images[0]}
                alt={product.productName}
                className="w-full h-48 object-cover rounded-md mb-4 bg-[#F4F6F6]"
              />
              <h4 className="text-center text-[18px] font-bold">
                {product.productName}
              </h4>
              <p className="text-[18px] lite_font text-center">
                ${product.price}/kg
              </p>
              <button className="py-3 border-[1px] border-gray-200 w-full text-center hover:text-white rounded-xl hover:bg-[#FF6A1A] text-[18px]">
                Add to cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      <button className="w-[203px] mt-8 mx-auto text-center flex justify-center items-center h-[53px] border-[1px] font-bold text-[18px] text-[#FF6A1A] border-[#FF6A1A]">
        See all products
      </button>
    </div>
  
  )
}
