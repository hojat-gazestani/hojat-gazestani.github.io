import { FaLanguage } from "react-icons/fa";

export const Languages = () => {
  const languages = [
    { name: "Persian", level: "Native", proficiency: 100 },
    { name: "English", level: "Professional", proficiency: 80 },
    { name: "German", level: "Basic", proficiency: 30 },
  ];

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <FaLanguage className="text-blue-500 mr-3" size={24} />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Languages
        </h2>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <ul className="space-y-4">
          {languages.map((lang, index) => (
            <li key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {lang.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {lang.level}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${lang.proficiency}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
