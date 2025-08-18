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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="space-y-4 p-4 lg:p-6 border border-gray-100 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {lang.name}
                </span>
                <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium">
                  {lang.level}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Proficiency</span>
                  <span>{lang.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 lg:h-4">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 lg:h-4 rounded-full transition-all duration-300"
                    style={{ width: `${lang.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
