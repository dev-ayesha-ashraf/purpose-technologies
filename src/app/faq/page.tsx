"use client";

import { useState } from "react";


interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How Does Purpose Technologies Work?",
    answer: "Purpose Technologies' all-in-one payment platform enables businesses to manage online payments and disbursements with ease. Through one integrated dashboard, companies can access a unified view of balances across collections and payouts, covering various regions and currencies. Our platform is built for flexibility, helping businesses gain full control of their financial operations. Additionally, our built-in authentication, identity verification, and fraud detection tools ensure a secure transaction environment, empowering businesses to confidently accept legitimate payments while minimizing risk."
  },
  {
    id: 2,
    question: "Is Purpose Technologies easy to integrate with?",
    answer: "Yes! Purpose Technologies offers multiple integration options to suit different business needs. Our hosted payment pages are a particularly simple method, enabling businesses to collect payment information securely and redirect customers to a safe checkout experience. Integration is made easy with well-documented APIs, clear technical guidelines, and a comprehensive FAQ repository. Our dedicated support team is also available to assist throughout the integration journey, making it simple and efficient for businesses to go live."
  },
  {
    id: 3,
    question: "Which payment methods does Purpose Technologies support?",
    answer: "Purpose Technologies supports a wide range of payment methods tailored to local and global market needs. This includes major card schemes, direct debits, vouchers, digital wallets, and bank transfers. We focus on offering localized and consumer-friendly solutions to ensure smooth payment experiences. Whether it's through secure digital wallets, regional voucher systems, or traditional banking rails, our platform supports diverse methods for maximum flexibility and customer reach."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>

      <section className="relative font-mulish bg-white py-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#38a2df]">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-md max-w-xl mx-auto">
                Find answers to common questions about our platform and services
              </p>
            </div>

            <div className="space-y-3" id="faq-section">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-lg overflow-hidden border border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex justify-between items-center px-4 py-3 font-semibold text-gray-800 bg-white hover:bg-[#38a2df]/5 focus:outline-none cursor-pointer"
                    aria-expanded={openId === faq.id}
                  >
                    <span className="text-left text-base">{faq.question}</span>
                    <span
                      className={`text-[#38a2df] text-xl transition-transform duration-200 ${openId === faq.id ? "rotate-180" : ""
                        }`}
                    >
                      ▾
                    </span>
                  </button>

                  <div
                    className={`px-4 overflow-hidden transition-all duration-200 ${openId === faq.id
                        ? "py-3 border-t border-gray-100"
                        : "max-h-0 py-0"
                      }`}
                  >
                    <div className="text-gray-600 text-md leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}