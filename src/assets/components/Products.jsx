// src/assets/components/Products.jsx
import React from "react";
import ProductCard from "./ProductCard"; // <- remove './components/'
import { products } from "../../data/product"; // adjust if your products file is elsewhere

const Products = () => (
  <section className="py-20 px-4 text-center">
    <h2 className="text-warmBrown text-3xl font-bold mb-12">Our Products</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  </section>
);

export default Products;
