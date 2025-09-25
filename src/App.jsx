// src/App.jsx
import React from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Products from "./assets/components/Products";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
