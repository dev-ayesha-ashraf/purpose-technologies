"use client";

import { useState, useRef, useEffect } from "react";


interface TermsSection {
  id: number;
  title: string;
  content: React.ReactNode;
  definitions?: { term: string; definition: string }[];
}

const termsSections: TermsSection[] = [
  {
    id: 1,
    title: "Acknowledgment and Acceptance of Terms",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          By accessing and using this website (the "Digital Platform") provided by Purpose Technologies Limited (the "Company"), you (the "User") acknowledge and agree to comply with the Terms and Conditions (the "Terms") outlined herein. Your continued use of this Digital Platform constitutes your full acceptance of these Terms. If you do not agree with any part of these Terms, you must immediately stop using the Digital Platform. Your engagement with this Digital Platform signifies your binding acceptance of these Terms, including any future modifications or updates hereto. If you disagree with any of these Terms, please discontinue your use of the Digital Platform immediately.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Definitions",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          For the purpose of the terms herein, the meanings and definitions of the following words are to be ascertained as follows:
        </p>

        <div className="space-y-3">
          <div className="bg-white border border-gray-200 rounded p-3 hover:border-[#38a2df]/50 transition-colors duration-200">
            <h4 className="font-semibold text-gray-800 mb-1 text-[#38a2df] text-md">Company, We, Our, and Us</h4>
            <p className="text-md text-gray-600">
              Refers to Purpose Technologies Limited, its affiliates, subsidiaries, and related companies. This includes any entities under common ownership or control with the Company, as well as business partners, joint ventures, and other organizations with whom the Company has a formal relationship. For the purposes of this Policy, "Company" encompasses all such entities involved in the collection, use, retention, storage, protection, management, and deletion of Personal Data as part of their operations or services.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded p-3 hover:border-[#38a2df]/50 transition-colors duration-200">
            <h4 className="font-semibold text-gray-800 mb-1 text-[#38a2df] text-md">You, Your, and User</h4>
            <p className="text-md text-gray-600">
              Refers to the individual and/or corporate entity accessing this Digital Platform and accepting the Company's Terms, as is.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded p-3 hover:border-[#38a2df]/50 transition-colors duration-200">
            <h4 className="font-semibold text-gray-800 mb-1 text-[#38a2df] text-md">Content</h4>
            <p className="text-md text-gray-600">
              Refers to all materials displayed or featured on the Digital Platform, including but not limited to text, graphics, photos, sounds, music, videos and any interactive features thereof.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded p-3 hover:border-[#38a2df]/50 transition-colors duration-200">
            <h4 className="font-semibold text-gray-800 mb-1 text-[#38a2df] text-md">Intellectual Property</h4>
            <p className="text-md text-gray-600">
              Refers to copyrights, trademarks, patents, trade secrets, logos, domain names and any other original Content such as text, graphics, music, videos and software owned and created by the Company and available on the Digital Platform.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded p-3 hover:border-[#38a2df]/50 transition-colors duration-200">
            <h4 className="font-semibold text-gray-800 mb-1 text-[#38a2df] text-md">Third-Party Services</h4>
            <p className="text-md text-gray-600">
              Refers to any services, content or applications provided by entities or individuals that are not directly controlled or operated by the Company. These Services may include, but are not limited to, external websites, data feeds, hyperlinks and other services that facilitate the functionality of the Digital Platform.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded p-3 hover:border-[#38a2df]/50 transition-colors duration-200">
            <h4 className="font-semibold text-gray-800 mb-1 text-[#38a2df] text-md">Services</h4>
            <p className="text-md text-gray-600">
              Refers to all regulated digital and/or financial activities provided by the Company through its Digital Platform.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded p-3 hover:border-[#38a2df]/50 transition-colors duration-200">
            <h4 className="font-semibold text-gray-800 mb-1 text-[#38a2df] text-md">Digital Platform</h4>
            <p className="text-md text-gray-600">
              The Company's online interface that offers access to its B2B services through a contact support form, enabling business users to inquire about services. This platform does not facilitate direct account creation by users.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded p-3 hover:border-[#38a2df]/50 transition-colors duration-200">
            <h4 className="font-semibold text-gray-800 mb-1 text-[#38a2df] text-md">Privacy Policy</h4>
            <p className="text-md text-gray-600">
              Refers to the document detailing the Company's practices regarding the collection, use, retention, storage, protection, management, and deletion of personal data and information of its Users. You may access the Privacy Policy by clicking here.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded p-3 hover:border-[#38a2df]/50 transition-colors duration-200">
            <h4 className="font-semibold text-gray-800 mb-1 text-[#38a2df] text-md">Personal Data</h4>
            <p className="text-md text-gray-600">
              Information that can be used to directly or indirectly identify an individual. This encompasses a broad range of data collected by the Company as delineated in Point 3 of our Privacy Policy.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded p-3 hover:border-[#38a2df]/50 transition-colors duration-200">
            <h4 className="font-semibold text-gray-800 mb-1 text-[#38a2df] text-md">Terms</h4>
            <p className="text-md text-gray-600">
              These Terms and Conditions, as they may be amended from time to time.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Disclaimer",
    content: (
      <div className="space-y-3">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-md">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            <div>
              <h4 className="font-bold text-red-800 mb-1 text-md">DISCLAIMER</h4>
              <p className="text-red-700 text-md">
                This Digital Platform is provided "as is" for general informational purposes only. While we strive to offer accurate and up-to-date information, we make no guarantees, express or implied, regarding the accuracy, completeness, or reliability of the content. The Company disclaims all liability for any errors, omissions, or consequences arising from the use of this information. We strongly recommend consulting qualified professionals before making any decisions based on the information provided. By continuing to use this Digital Platform, you agree to the terms herein.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Use of Services",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-50 rounded p-4 text-md">
          <p className="text-gray-700 leading-relaxed">
            The services provided on this Digital Platform are for informational and planning purposes only. They are not intended to change or extend any specifications or warranties related to the services offered by the Company. The information and technical specifications on this Digital Platform do not affect any rights or licenses, such as patents or other protective rights held by the Company or others.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#38a2df] flex items-center justify-center mr-2">
                <span className="text-white font-bold text-md">18</span>
              </div>
              <h4 className="font-semibold text-gray-800 text-md">For Individuals</h4>
            </div>
            <p className="text-gray-600 text-md">
              If you are an individual, you must be at least 18 years old and have full legal capacity to engage with the Services offered by our Company.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#38a2df] flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 text-md">For Businesses</h4>
            </div>
            <p className="text-gray-600 text-md">
              If you are a business, you must ensure compliance with the laws of the Country governing the Terms specified herein.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Copyright Notice, Limited Authorization, and License",
    content: (
      <div className="space-y-4">
        <div className="bg-yellow-50 border-l-3 border-yellow-400 p-4 rounded-r text-md">
          <h4 className="font-bold text-gray-800 mb-1">Copyright Notice and Intellectual Property Rights</h4>
          <p className="text-gray-700">
            The Content available on this Digital Platform, including but not limited to text, graphics and icons are copyrighted materials owned exclusively by the Company. The Company retains all rights to its original creations. The Service and its original Content, features and functionality are protected under international copyright, trademark and other intellectual property laws. These materials are the exclusive property of the Company safeguarded against any unauthorized usage.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800 text-md">Limited Authorization for Use:</h4>
          <div className="bg-blue-50 p-3 rounded text-md">
            <p className="text-gray-700 mb-2">
              Users are granted a limited right to access and use the Digital Platform and its materials subject to the following conditions:
            </p>
            <ul className="space-y-2">
              {[
                "Materials must be used solely for informational purposes.",
                "Any use of the material must be non-commercial.",
                "All copies of the materials must include the Company's copyright notice.",
                "Materials shared must not be presented as the Company's confidential or proprietary information."
              ].map((item, index) => (
                <li key={index} className="flex items-start text-md">
                  <svg className="w-4 h-4 text-[#38a2df] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-md">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-2">
              Any other rights or uses concerning the materials on this Digital Platform are strictly prohibited without the Company's express written consent. Requests for such permissions can be directed to the Company through the contact form available on our Digital Platform.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded p-4 text-md">
          <h4 className="font-semibold text-gray-800 mb-2">License and Intellectual Property Infringement</h4>
          <p className="text-gray-600 mb-2">
            Unless explicitly stated otherwise, the Company owns the intellectual property rights for all material on this Digital Platform. All such rights are reserved with the Company, and the User is only allowed to access the Content in the manner described herein.
          </p>
          <p className="text-gray-600 mb-3">
            The Company respects the intellectual property rights of others and adheres to a strict policy of responding to any allegations of copyright or other intellectual property infringements. Copyright owners who believe their work has been infringed upon through the Service may submit a written notice to Us via email on contact@purposetechnologies.com or through our Customer Contact Form.
          </p>
          <p className="text-gray-600 mb-3">
            Misrepresentation of any Content as infringing on your copyright may result in liability for damages, including costs and attorneys' fees. Our trademarks, trade dress, and intellectual property shall not be used in connection with any product or service without the Company's prior written consent.
          </p>
          <div className="border-t border-gray-200 pt-3">
            <p className="text-gray-700 font-medium mb-1">Copyright notices or claims of copyright infringement on the Digital Platform or requests for additional materials can be reached at:</p>
            <p className="text-gray-600 text-md">Head Office: Plot 6-C 8th Commercial Lane, Zamzama Commercial Area, Phase 5, DHA. Karachi.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Privacy Policy",
    content: (
      <div className="bg-blue-50 border-l-3 border-[#38a2df] p-4 rounded-r">
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 text-[#38a2df] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          <h4 className="font-semibold text-gray-800 text-md">Privacy Policy</h4>
        </div>
        <p className="text-gray-600 text-md">
          Our Privacy Policy is an integral part of these Terms that the User is deemed to have read, understood and accepted.
        </p>
        <a href="/privacy-policy" className="inline-block mt-2 text-[#38a2df] hover:underline text-md font-medium">
          Read Privacy Policy →
        </a>
      </div>
    ),
  },
  {
    id: 7,
    title: "Refund Policy",
    content: (
      <div className="bg-green-50 border-l-3 border-green-500 p-4 rounded-r">
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h4 className="font-semibold text-gray-800 text-md">Refund Policy</h4>
        </div>
        <p className="text-gray-600 text-md">
          Our Refund Policy is an integral part of these Terms that the User is deemed to have read, understood and accepted.
        </p>
        <a href="/refund-policy" className="inline-block mt-2 text-green-600 hover:underline text-md font-medium">
          Read Refund Policy →
        </a>
      </div>
    ),
  },
  {
    id: 8,
    title: "Cookies",
    content: (
      <div className="bg-purple-50 border-l-3 border-purple-500 p-4 rounded-r">
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
          <h4 className="font-semibold text-gray-800 text-md">Cookies</h4>
        </div>
        <p className="text-gray-600 text-md">
          By using the Digital Platform, the User consents to the use of cookies in accordance with our Privacy Policy.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Hyperlinking and External Links Policy",
    content: (
      <div className="space-y-4">
        <div className="bg-white border border-gray-200 rounded p-4">
          <h4 className="font-semibold text-gray-800 mb-2 text-md">Hyperlinking to Our Content</h4>
          <p className="text-gray-600 text-md">
            Our Digital Platform permits certain organizations to link to our Content without prior written approval, including government agencies, search engines, news organizations, online directory distributors and systemwide accredited businesses, excluding non-profit organizations, charity malls and fundraising groups. Authorized organizations may link to our homepage, publications, or other information provided that the link is not misleading, does not falsely imply sponsorship or endorsement, and fits within the context of the linking party's site.
          </p>
        </div>

        <div className="bg-gray-50 border-l-3 border-gray-400 p-4 rounded-r">
          <h4 className="font-semibold text-gray-800 mb-2 text-md">External Links Disclaimer</h4>
          <p className="text-gray-600 text-md">
            Our Digital Platform may include links to Third-Party websites or Services not owned or controlled by us. We do not endorse or assume responsibility for the Content, privacy policies or practices of any Third-Party sites. These links are provided for convenience and the Company is under no circumstances liable for any harm or damages related to the use of or reliance on any Third-Party Content, goods or Services. We recommend you read the terms, conditions and privacy policies of any Third-Party sites you visit.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Removal of Links from the Digital Platform",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          If you find any link on our Digital Platform or any linked website objectionable for any reason, you may contact us immediately. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.
        </p>
      </div>
    ),
  },
  {
    id: 11,
    title: "Content and Liability Terms",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-50 rounded p-4 text-md">
          <h4 className="font-semibold text-gray-800 mb-2">Content Liability and Company Protection</h4>
          <p className="text-gray-700">
            The Company assumes no responsibility for the Content that appears on external websites or within user-generated Content on our Digital Platform. Users agree to indemnify and hold harmless the Company from any claims, liabilities, damages, or expenses arising from the Digital Platform or the Content contributed.
          </p>
        </div>

        <div className="bg-red-50 border border-red-100 rounded p-4 text-md">
          <h4 className="font-semibold text-red-800 mb-2">Limitation of Liability</h4>
          <p className="text-red-700 text-md">
            The Company's liability for any damages arising from the use of our Service is strictly limited to the extent of the monetary consideration paid in exchange of the Services and the actual amount paid to avail those Services. Neither the Company or any of its stakeholders, be held liable for indirect, special, incidental, consequential or punitive damages related to the Service use, regardless of prior notice of such possibilities. This limitation is void where prohibited by law, in which case our liability is minimized to the fullest extent permitted.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800 text-md">Content Restrictions</h4>
          <div className="bg-white border border-gray-200 rounded p-3 text-md">
            <p className="text-gray-700">
              The User is restricted from posting Content against the Digital Platform on any other social media platforms or that which may violate laws, is defamatory, or infringes on the Company's or Third-Party rights. The Company reserves the right to restrict User access and/or limit the Service use for those in breach of the Terms of this Digital Platform.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    title: "Dispute Resolution",
    content: (
      <div className="space-y-3">
        <div className="bg-blue-50 border-l-3 border-[#38a2df] p-4 rounded-r">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-[#38a2df] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
            </svg>
            <h4 className="font-semibold text-gray-800 text-md">Dispute Resolution</h4>
          </div>
          <p className="text-gray-600 text-md">
            If You have any concern or dispute about the Service, you agree to first try to resolve the dispute informally by contacting the Company.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 13,
    title: "Availability, Errors and Inaccuracies",
    content: (
      <div className="space-y-3">
        <div className="bg-yellow-50 border-l-3 border-yellow-400 p-4 rounded-r">
          <h4 className="font-semibold text-gray-800 mb-2 text-md">Availability, Errors and Inaccuracies</h4>
          <p className="text-gray-700 text-md">
            We strive to continuously update our offerings and information on our Services. Despite our best efforts, there may be instances where the Service descriptions do not accurately reflect the Service, availability issues arise, or delays in updating our Service and advertising on other websites occur. We do not guarantee the accuracy or completeness of any information on our Digital Platform, including but not limited to prices and availability of the Services. We reserve the right to modify, amend, correct or update any information, as well as to rectify any errors, inaccuracies or omissions at any time without prior notice.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 14,
    title: "Reservation of Rights and Modification of Terms",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          The Company reserves the unilateral right to request the removal of all links or any specific link to our Digital Platform at any time, at our sole discretion. Upon such a request, you are obliged to immediately remove all links to our Digital Platform. Additionally, we reserve the right to modify these Terms, including our Privacy Policy, at any time without prior notice. By maintaining links to our Digital Platform, you consent to adhere to and be bound by these revised Terms and Privacy Policy.
        </p>
      </div>
    ),
  },
  {
    id: 15,
    title: "Termination of Use",
    content: (
      <div className="space-y-3">
        <div className="bg-red-50 border-l-3 border-red-500 p-4 rounded-r">
          <h4 className="font-semibold text-gray-800 mb-2 text-md">Termination of Use</h4>
          <p className="text-gray-700 text-md">
            The Company reserves the right to terminate or suspend access to our Digital Platform immediately, without prior notice or liability, for any reason whatsoever. Upon such termination, your right to use the Digital Platform will immediately cease. The Company may also terminate or suspend your access to the Digital Platform for any operational or governmental reason, or if we suspect that you have failed to comply with any provision of these Terms. Further, the Company retains the right to seek all legal remedies available both in law and in equity for violations of these Terms. Upon termination, all provisions of these Terms which by their nature should survive termination shall remain in effect, including, without limitation, ownership provisions, intellectual property rights, warranty disclaimers, indemnity and limitations of liability.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 16,
    title: "Governing Law",
    content: (
      <div className="space-y-3">
        <div className="bg-gray-50 border-l-3 border-gray-500 p-4 rounded-r">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
            </svg>
            <h4 className="font-semibold text-gray-800 text-md">Governing Law</h4>
          </div>
          <p className="text-gray-600 text-md">
            These Terms are governed by and construed under the laws of Pakistan. Regardless of your location, by using this Digital Platform, you consent to the jurisdiction of the courts of England and Wales for any disputes arising out of or related to your use of the Digital Platform. International Users must comply with their local laws regarding online conduct and acceptable Content.
          </p>
        </div>
      </div>
    ),
  },
];

export default function TermsConditionsPage() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleAcceptTerms = () => {
    setAcceptedTerms(true);
    localStorage.setItem('termsAccepted', 'true');
  };

  return (
    <div className="font-mulish min-h-screen bg-white">


      {/* Hero Section */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Terms & <span className="text-[#38a2df]">Conditions</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-md">
                Legal agreement between Purpose Technologies and our users
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl pb-20">
        <div className="space-y-8">
          {termsSections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="scroll-mt-20"
              id={`section-${section.id}`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#38a2df] to-[#2d8bc8] flex items-center justify-center">
                  <span className="text-white font-bold text-md">{section.id}</span>
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-bold text-gray-800 mb-3">
                    {section.title}
                  </h2>
                  <div className="bg-white rounded-lg border border-gray-100 p-4">
                    {section.content}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}