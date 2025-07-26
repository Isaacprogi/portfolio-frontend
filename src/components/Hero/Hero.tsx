import { ExternalLink, Download } from "lucide-react";
import Me from "../../assets/isaac.jpg";
import Background from "../../assets/backgounrd.png";

export const Hero: React.FC = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col gap-4  items-center justify-center px-4 pt-16 overflow-hidden">
     

      {/* Main content */}
      <div className="max-w-4xl mt-16 mb-12 flex-1 mx-auto text-center z-10">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div>
            <img
              src={Me}
              alt="Profile"
              className="w-32 object-cover h-32 rounded-full mx-auto mb-6 border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Isaac</span>
          </h1>
        </div>

        <p className="text-xl border w-[max-content] mx-auto p-1 rounded-md border-gray-300 md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          Software Engineer
        </p>

        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Crafting modern web experiences with clean code and beautiful design.
          Specializing in frontend development and engineering, as well as backend development and engineering.
          Passionate about creating user-centered digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleScrollToProjects}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
          >
            View Projects
            <ExternalLink className="w-4 h-4" />
          </button>

          <a
            href="https://docs.google.com/document/d/1gvA5QUOlVCi0YXapgI5mIcAFoIi5uIzuCEnPOavMarA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>

      <img className="flex-1 max-w-[30rem] rounded-md object-cover animate-pulse h-[30rem]" src={Background} alt="" />
    </section>
  );
};
