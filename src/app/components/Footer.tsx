import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#253885] text-gray-300 pt-10 font-mulish">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 mt-10">
        {/* About Company */}
        <div className="bg-[#38a2df] p-[40px] rounded-[30px]">
          <h4 className="text-xl font-semibold text-white mb-4">About Company</h4>
          <p className="text-md leading-relaxed mb-4 text-white">
            Ajar Platform aims to create a cutting-edge digital checkout
            solution tailored for e-commerce merchants and digital platforms in
            Pakistan. This platform will serve as a bridge between payment
            gateways and merchants.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col text-center items-center">
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-white">About</Link></li>
            <li><Link href="#" className="hover:text-white">Services</Link></li>
            <li><Link href="#" className="hover:text-white">Projects</Link></li>
            <li><Link href="#" className="hover:text-white">Pricing</Link></li>
            <li><Link href="#" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
<div>
  <h4 className="text-xl font-semibold text-white mb-4">Social Links</h4>
  <div className="flex space-x-6">
    <Link
      href="#"
      className="bg-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:bg-[#253885]"
    >
      <Facebook className="w-6 h-6 text-[#253885] hover:text-white transition-colors duration-300" />
    </Link>
    <Link
      href="#"
      className="bg-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 hover:bg-[#253885]"
    >
      <Twitter className="w-6 h-6 text-[#253885] hover:text-white transition-colors duration-300" />
    </Link>
    <Link
      href="#"
      className="bg-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:bg-[#253885]"
    >
      <Instagram className="w-6 h-6 text-[#253885] hover:text-white transition-colors duration-300" />
    </Link>
    <Link
      href="#"
      className="bg-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:-rotate-6 hover:bg-[#253885]"
    >
      <Linkedin className="w-6 h-6 text-[#253885] hover:text-white transition-colors duration-300" />
    </Link>
  </div>
</div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <img
          src="/pt_logo.png"
          alt="Logo"
          width={120}
          height={60}
        />
        <p className="mt-4 md:mt-0">© Copyright – purposeTechnologies 2023. All rights reserved.</p>
      </div>
    </footer>
  );
}
