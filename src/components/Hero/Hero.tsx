import { ExternalLink, Download, Mail } from "lucide-react";
import Me from "../../assets/isaac.jpg";

export const Hero: React.FC = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-white dark:bg-black px-4">
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-display md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-500 dark:text-blue-400">Isaac</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
            Software Engineer
          </p>

          <p className="text-base text-gray-500 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
            Every product starts with curiosity. I craft intuitive, scalable web experiences—frontend to backend—that feel as good as they work.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start">
            <button
              onClick={handleScrollToProjects}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 transition"
            >
              View Projects
              <ExternalLink className="w-4 h-4" />
            </button>

            <a
              href="https://docs.google.com/document/d/1gvA5QUOlVCi0YXapgI5mIcAFoIi5uIzuCEnPOavMarA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={handleScrollToContact}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 transition"
            >
              Hire Me
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={Me}
            alt="Isaac Anasonye"
            className="w-52 h-52 object-cover rounded-full border border-gray-200 dark:border-gray-700"
          />
        </div>
      </div>
    </section>
  );
};
