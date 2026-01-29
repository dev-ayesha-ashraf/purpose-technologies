'use client'

import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setResponse("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponse("❌ Failed: " + data.error);
      }
    } catch (error) {
      setResponse("❌ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto  overflow-hidden" id="contact">
      <div className="px-6 py-4">    {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Core Values & Principles <br />
            <span className="text-[#38a2df]">Driving Force Behind Us</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-md">
            We’d love to hear from you. Whether it’s a question, idea, or just a friendly hello, we’re always here.
          </p>

          <div className="flex items-center gap-3 p-5 bg-white/70 backdrop-blur-lg rounded-2xl shadow hover:shadow-lg transition">
            <Mail className="w-6 h-6 text-[#38a2df]" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Our Email</h3>
              <Link
                href="mailto:contact@purposeTechnologies.com"
                className="text-[#38a2df] hover:underline"
              >
                contact@purposetechnologies.com
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg space-y-6 border border-gray-100"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#38a2df] focus:border-[#38a2df] shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#38a2df] focus:border-[#38a2df] shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 block w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-[#38a2df] focus:border-[#38a2df] shadow-sm"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#38a2df] text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:bg-[#2a92cf] transition"
          >
            {loading ? "Sending..." : (
              <>
                <Send className="w-5 h-5" /> Submit
              </>
            )}
          </motion.button>

          {response && (
            <p className="text-sm mt-2 text-center font-medium text-gray-700">{response}</p>
          )}
        </motion.form>
      </div></div>
  
    </section>
  );
};

export default Contact;
