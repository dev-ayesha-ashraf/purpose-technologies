"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-[95%] h-[80px] mx-auto my-6 bg-white rounded-full flex items-center justify-between px-8 relative z-50">
      <div className="text-2xl font-extrabold text-brand-dark tracking-tight">
        <img src="pt_logo.png" alt="" className="w-[100px] h-[100px]" />
      </div>
      <ul className="hidden md:flex flex-1 justify-center space-x-10 text-lg font-medium text-brand-dark">
        <li>
          <Link href="/" className="text-[#38a2df]">
            Home
          </Link>
        </li>
      
          <li>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
              className="hover:text-brand transition-colors"
            >
              Contact
            </button>
          </li>

        
      </ul>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 rounded-lg text-[#38a2df] hover:bg-brand-light transition cursor-pointer"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 left-0 h-full w-[60%] bg-[#1A043F] shadow-2xl z-50 flex flex-col p-8"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="text-2xl font-extrabold text-white tracking-tight">
                  <img src="pt_logo.png" alt="" className="w-[100px] h-[100px]" />
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-white bg-[#38a2df] cursor-pointer rounded-full hover:bg-brand-light transition"
                >
                  <X size={28} />
                </button>
              </div>
              <div className="flex flex-col space-y-8 text-xl font-semibold text-white">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="hover:text-brand transition-colors"
                >
                  Home
                </Link>
                
              <Link
  href="#contact"
  onClick={(e) => {
    e.preventDefault(); // Prevent default jump
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Close mobile menu
  }}
  className="hover:text-brand transition-colors"
>
  Contact
</Link>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
