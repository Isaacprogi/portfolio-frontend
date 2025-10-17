import { ExternalLink, Download, Mail,SwitchCameraIcon } from "lucide-react";
import Me from "../../assets/isaac.jpg";
import CartoonMe from "../../assets/isaac-cat.png"; // Fake import for cartoon
import { handleScrollToItem } from "../../lib/utils";
import { ParticlesBackground } from "../ParticlesBackground/ParticlesBackground";
import { useState } from "react";

export const Hero: React.FC = () => {
  const [showCartoon, setShowCartoon] = useState(false);

  const handleResumeDownload = () => {
    console.log('Resume downloaded');
  };

  const handleHireMeClick = () => {
    handleScrollToItem("contact");
  };

  const handleProjectsClick = () => {
    handleScrollToItem("projects");
  };

  const toggleProfilePicture = () => {
    setShowCartoon(!showCartoon);
  };

  return (
    <section 
      id="hero"
      className="min-h-[calc(100vh-4rem)] relative flex flex-col items-center justify-center bg-white dark:bg-black px-4 py-8"
      aria-labelledby="hero-heading"
    >
      {/* Background - Ensure it's behind everything */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Main Content - Ensure it's above the canvas */}
      <div className="max-w-4xl w-full border border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-lg dark:shadow-gray-900/20 relative z-10">
        
        {/* Rest of your content remains exactly the same */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div>
            <h1 
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-blue-500 dark:text-blue-400 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                Isaac
              </span>
            </h1>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-lg md:text-xl text-blue-600 dark:text-blue-300 font-medium">
                Software Engineer
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
            Every product starts with curiosity. I craft intuitive, scalable web experiences—frontend to backend—that feel as good as they work.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start">
            <button
              onClick={handleProjectsClick}
              className="group bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/25"
              aria-label="View my projects"
            >
              View Projects
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <a
              href="https://docs.google.com/document/d/1gvA5QUOlVCi0YXapgI5mIcAFoIi5uIzuCEnPOavMarA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeDownload}
              className="group border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Download my resume"
            >
              Resume
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <button
              onClick={handleHireMeClick}
              className="group bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-500/25"
              aria-label="Contact me for hiring"
            >
              Hire Me
              <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>

        {/* Image with Toggle */}
        <div className="flex-shrink-0 relative">
          <div className="relative">
            <img
              src={showCartoon ? CartoonMe : Me}
              alt={showCartoon ? "Isaac Anasonye - Cartoon Version" : "Isaac Anasonye - Software Engineer"}
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl dark:shadow-gray-900/50 transition-all duration-300 hover:scale-105"
              loading="eager"
            />
            {/* Decorative gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-green-500 -z-10 blur-md opacity-20 animate-pulse" />
            
            {/* Toggle Button */}
            <button
              onClick={toggleProfilePicture}
              className="absolute -bottom-2 -right-2 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 border-2 border-white dark:border-gray-700 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 group"
              aria-label={showCartoon ? "Switch to real photo" : "Switch to cartoon version"}
              title={showCartoon ? "Switch to real photo" : "Switch to cartoon version"}
            >
              <SwitchCameraIcon className="w-5 h-5 duration-300 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform group-hover:rotate-180" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};