import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaMedium } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Hojat Gazestani. All rights reserved.
            </p>
          </div>

          <nav aria-label="Social media links">
            <div className="flex space-x-6">
              <Link
                href="https://github.com/hojat-gazestani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                aria-label="GitHub profile"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/hojat-gazestani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCmYCnN9mmHEcSvfP6ytbnGA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </Link>

              <Link
                href="https://medium.com/@hojat_gazestani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                aria-label="Medium"
              >
                <FaMedium size={20} />
              </Link>
            </div>
          </nav>
        </div>

        <div className="mt-4 text-center md:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with <span className="font-semibold">Next.js</span>,
            <span className="font-semibold">Tailwind CSS</span>, and deployed on
            <span className="font-semibold">GitHub Pages</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
