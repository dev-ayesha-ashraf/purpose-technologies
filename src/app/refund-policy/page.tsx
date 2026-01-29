"use client";

import { useState, useEffect } from "react";


interface RefundPolicySection {
  id: number;
  title: string;
  content: React.ReactNode;
}

const policySections: RefundPolicySection[] = [
  {
    id: 1,
    title: "OVERVIEW",
    content: (
      <p className="text-gray-700 text-md leading-relaxed">
        At Purpose Technologies (Private) Limited ("Company"), our goal is to establish a reliable and secure platform for our customers. We strive to ensure complete customer satisfaction with our services. Nonetheless, due to the nature of our services, refunds or credit provisions are generally not provided unless explicitly stated in our Service Agreements. However, to maintain customer satisfaction and foster long-term relationships, we do offer refunds according to the policies outlined below.
      </p>
    ),
  },
  {
    id: 2,
    title: "REFUND ELIGIBILITY",
    content: (
      <div className="space-y-3">
        <div className="flex items-start">
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#38a2df]/20 flex items-center justify-center mr-2 mt-0.5">
            <span className="text-sm font-semibold text-[#38a2df]">1</span>
          </span>
          <p className="text-gray-700 text-md leading-relaxed">
            Customers must request a refund within Fourteen (14) days of availing of any of the services of our Company. Requests made beyond this period will not be eligible for a refund.
          </p>
        </div>
        <div className="flex items-start">
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#38a2df]/20 flex items-center justify-center mr-2 mt-0.5">
            <span className="text-sm font-semibold text-[#38a2df]">2</span>
          </span>
          <p className="text-gray-700 text-md leading-relaxed">
            Before processing any refunds, the actual acquisition and/or delivery of the services will first be verified by Company officers. They will confirm that the services were indeed delivered to the customer and that despite persistent requests, the quality of the services was not improved. Only after such verification will the company become liable for a refund.
          </p>
        </div>
        <div className="flex items-start">
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#38a2df]/20 flex items-center justify-center mr-2 mt-0.5">
            <span className="text-sm font-semibold text-[#38a2df]">3</span>
          </span>
          <p className="text-gray-700 text-md leading-relaxed">
            No refunds will be issued for services outside the specified 14-day period.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "HOW TO REQUEST A REFUND",
    content: (
      <div className="bg-gradient-to-r from-[#38a2df]/5 to-white p-4 rounded border border-[#38a2df]/20">
        <p className="text-gray-700 text-md leading-relaxed mb-3">
          If you fulfill the conditions of our Refund Policy, please write to us at{" "}
          <a
            href="mailto:contact@purposetechnologies.com"
            className="font-semibold text-[#38a2df] hover:text-[#2d8bc8] hover:underline transition-colors duration-200"
          >
            contact@purposetechnologies.com
          </a>{" "}
          and mention your refund request, ensuring you provide all necessary details to expedite the processing of your request.
        </p>
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-2 text-[#38a2df]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Response time: Typically within 24-48 business hours</span>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "LIMITATION OF LIABILITY",
    content: (
      <div className="bg-yellow-50 border-l-3 border-yellow-400 p-4 rounded text-md">
        <p className="text-gray-700 leading-relaxed">
          Refunds are limited to the cost of the actual services purchased and do not include indirect or consequential damages. They will be issued to the original payment method used at the time of purchase.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "CHANGES TO THE REFUND POLICY",
    content: (
      <div className="bg-gray-50 p-4 rounded border text-md">
        <p className="text-gray-700 leading-relaxed">
          Company reserves the right to modify this policy at any time. Such modifications will be effective immediately upon posting on our website. Your continued use of our services indicates your acceptance of any revisions to this policy.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "CONTACT US",
    content: (
      <div className="bg-gradient-to-r from-[#38a2df]/10 to-[#38a2df]/5 p-4 rounded border border-[#38a2df]/30">
        <p className="text-gray-700 text-md leading-relaxed mb-4">
          For any queries related to refunds, or if you need assistance with the refund process, please contact us through{" "}
          <a
            href="contact@purposetechnologies.com"
            className="font-semibold text-[#38a2df] hover:text-[#2d8bc8] hover:underline transition-colors duration-200"
          >
            contact@purposetechnologies.com.pk
          </a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center p-2 bg-white rounded border border-gray-200">
            <svg className="w-4 h-4 text-[#38a2df] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Email Support</p>
              <p className="text-sm text-gray-600">contact@purposetechnologies.com</p>
            </div>
          </div>
          <div className="flex items-center p-2 bg-white rounded border border-gray-200">
            <svg className="w-4 h-4 text-[#38a2df] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Response Time</p>
              <p className="text-sm text-gray-600">24-48 business hours</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function RefundPolicyPage() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobileView(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSection = (id: number) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="font-mulish min-h-screen bg-white">


      {/* Hero Section */}
      <section className="pt-4 pb-2">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Refund <span className="text-[#38a2df]">Policy</span>
            </h1>
            <p className="text-gray-600 text-md max-w-2xl mx-auto">
              Transparent guidelines for refunds and customer satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-2 pb-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {isMobileView ? (
                policySections.map((section) => (
                  <div key={section.id} className="rounded-lg overflow-hidden border border-gray-200">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#38a2df] flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{section.id}</span>
                        </div>
                        <h3 className="text-base font-bold text-left text-gray-800">
                          {section.title}
                        </h3>
                      </div>
                      <span className={`text-[#38a2df] text-xl transition-transform duration-300 ${activeSection === section.id ? 'rotate-180' : ''}`}>
                        ▾
                      </span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeSection === section.id ? 'max-h-96 p-4' : 'max-h-0'}`}>
                      <div className="text-gray-700">
                        {section.content}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                policySections.map((section) => (
                  <div key={section.id} className="scroll-mt-20" id={`section-${section.id}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#38a2df] flex items-center justify-center">
                        <span className="text-white font-bold text-md">{section.id}</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center">
                          {section.title}
                        </h3>
                        <div className="bg-white rounded-lg border border-gray-100 p-4">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}