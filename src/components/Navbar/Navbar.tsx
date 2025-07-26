import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "../ToggleTheme/ToggleTheme";
import clsx from "clsx";
import { Github,Linkedin,Mail,ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Theme Toggle */}
          <div className="flex gap-4 items-center">
            <ThemeToggle />
           <ArrowRight size={10} className="text-gray-600 dark:text-white "/>
          <div className="flex gap-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Navigation Buttons */}
          <div className="flex space-x-8">
            <button
              onClick={() => navigate("/")}
              className={clsx(
                "px-4 py-2 rounded-lg transition-colors duration-200 font-medium",
                currentPath === "/"
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              Overview
            </button>
            <button
              onClick={() => navigate("/blog")}
              className={clsx(
                "px-4 py-2 rounded-lg transition-colors duration-200 font-medium",
                currentPath === "/blog"
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              Blog
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
