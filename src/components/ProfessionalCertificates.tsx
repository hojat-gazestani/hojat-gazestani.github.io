import { FaAws, FaGoogle, FaMicrosoft, FaDocker } from "react-icons/fa";
import {
  SiKubernetes,
  SiCisco,
  SiMikrotik,
  SiVmware,
  SiPython,
} from "react-icons/si";
import Link from "next/link";

export const ProfessionalCertificates = () => {
  const certificates = [
    {
      title: "AWS Cloud Solutions Architect Specialization",
      issuer: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/8DBUCVPH7HNR",
      icon: <FaAws className="text-orange-500" size={24} />,
    },
    {
      title: "DevOps on AWS Specialization",
      issuer: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/2U5SV7H7N43W",
      icon: <FaAws className="text-orange-500" size={24} />,
    },
    {
      title: "Python for Everybody Specialization",
      issuer: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/NS6ZK7PDHZJE",
      icon: <SiPython className="text-blue-500" size={24} />,
    },
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      issuer: "Coursera",
      url: "https://coursera.org/share/5937915de1650adb7494afd98992239a",
      icon: <FaGoogle className="text-blue-400" size={24} />,
    },
    {
      title: "Container & Kubernetes Essentials V2",
      issuer: "Coursera",
      url: "https://www.credly.com/badges/40aa2f6e-68c0-4726-8147-7ce6ca06074f/linked_in_profile",
      icon: <SiKubernetes className="text-blue-500" size={24} />,
    },
    {
      title: "Introduction to Containers with Docker, Kubernetes & OpenShift",
      issuer: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/certificate/YHKRLDZ2W63M",
      icon: <FaDocker className="text-blue-400" size={24} />,
    },
    {
      title: "AWS CloudFront: Serve content from multiple S3 buckets",
      issuer: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/certificate/KV2W7CGP9WYV",
      icon: <FaAws className="text-orange-500" size={24} />,
    },
    {
      title: "Routing & Switching (CCNA, CCNP)",
      issuer: "Cisco",
      icon: <SiCisco className="text-blue-500" size={24} />,
    },
    {
      title: "Data Center (CCNA, CCNP)",
      issuer: "Cisco",
      icon: <SiCisco className="text-blue-500" size={24} />,
    },
    {
      title: "Mikrotik (MTCNA, MTCRE, MTCWE)",
      issuer: "Mikrotik",
      icon: <SiMikrotik className="text-red-500" size={24} />,
    },
    {
      title: "Microsoft (MCSA)",
      issuer: "Microsoft",
      icon: <FaMicrosoft className="text-blue-500" size={24} />,
    },
    {
      title: "VMware (VCP, NSX, SRM)",
      issuer: "VMware",
      icon: <SiVmware className="text-blue-500" size={24} />,
    },
    {
      title: "PWK (Penetration Testing with Kali Linux)",
      issuer: "Offensive Security",
    },
    {
      title: "ISMS (Information Security Management System)",
      issuer: "ISO/IEC 27001",
    },
    {
      title: "EMC Storage Certifications",
      issuer: "Dell EMC",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500 flex flex-col"
          >
            <div className="flex items-start mb-3">
              {cert.icon && <div className="mr-3 mt-1">{cert.icon}</div>}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cert.issuer}
                </p>
              </div>
            </div>
            {cert.url && (
              <Link
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                View Credential
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
