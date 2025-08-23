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

interface ContactItem {
  icon: React.ReactElement;
  text: string;
  type: string;
  description: string;
  href?: string;
}

interface ContactCategory {
  category: string;
  items: ContactItem[];
}

export const PersonalInfo = () => {
  const contactInfo: ContactCategory[] = [
    {
      category: "Location",
      items: [
        {
          icon: <FaMapMarkerAlt size={20} />,
          text: "Tehran, Iran",
          type: "text",
          description: "Available for remote work worldwide",
        },
      ],
    },
    {
      category: "Direct Contact",
      items: [
        {
          icon: <FaPhone size={20} />,
          text: "(+98) 913 863 6926",
          type: "phone",
          href: "tel:+989138636926",
          description: "Call or WhatsApp",
        },
        {
          icon: <FaEnvelope size={20} />,
          text: "Hojat.Gazestani@gmail.com",
          type: "email",
          href: "mailto:Hojat.Gazestani@gmail.com",
          description: "Primary contact method",
        },
      ],
    },
    {
      category: "Professional Profiles",
      items: [
        {
          icon: <FaLinkedin size={20} />,
          text: "LinkedIn",
          type: "link",
          href: "https://www.linkedin.com/in/hojat-gazestani/",
          description: "Professional network",
        },
        {
          icon: <FaGithub size={20} />,
          text: "GitHub",
          type: "link",
          href: "https://github.com/hojat-gazestani",
          description: "Code repositories",
        },
      ],
    },
    {
      category: "Content & Media",
      items: [
        {
          icon: <FaMedium size={20} />,
          text: "Medium",
          type: "link",
          href: "https://medium.com/@hojat_gazestani",
          description: "Technical articles",
        },
        {
          icon: <FaYoutube size={20} />,
          text: "YouTube",
          type: "link",
          href: "https://www.youtube.com/channel/UCmYCnN9mmHEcSvfP6ytbnGA",
          description: "Video tutorials",
        },
      ],
    },
  ];

  return (
    <div id="contact" className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-12">
        {/* Quick Contact Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <Link
            href="mailto:Hojat.Gazestani@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
          >
            <FaEnvelope />
            <span>Email Me</span>
          </Link>
          <Link
            href="tel:+989138636926"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-sm hover:shadow-md"
          >
            <FaPhone />
            <span>Call Me</span>
          </Link>
        </div>

        {/* Contact Information Cards */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden"
              >
                <div className="bg-gray-100 dark:bg-gray-600 px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide">
                    {category.category}
                  </h3>
                </div>

                <div className="p-4 space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <span className="text-gray-500 dark:text-gray-400">
                          {item.icon}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        {item.href ? (
                          <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                          >
                            {item.text}
                          </Link>
                        ) : (
                          <span className="block text-gray-700 dark:text-gray-200 font-medium">
                            {item.text}
                          </span>
                        )}

                        {item.description && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
