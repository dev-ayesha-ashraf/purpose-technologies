import Navbar from "./Navbar";

export default function purpose_technologiesSection() {
  return (
    <section className="px-8 relative flex flex-col items-center justify-center pb-20 [background:linear-gradient(270deg,#253885D4_40%,#FAF8FFCC_40%)]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      <Navbar />

      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Icon List */}
          <ul className="flex items-center space-x-2">
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 md:w-5 md:h-5">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 md:w-5 md:h-5 text-[#38a2df]"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                  />
                </svg>
              </span>
              <span className="text-sm md:text-[16px] text-[#1A043F] font-mulish font-light md:font-normal">
                Introducing Purpose Technologies:
              </span>
            </li>
          </ul>

          {/* Heading */}
          <h1 className="font-mulish font-bold text-2xl md:text-[52px] text-[#1A043F] leading-snug md:leading-[1.1em]">
            Secured One-Click Checkout Solution for Global and Local Businesses
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 md:text-gray-700 font-mulish text-base md:text-[18px] font-light md:font-normal">
            <strong>Purpose Technologies</strong> serves as a payment facilitation platform,
            bridging the gap between worldwide and regional businesses and their
            customers, offering a secured and streamlined One-Click checkout
            solution while integrating key payment methods.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="inline-block font-mulish px-6 py-3 md:px-[35px] md:py-[17px] text-white rounded-[50px] text-xs md:text-[14px] font-semibold md:font-bold shadow hover:scale-95 transition-transform bg-[linear-gradient(340deg,_#253885_0%,_rgba(37,56,133,0.75)_100%)]"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-block font-mulish px-6 py-3 md:px-[35px] md:py-[17px] text-[#38A2DF] rounded-[50px] text-xs md:text-[14px] font-semibold md:font-bold shadow hover:scale-95 transition-transform bg-[#fff]"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden md:flex justify-center relative">
          <img
            src="https://ajarpay.com.pk/wp-content/uploads/2023/11/1267779-removebg-preview.png"
            alt="purpose_technologies illustration"
            className="w-[500px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
