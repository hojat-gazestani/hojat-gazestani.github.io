import { FaGraduationCap } from "react-icons/fa";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Information Security",
      institution: "University of Applied Science and Technology (UAST)",
      location: "Kerman, Iran",
      period: "Aug 2016 - Jun 2018",
      icon: <FaGraduationCap className="text-blue-500" size={24} />,
    },
    {
      degree: "Associate Degree in Software Development",
      institution: "Chamran College",
      location: "Kerman, Iran",
      period: "Completed",
      icon: <FaGraduationCap className="text-blue-500" size={24} />,
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">{edu.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  {edu.institution}
                </p>
                <div className="flex flex-wrap gap-x-4 mt-2">
                  <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {edu.location}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
