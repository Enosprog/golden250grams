import React from "react";

const Navbar = () => (
  <nav className="bg-warmBrown text-cream py-4 px-8 flex justify-between items-center sticky top-0 z-50">
    <h1 className="text-goldenYellow text-2xl font-bold">Golden Porridge</h1>
    <ul className="flex gap-6">
      {["Home", "Products", "About", "Contact"].map((item) => (
        <li key={item} className="hover:text-goldenYellow cursor-pointer transition">{item}</li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
