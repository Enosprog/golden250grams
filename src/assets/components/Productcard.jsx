import React from "react";

const ProductCard = ({ product }) => (
  <div className="bg-white border-2 border-softOrange rounded-xl p-4 text-center shadow-md w-64 hover:scale-105 transition-transform">
    <img src={product.image} alt={product.name} className="w-full rounded-lg mb-4"/>
    <h3 className="text-warmBrown font-semibold text-lg mb-1">{product.name}</h3>
    <p className="text-deepBrown text-sm mb-2">{product.description}</p>
    <p className="text-goldenYellow font-bold mb-2">{product.price}</p>
    <button className="bg-goldenYellow text-deepBrown font-bold py-2 px-4 rounded-md hover:bg-softOrange transition">
      Buy Now
    </button>
  </div>
);

export default ProductCard;
