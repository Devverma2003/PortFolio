import { useState } from "react";
import { motion } from "framer-motion";
 
export default function ContactPage() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    console.log(formData);
    
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 py-10 bg-gradient-to-l from-purple-400 to-indigo-600">
      {/* Animated Image/Illustration Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0"
      >
        <img src="contact-img.svg" alt="Illustration" className="w-81 " />
      </motion.div>
      
      {/* Contact Form */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="md:w-1/2 w-full bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg backdrop-blur-lg"
      >
        <h2 className="text-4xl font-bold mb-6 text-white">Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="First Name" className="bg-transparent text-white border border-white placeholder-white px-4 py-2 rounded-lg focus:outline-none" />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Last Name" className="bg-transparent text-white border border-white placeholder-white px-4 py-2 rounded-lg focus:outline-none" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="bg-transparent text-white border border-white placeholder-white px-4 py-2 rounded-lg focus:outline-none" />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone No." className="bg-transparent text-white border border-white placeholder-white px-4 py-2 rounded-lg focus:outline-none" />
          </div>
          <div className="mt-4">
            <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Message" className="bg-transparent text-white border border-white placeholder-white px-4 py-2 rounded-lg focus:outline-none w-full h-32" />
          </div>
          <button type="submit" className="w-full mt-6 bg-white text-indigo-600 py-2 rounded-lg font-bold shadow-lg hover:bg-gray-300 transition">Send</button>
        </form>
      </motion.div>
    </div>
  );
}
