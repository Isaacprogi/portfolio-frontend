import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "../ToggleTheme/ToggleTheme";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { ContactModal } from "../ContactModal/ContactModal";
import clsx from "clsx";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 mb-[2rem] sm:mb-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 text-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center h-12">
            {/* Left: Theme Toggle and Icons */}
            <div className="flex gap-2 items-center">
              <ThemeToggle />
              <ArrowRight size={12} className="text-gray-600 dark:text-white" />
              <div className="flex gap-2">
                <a
                  href="#"
                  className="p-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all duration-200 group"
                >
                  <Github className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="#"
                  className="p-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all duration-200 group"
                >
                  <Linkedin className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>
                <button
                  onClick={() => setModalOpen(true)}
                  className="p-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all duration-200 group"
                >
                  <Mail className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </button>
              </div>
            </div>

            {/* Right: Navigation Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={() => navigate("/")}
                className={clsx(
                  "px-3 py-1.5 rounded-md text-sm transition-colors duration-200 font-medium",
                  currentPath === "/"
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all duration-200 group"
                )}
              >
                Overview
              </button>
              <button
                onClick={() => navigate("/blog")}
                className={clsx(
                  "px-3 py-1.5 rounded-md text-sm transition-colors duration-200 font-medium",
                  currentPath === "/blog"
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all duration-200 group"
                )}
              >
                Articles
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
