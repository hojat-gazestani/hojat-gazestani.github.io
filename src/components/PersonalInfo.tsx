import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaMedium,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const PersonalInfo = () => {
  const personalInfo = [
    { icon: <FaMapMarkerAlt size={20} />, text: "Tehran, Iran" },
    { icon: <FaPhone size={20} />, text: "(+98) 913 863 6926" },
    {
      icon: <FaEnvelope size={20} />,
      text: "Email",
      href: "mailto:Hojat.Gazestani@gmail.com",
    },
    {
      icon: <FaGithub size={20} />,
      text: "GitHub",
      href: "https://github.com/hojat-gazestani",
    },
    {
      icon: <FaMedium size={20} />,
      text: "Medium",
      href: "https://medium.com/@hojat_gazestani",
    },
    {
      icon: <FaLinkedin size={20} />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/hojat-gazestani/",
    },
    {
      icon: <FaYoutube size={20} />,
      text: "YouTube",
      href: "https://www.youtube.com/channel/UCmYCnN9mmHEcSvfP6ytbnGA",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-12">
        {/* My picture */}
        <div className="flex justify-center mb-6">
          <Image
            src="/me.png"
            alt="Hojat Gazestani"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Personal Info Section */}
        <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {personalInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="mr-3 text-gray-500 dark:text-gray-300">
                  {item.icon}
                </span>
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <span className="text-gray-700 dark:text-gray-200">
                    {item.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
