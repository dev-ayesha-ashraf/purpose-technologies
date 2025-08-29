"use client";

export default function AboutCompanySection() {
  return (
    <section className="w-full bg-white py-10 font-mulish">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Column - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/about.jpg"
            alt="About purpose_technologies"
            width={2000}
            height={2000}
            className="rounded-lg"
          />
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-1/2 space-y-6 pr-5">
          {/* About Company */}
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 md:w-5 md:h-5">
              <svg
                aria-hidden="true"
                className="w-4 h-4 md:w-5 md:h-5 text-[#38a2df]"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M256 56c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56m0-48C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 168c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"
                />
              </svg>
            </span>
            <span className="font-bold text-[18px] text-[#1A043F]">
              About Company
            </span>
          </div>

          <h2 className="text-2xl md:text-[35px] font-bold leading-snug text-[#1A043F]">
            Empowering Merchants with purpose_technologies: A Seamless One-Click Checkout
            Integration
          </h2>

          <p className="text-gray-600">
            purpose_technologies is actively working on integrating with leading wallet and
            card service providers to enhance its payment facilitation platform,
            making it compatible with various collection and payment methods.
            This will empower its merchants to offer a One-Click seamless
            checkout solution to their customers.
            <br />
            <br />
            Merchants have the option to connect and integrate with purpose_technologies,
            gaining access to an all-in-one, convenient One-Click checkout
            solution.
          </p>

          {/* Vision */}
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 text-blue-500"
              >
                <path
                  fill="currentColor"
                  d="M12 4.5c-7.633 0-11 7.5-11 7.5s3.367 7.5 11 7.5 11-7.5 11-7.5-3.367-7.5-11-7.5zm0 12c-2.485 0-4.5-2.015-4.5-4.5S9.515 7.5 12 7.5 16.5 9.515 16.5 12 14.485 16.5 12 16.5zm0-7a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-xl">Our Vision</h3>
              <p className="text-gray-600">
                To facilitate a smooth and unified One-Click checkout solution
                for all merchants, enabling them to handle their digital
                collections and payments effortlessly.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 text-blue-500"
              >
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V13h3.93A8.001 8.001 0 0113 16.93zM11 13v3.93A8.001 8.001 0 016.07 13H11zm-4.93-2A8.001 8.001 0 0111 5.07V11H6.07zM13 11V5.07A8.001 8.001 0 0117.93 11H13z"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-xl">Our Mission</h3>
              <p className="text-gray-600">
                To empower our merchants, stakeholders, and associates to
                thrive, generate value for both individuals and the economy.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 text-blue-500"
              >
                <path
                  fill="currentColor"
                  d="M12 2l2.39 6.91L22 9.17l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.04 2 9.17l7.61-1.26L12 2z"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-xl">Our Values</h3>
              <p className="text-gray-600">
                Our values are based on the fundamental principles that define
                our culture and are brought to life in our attitude and
                behavior. It is our values that make us unique and stem from
                basic principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
