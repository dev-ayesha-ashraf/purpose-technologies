"use client";

import { useState, useRef, useEffect } from "react";


interface PolicySection {
  id: number;
  title: string;
  content: React.ReactNode;
}

const privacySections: PolicySection[] = [
  {
    id: 1,
    title: "Introduction",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          This Privacy Policy ("Policy") outlines the principles and practices that Purpose Technologies (Private) Limited ("Company"), adheres to in collecting, processing, using, disclosing, retaining, and managing personal data of our customers ("Users"). This policy does not cover any external websites or services that are not under our ownership, control, or authority of the Company, including those operated by third-party merchants.
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
          Unless otherwise specified, all capitalized terms in this Policy shall have the meanings assigned to them in our Terms and Conditions, which can be accessed here.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Scope of Policy",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          This Privacy Policy governs the collection, use, retention, storage, protection, management, and deletion of Users' Personal Data across all departments within the Company. It ensures that every aspect of Personal Data handling, from initial collection to final deletion, adheres to the highest standards of security and compliance. All employees and contractors with access to this Personal Data must strictly follow this Policy. Additionally, the Policy guarantees that Personal Data is managed consistently and securely throughout the Company, maintaining the privacy and trust of our Users.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "What Personal Data We Collect",
    content: (
      <div className="space-y-4">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-3">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 rounded-full bg-[#38a2df] flex items-center justify-center mr-2">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p className="text-gray-700 text-md font-medium">
              Personal Data: Information that can be used to directly or indirectly identify an individual. This includes but is not limited to:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              title: "Contact Information",
              description: "Names, postal addresses (including billing addresses), telephone numbers, and email addresses.",
              icon: "📱"
            },
            {
              title: "Financial Information",
              description: "Payment card numbers, bank account details, transaction histories, and other financial data related to User transactions.",
              icon: "💳"
            },
            {
              title: "Identification Data",
              description: "Government-issued identification numbers (e.g., Social Security Number, CNIC No, NTN or Taxpayer IDs), driver's license numbers, passport numbers, and other similar identifiers.",
              icon: "🆔"
            },
            {
              title: "Biometric Data",
              description: "Fingerprints, facial recognition data, and other biometric identifiers, where applicable.",
              icon: "👁️"
            },
            {
              title: "Device & Usage Data",
              description: "IP Addresses, browser types, operating system details, device identifiers, and usage patterns on the Company's Digital Platform.",
              icon: "💻"
            },
            {
              title: "Transaction Data",
              description: "Details about transactions conducted through the Company's services.",
              icon: "📊"
            },
            {
              title: "Communication Data",
              description: "Records of communications between Users and the Company, including customer service interactions, email correspondence, and feedback.",
              icon: "📞"
            },
            {
              title: "Geolocation Data",
              description: "Information about a User's location when accessing the Company's Digital Platform.",
              icon: "📍"
            },
            {
              title: "Behavioral Data",
              description: "Information about User behavior on the Company's Digital Platform, such as clicks, pages viewed, time spent on the Digital Platform, and any other interactions made.",
              icon: "📈"
            },
            {
              title: "Referral Data",
              description: "Information about how Users were referred to the Company's Services, such as referral URLs or partner promotions.",
              icon: "↗️"
            },
            {
              title: "KYC (Know Your Customer) Data",
              description: "Additional verification information required for regulatory compliance, such as photographs, utility bills, and other documents to verify identity and address of the Users obtained to perform KYC checks.",
              icon: "✅"
            },
            {
              title: "Fraud Detection Data",
              description: "Patterns and indicators used to identify and prevent fraudulent activities, including unusual transaction patterns and flagged behaviors.",
              icon: "🛡️"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 hover:border-[#38a2df] transition-colors duration-200">
              <div className="flex items-start">
                <span className="text-xl mr-2">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-md mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border-l-3 border-gray-300 p-3 rounded-r">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#38a2df]/20 flex items-center justify-center mr-2 mt-0.5">
              <span className="text-sm font-semibold text-[#38a2df]">3P</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-md mb-1">Third-Party Data</h4>
              <p className="text-gray-600 text-sm">
                Information obtained from third-party sources, such as credit bureaus, identity verification partners, social media platforms, and public databases. The Company's identity verification partners utilize a variety of data sources to confirm identities, including government records and publicly accessible information. This Personal Data acquisition is completely aimed at fulfilling legal obligations and preventing fraudulent or illicit activities in relation to the Company's services and/or products.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-lg p-3 mt-3">
          <div className="flex items-start">
            <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            <div>
              <p className="text-gray-700 text-md">
                <span className="font-semibold">Important:</span> Personal Data does not include data that has been anonymized or aggregated in a way that cannot identify a specific individual. The Company does not knowingly collect Personal Data pertaining to children under the age of 18 or other individuals who are not legally able to use our Services. If we obtain actual knowledge that we have collected Personal Data from someone not allowed to use our Services, we will promptly delete it unless we are legally obligated to retain such data. Please contact us if you believe that we have mistakenly or unintentionally collected information from someone not allowed to use our Services.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Collection, Use & Disclosure of Personal Data",
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-[#38a2df]/5 to-white border border-[#38a2df]/20 rounded-lg p-4 mb-3">
          <p className="text-gray-700 text-md leading-relaxed">
            The Company collects and processes the Users' Personal Data to ensure transparency and legality in each step:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              title: "Account Registration",
              description: "Assessing eligibility for creating and maintaining an Account.",
              color: "bg-blue-100",
              iconColor: "text-blue-600"
            },
            {
              title: "User Relationship Management",
              description: "Managing interactions and maintaining long-term relationships with Users.",
              color: "bg-green-100",
              iconColor: "text-green-600"
            },
            {
              title: "Service Fulfillment",
              description: "Delivering on the Company's commitments under Service Agreements.",
              color: "bg-purple-100",
              iconColor: "text-purple-600"
            },
            {
              title: "Legal Compliance",
              description: "Ensuring compliance with relevant laws, regulations, and statutory mandates.",
              color: "bg-red-100",
              iconColor: "text-red-600"
            },
            {
              title: "Contractual Obligation",
              description: "Enforcing Terms and Conditions as agreed upon by Users.",
              color: "bg-yellow-100",
              iconColor: "text-yellow-600"
            },
            {
              title: "Service Enhancement",
              description: "Improving the quality of Services and developing new product offerings.",
              color: "bg-indigo-100",
              iconColor: "text-indigo-600"
            },
            {
              title: "Communications",
              description: "Sending updates and promotional materials to Users.",
              color: "bg-pink-100",
              iconColor: "text-pink-600"
            },
            {
              title: "Explicit Consent",
              description: "Processing certain types of Personal Data only after obtaining specific written consent.",
              color: "bg-teal-100",
              iconColor: "text-teal-600"
            }
          ].map((item, index) => (
            <div key={index} className={`${item.color} rounded-lg p-3 hover:shadow-sm transition-shadow duration-200`}>
              <div className="flex items-center mb-2">
                <div className={`w-6 h-6 rounded-full ${item.color.replace('100', '200')} flex items-center justify-center mr-2`}>
                  <svg className={`w-3 h-3 ${item.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 text-md">{item.title}</h4>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <div className="bg-blue-50 border-l-3 border-[#38a2df] p-4 rounded-r hover:shadow-sm transition-shadow duration-200">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-[#38a2df]/20 flex items-center justify-center mr-2">
                <svg className="w-3 h-3 text-[#38a2df]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 text-md">Consent and Notification</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Users' Personal Data is collected subject to Users' knowledge and information of the purpose for which Personal Data is collected and that the Users have given their written consent, except where otherwise permitted or required by law. Users are responsible for providing accurate and complete information and are expected to inform the Company promptly of any changes to their Personal Data.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-3 border-yellow-500 p-4 rounded-r hover:shadow-sm transition-shadow duration-200">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-2">
                <svg className="w-3 h-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 text-md">Disclosure of Personal Data</h4>
            </div>
            <p className="text-gray-600 text-sm">
              The Company may disclose Users' Personal Data to relevant government authorities, legal advisers, service providers, related corporate entities, prospective merger or acquisition parties, or as mandated by court orders or international compliance-related laws. Disclosure will occur in compliance with applicable laws and with prior consent from the User, unless such disclosure is mandated by law.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Consent and Withdrawal of Consent",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          By providing Personal Data to the Company, Users are considered to have given their implicit consent to the collection, use, retention, storage, protection and management of their Personal Data. This consent is valid until it is rescinded in writing or until the termination of the individual's relationship with the Company.
        </p>
        <div className="bg-gray-50 p-3 rounded text-md">
          <p className="text-gray-700 leading-relaxed font-semibold mb-2">Individuals wishing to withdraw their consent may do so at any time by following these specific steps:</p>
          <p className="text-gray-700 mb-2">Contact us at:</p>
          <ul className="space-y-1 text-gray-700 ml-4">
            <li className="flex items-start">
              <span className="font-semibold mr-2">Email:</span>
              <span>contact@purposetechnologies.com – Send your withdrawal request via email for prompt processing.</span>
            </li>
            {/* <li className="flex items-start">
              <span className="font-semibold mr-2">Postal Address:</span>
              <span>Building # 15 C, 2nd Floor Seeds, 5th Commercial Lane, Zamzama, DHA Phase V, Karachi. Karachi, Sindh 755000 – For those who prefer or require a documented request.</span>
            </li> */}
          </ul>
        </div>
        <div className="bg-blue-50 p-3 rounded text-md mt-3">
          <p className="text-gray-700 leading-relaxed font-semibold mb-2">Include the Following Information in Your Request:</p>
          <ul className="space-y-1 text-gray-700 ml-4">
            <li className="flex items-start">
              <span className="font-semibold mr-2">• Full Name and Contact Information:</span>
              <span>To verify your identity and facilitate contact if necessary.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">• Account Information:</span>
              <span>Include your Account login ID / email address.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">• Specific Consents to Withdraw:</span>
              <span>Kindly specify which data uses or processing activities you are withdrawing consent for.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">• Signature:</span>
              <span>Include your signature with a postal request. For emails, type your full name.</span>
            </li>
          </ul>
        </div>
        <div className="space-y-2 mt-3 text-md text-gray-700">
          <p><span className="font-semibold">Processing of the Withdrawal request:</span> The Company aims to process all withdrawals of consent within thirty (30) working days from receipt of such request. The User will receive confirmation once the consent has been successfully withdrawn.</p>
          <p><span className="font-semibold">Impact of Withdrawal:</span> Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal and may be subject to consequences outlined by the Company if it affects the ability to provide Services.</p>
          <p><span className="font-semibold">Retention of Data Post-Withdrawal:</span> Withdrawal of consent does not necessarily imply the deletion of the User's Personal Data. The Company is obligated to retain certain information for a specified period to comply with AML and other applicable laws and regulations.</p>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Third-Party Data Use",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          The Company may obtain Personal Data about Users from third-party sources. This information is used solely to improve the security, efficiency, and customization of our Services. Specifically, it aids in verifying User identities, enhancing the accuracy of the Personal Data we maintain, and preventing fraudulent transactions. We are committed to ensure that this third-party data is handled with the same level of integrity, security and confidentiality as the Personal Data collected directly from Users. It is used exclusively in accordance with this Policy to uphold User privacy and expectations.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "International Transfer of Personal Data",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          Our global operations sometimes necessitate the transfer of personal data across international borders. When processing Personal Data outside of Pakistan, we ensure compliance with applicable local and international data protection laws, including but not limited to the GDPR, PIPEDA, CalOPPA, CCPA, DIFC Law No. 05 of 2020, by implementing robust safeguards such as standard contractual clauses. This ensures that the data protection offered is equivalent to that required under local regulations. Our data transfers include sharing with subsidiaries, associates, sister concerns, or affiliates both outside and within Pakistan, adhering strictly to the legal requirements of the respective jurisdictions. By using our Services, Users explicitly consent to these international transfers of their Personal Data, thus ensuring that their Personal Data remains protected and secure, maintaining privacy and security across all jurisdictions involved.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Access and Correction of Personal Data",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          Users have the right to access and correct their personal data held by our Company. To make such a request, please contact us via email at contact@purposetechnologies.com or by sending a written request to our postal address as provided in our policy. When submitting your request, include your full name, contact information, and specify the data you wish to access or correct. This will help us efficiently locate and verify your identity. We commit to processing all requests within 30 days and will inform you of the outcome or any necessary extensions. Access may be provided to specific data elements or documents as required by your request. If any data is found to be inaccurate or incomplete, you can request an update, correction, or deletion. If the Company is unable to fulfill your request, we will provide clear reasons for our inability to do so, ensuring transparency in our processes.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "Retention and Disposal of Personal Data",
    content: (
      <div className="space-y-3">
        <div className="text-md text-gray-700">
          <p className="font-semibold mb-1">a. Retention Period and Adjustment:</p>
          <p className="mb-2">The Company retains Users' Personal Data for as long necessary to fulfill the purposes for which it was collected or as required by applicable legal, compliance, accounting or reporting obligations. The specific retention periods for different categories of Personal Data are determined based on the nature of the Personal Data, its intended use, and relevant legal or operational requirements, as outlined in the Service Agreements. Retention periods are regularly reviewed and adjusted in response to changes in legal obligations, data volumes, and evolving service development needs. This ensures that Personal Data is retained appropriately and managed in accordance with regulatory and operational standards.</p>

          <p className="font-semibold mb-1 mt-3">b. Disposal and Anonymization:</p>
          <p className="mb-2">Once the retention period has expired, Personal Data is either securely deleted or anonymized to prevent any possibility of reconstruction or further processing. Disposal methods are selected based on the sensitivity and volume of the Personal Data ensuring that all Personal Data is handled with the highest security standards and in line with best practices.</p>

          <p className="font-semibold mb-1 mt-3">c. Special Considerations for Sensitive Data:</p>
          <p className="mb-2">For sensitive Personal Data, the Company implements enhanced measures to manage both retention and disposal processes. These measures are designed to meet stricter regulatory requirements and to protect such data from unauthorized access or misuse.</p>

          <p className="font-semibold mb-1 mt-3">d. Documentation and Compliance:</p>
          <p>The Company maintains comprehensive documentation of data retention and disposal activities to ensure accountability and to provide evidence of compliance with this Policy and relevant data protection regulations.</p>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    title: "Protection and Access of Personal Data",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          The Company employs administrative, physical and technical measures to safeguard Users' Personal Data against unauthorized access, disclosure and/or modification. Data disclosure is restricted to stakeholders with a need-to-know basis. While stringent security measures are in place, the Company does not guarantee absolute protection against unauthorized access, copying or disposal of data.
        </p>
        <p className="text-gray-700 text-md leading-relaxed mt-2">
          Users have the right to request access to their Personal Data or information regarding its utilization or disclosure. Depending on the nature of the request, access may be granted to the data itself or a confirmation of the data held by the Company. In cases where the Company is unable to fulfill a request, reasons will be provided.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    title: "Changes to This Policy",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          The Company reserves the right to update or modify this Privacy Policy at any time. Any changes will be effective upon posting of the updated Policy on the Company's Digital Platform. Users are encouraged to review this Policy periodically to stay informed about how the Company collects, uses, retains, and protects their Personal Data.
        </p>
      </div>
    ),
  },
  {
    id: 13,
    title: "Cookie Policy",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          Cookies and tracking technologies are small data files placed on your device by your web browser when you use our Services. These technologies serve various purposes:
        </p>
        <div className="bg-gray-50 p-3 rounded text-md mt-2">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="font-semibold mr-2">• Essential Cookies:</span>
              <span>These are necessary for the core functionality of our Services, allowing you to navigate and use essential features.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">• Performance Cookies:</span>
              <span>These collect data about your browsing habits to help us improve our Services and ensure an optimal user experience.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">• Functional Cookies:</span>
              <span>These remember your preferences and settings to enhance your experience by personalizing content.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">• Advertising Cookies:</span>
              <span>These are used to deliver relevant advertisements to you and measure the effectiveness of our marketing efforts.</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 14,
    title: "Third Party Links",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          Our Digital Platform may contain links to external websites or resources that are not operated or controlled by the Company. These third-party websites may have their own privacy policies and practices, which differ from ours. We are not responsible for the content, privacy practices, or data protection measures of these external sites. Users are encouraged to review the privacy policies and terms of use of any third-party sites they visit. While we strive to provide links to reputable and trustworthy sites, we cannot guarantee the privacy or security of information collected by these external sites. Any data provided to or collected by these third parties is governed by their respective policies and practices, and we disclaim any responsibility for their actions.
        </p>
      </div>
    ),
  },
  {
    id: 15,
    title: "Changes to Policy",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          To enhance user awareness and compliance, this Policy may be updated at any time and will be communicated to users through email notifications and/or visible notices on our Digital Platform. Users will have a 30-day period to review any changes before they take effect, allowing ample time to understand the implications of these updates. Continued use of our Services after this period will be regarded as implied acceptance of the new terms. Please ensure your contact details are up-to-date to receive these notifications. If you disagree with the changes, you may discontinue using our Services and contact us for any further assistance.
        </p>
      </div>
    ),
  },
  {
    id: 16,
    title: "Governing Law",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          This Policy shall be governed by the applicable local laws in the country where the Services are being provided to the User.
        </p>
      </div>
    ),
  },
  {
    id: 17,
    title: "Contact Us",
    content: (
      <div className="space-y-3">
        <p className="text-gray-700 text-md leading-relaxed">
          For any questions, concerns, or feedback regarding data protection, please contact our concerned officer:
        </p>
        <div className="bg-blue-50 p-3 rounded text-md">
          <p className="text-gray-700 mb-1"><span className="font-semibold">Email:</span> contact@purposetechnologies.com</p>
          {/* <p className="text-gray-700"><span className="font-semibold">Postal Address:</span> Building # 15 C, 2nd Floor Seeds, 5th Commercial Lane, Zamzama, DHA Phase V, Karachi. Karachi, Sindh 755000</p> */}
        </div>
        <p className="text-gray-700 text-md leading-relaxed">
          We offer multiple contact options to ensure that you can reach us through your preferred method. This helps us maintain a transparent dialogue and provides you with the support you need regarding your data privacy concerns.
        </p>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const scrollPosition = window.scrollY + 100;
      let currentActive = 1;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const offsetTop = ref.offsetTop;
          const height = ref.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            currentActive = index + 1;
          }
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: number) => {
    const element = sectionRefs.current[id - 1];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-mulish min-h-screen bg-white">


      {/* Hero Section */}
      <section className="py-4 pb-2">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 bg-[#38a2df]/10 text-[#38a2df] rounded-full text-sm font-medium mb-3">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              Privacy Policy
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Privacy <span className="text-[#38a2df]">Policy</span>
            </h1>
            <p className="text-gray-600 text-md max-w-2xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl pb-6">
        <div className="space-y-6">
          {privacySections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="scroll-mt-20"
              id={`section-${section.id}`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-[#38a2df] to-[#2d8bc8] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{section.id}</span>
                </div>
                <div className="flex-grow">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    {section.title}
                  </h2>
                  <div className="bg-white rounded border border-gray-100 p-4">
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