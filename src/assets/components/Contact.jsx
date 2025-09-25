import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!"); // Replace with backend API later
  };

  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-warmBrown text-3xl font-bold mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" className="p-3 rounded-md border border-softOrange"/>
        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" className="p-3 rounded-md border border-softOrange"/>
        <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Your Message" className="p-3 rounded-md border border-softOrange"></textarea>
        <button type="submit" className="bg-goldenYellow text-deepBrown font-bold py-3 rounded-md hover:bg-softOrange transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
