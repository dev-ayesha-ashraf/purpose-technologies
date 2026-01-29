"use client";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  // Function to handle smooth scrolling
  const pathname = usePathname();

  // Function to handle smooth scrolling
  const handleScrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-[#253885] text-gray-300 pt-10 font-mulish">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 mt-10">
        {/* About Company */}
        <div className="bg-[#38a2df] p-[40px] rounded-[30px]">
          <h4 className="text-xl font-semibold text-white mb-4">About Company</h4>
          <p className="text-md leading-relaxed mb-4 text-white">
            Purpose Technologies is building the future of digital commerce in Pakistan. We provide a unified, powerful checkout solution that seamlessly connects merchants and payment gateways.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col text-center items-center">
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleScrollToSection("products")}
                className="hover:text-white cursor-pointer"
              >
                Products
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("about")}
                className="hover:text-white cursor-pointer"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("collections")}
                className="hover:text-white cursor-pointer"
              >
                Collections
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("clients")}
                className="hover:text-white cursor-pointer"
              >
                Clients
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("contact")}
                className="hover:text-white cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className="flex flex-col text-center items-center">
          <h4 className="text-xl font-semibold text-white mb-4">Documentation</h4>
          <ul className="space-y-2">
            <li><a href="/refund-policy" className="hover:text-white">Refund Policy</a></li>
            <li><a href="/terms-conditions" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ's</a></li>
          </ul>
        </div>

        {/* Social Links */}
        {/* <div>
          <h4 className="text-xl font-semibold text-white mb-4">Social Links</h4>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:bg-[#253885]"
            >
              <Facebook className="w-6 h-6 text-[#253885] hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 hover:bg-[#253885]"
            >
              <Twitter className="w-6 h-6 text-[#253885] hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:bg-[#253885]"
            >
              <Instagram className="w-6 h-6 text-[#253885] hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:-rotate-6 hover:bg-[#253885]"
            >
              <Linkedin className="w-6 h-6 text-[#253885] hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <img
          src="/pt_logo.png"
          alt="Logo"
          width={120}
          height={60}
        />
        <p className="mt-4 md:mt-0">© Copyright – PurposeTechnologies 2025. All rights reserved.</p>
      </div>
    </footer>
  );
}