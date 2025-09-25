import React from "react";

const Footer = () => (
  <footer className="bg-deepBrown text-cream py-8 text-center">
    <p>© 2025 Golden Porridge Company. All rights reserved.</p>
    <div className="flex justify-center gap-6 mt-4">
      {["Facebook","Instagram","Twitter"].map((item) => (
        <span key={item} className="hover:text-goldenYellow cursor-pointer transition">{item}</span>
      ))}
    </div>
  </footer>
);

export default Footer;
