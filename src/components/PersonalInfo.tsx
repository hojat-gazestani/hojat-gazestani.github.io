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
    { icon: <FaMapMarkerAlt />, text: "Tehran, Iran" },
    { icon: <FaPhone />, text: "(+98) 913 863 6926" },
    {
      icon: <FaEnvelope />,
      text: "Hojat.Gazestani@gmail.com",
      href: "mailto:Hojat.Gazestani@gmail.com",
    },
    {
      icon: <FaGithub />,
      text: "github.com/hojat-gazestani",
      href: "https://github.com/hojat-gazestani",
    },
    {
      icon: <FaMedium />,
      text: "medium.com/@hojat_gazestani",
      href: "https://medium.com/@hojat_gazestani",
    },
    {
      icon: <FaLinkedin />,
      text: "linkedin.com/in/hojat-gazestani",
      href: "https://www.linkedin.com/in/hojat-gazestani/",
    },
    {
      icon: <FaYoutube />,
      text: "youtube.com/@hojat-gazestani",
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
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Contact Information
          </h2>
          <ul className="space-y-3">
            {personalInfo.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-gray-600 dark:text-gray-300"
              >
                <span className="mr-3 text-gray-500 dark:text-gray-400">
                  {item.icon}
                </span>
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
