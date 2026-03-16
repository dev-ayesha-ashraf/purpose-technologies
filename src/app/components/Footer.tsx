"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

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
    <footer className="bg-[#253885] text-gray-300 font-mulish">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-gray-700 pb-12">
          
          {/* About Company - Takes more space */}
          <div className="lg:col-span-5">
            <div className="bg-[#38a2df] p-8 rounded-[30px] h-full">
              <p className="text-white text-lg leading-relaxed">
                Purpose Technologies is building the future of digital commerce in Pakistan. 
                We provide a unified, powerful checkout solution that seamlessly connects 
                merchants and payment gateways.
              </p>
            </div>
          </div>

          {/* Quick Links - Centered content */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-semibold text-white mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#38a2df] pb-3">
              Quick Links
            </h4>
            <ul className="space-y-3 w-full">
              {["products", "about", "our-solution", "clients", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleScrollToSection(item)}
                    className="hover:text-white cursor-pointer transition-colors duration-200 capitalize w-full text-center lg:text-left"
                  >
                    {item === "our-solution" ? "Our Solution" : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Documentation - Right aligned on large screens */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-semibold text-white mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#38a2df] pb-3">
              Documentation
            </h4>
            <ul className="space-y-3 w-full">
              {[
                { name: "Refund Policy", path: "/refund-policy" },
                { name: "Terms & Conditions", path: "/terms-conditions" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "FAQ's", path: "/faq" },
              ].map((item) => (
                <li key={item.path}>
                  <a 
                    href={item.path} 
                    className="hover:text-white transition-colors duration-200 block w-full text-center lg:text-left"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
          <img
            src="/pt_logo_white.png"
            alt="Purpose Technologies Logo"
            className="w-auto h-16 sm:h-20 object-contain"
            width={320}
            height={96}
          />
          <p className="text-center md:text-left order-first md:order-none">
            © Copyright – Purpose Technologies 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}