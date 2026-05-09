"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  // -----------------------------------
  // FETCH PRODUCTS
  // -----------------------------------
  async function fetchProducts() {

    const { data, error } = await supabase
      .from("nike_products")
      .select("*")
      .limit(100);

    if (error) {
      console.log(error);
    } else {
      setProducts(data);
      setFilteredProducts(data);
    }
  }

  // -----------------------------------
  // INITIAL LOAD
  // -----------------------------------
  useEffect(() => {
    fetchProducts();
  }, []);

  // -----------------------------------
  // SEARCH FILTER
  // -----------------------------------
  useEffect(() => {

    const filtered = products.filter((item) =>
      item.Product_Name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredProducts(filtered);

  }, [search, products]);

  return (

    <div className="p-8 bg-white min-h-screen text-black">

      <h1 className="text-4xl font-bold mb-4 text-center">
        Nike Products Dashboard
      </h1>

      <p className="mb-6 text-lg text-center">
        Total Products: {filteredProducts.length}
      </p>

      {/* SEARCH + REFRESH */}
      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded w-full"
        />

        <button
          onClick={fetchProducts}
          className="bg-black text-white px-6 rounded cursor-pointer hover:bg-gray-800"
        >
          Refresh
        </button>

      </div>

      <div className="overflow-auto bg-white rounded-lg shadow-lg">

        <table className="min-w-full border-collapse">

          <thead className="bg-black text-white">

            <tr>

              <th className="border p-3">Image</th>
              <th className="border p-3">Product</th>
              <th className="border p-3">Description</th>
              <th className="border p-3">Price</th>
              <th className="border p-3">Reviews</th>
              <th className="border p-3">Tag</th>

            </tr>

          </thead>

          <tbody>

            {filteredProducts.map((item) => (

              <tr
                key={item.id}
                className="hover:bg-gray-100 text-black"
              >

                <td className="border p-3">

                  <img
                    src={item.Product_Image_URL}
                    alt={item.Product_Name}
                    width="80"
                  />

                </td>

                <td className="border p-3 font-semibold text-black">
                  {item.Product_Name}
                </td>

                <td className="border p-3 text-black">
                  {item.Product_Description}
                </td>

                <td className="border p-3 text-black">
                  {item.Discount_Price}
                </td>

                <td className="border p-3 text-black">
                  {item.Review_Count}
                </td>

                <td className="border p-3 text-black">
                  {item.Product_Tagging}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}