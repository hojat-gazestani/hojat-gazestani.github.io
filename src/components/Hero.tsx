import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl mb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div
            className="flex-1 text-center lg:text-left"
            itemScope
            itemType="http://schema.org/Person"
          >
            {/* Profile Image */}
            <div className="flex-1 flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>

                {/* Profile Image */}
                <div className="relative">
                  <Image
                    src="/me.png"
                    alt="Hojat Gazestani - DevOps & Cloud Engineer"
                    width={300}
                    height={300}
                    className="rounded-full shadow-2xl border-4 border-white dark:border-gray-800 transform hover:scale-105 transition-transform duration-300"
                    priority
                  />

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Name */}
            <h1
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
              itemProp="name"
            >
              Hojat Gazestani
            </h1>

            {/* Main Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              itemProp="jobTitle"
            >
              DevOps &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Cloud Engineer
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Building resilient, scalable systems with modern cloud
              technologies. Specializing in Kubernetes, AWS, Python/Django, and
              DevOps automation.
            </p>

            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span>Kubernetes Expert</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                <span>AWS Certified</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                <span>Python/Django</span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start">
              <Link
                href="/articles"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Read My Articles
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="group border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                Get In Touch
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Secondary CTA */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href="/resume.pdf"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaDownload />
                <span>Download Resume</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
