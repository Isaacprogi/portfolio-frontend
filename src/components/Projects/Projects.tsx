import React, { useState } from "react";
import { Github, ExternalLink, Building2, User } from "lucide-react";
import { projects } from "../../lib/data";

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "company" | "personal"
  >("all");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.type === activeFilter
  );

  const companyCount = projects.filter((p) => p.type === "company").length;
  const personalCount = projects.filter((p) => p.type === "personal").length;

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-display md:text-6xl font-bold text-gray-900 dark:text-white text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto text-sm">
          A collection of professional and personal projects showcasing
          creativity, design, and technical depth.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800/40 border border-gray-800 rounded-full p-1 shadow-sm flex space-x-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter("company")}
              className={`px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
                activeFilter === "company"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Company ({companyCount})
            </button>
            <button
              onClick={() => setActiveFilter("personal")}
              className={`px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
                activeFilter === "personal"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <User className="w-4 h-4" />
              Personal ({personalCount})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white group border dark:border-gray-800 dark:bg-gray-800/40 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent rounded-t-xl opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />

                {/* Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                      project.type === "company"
                        ? "bg-blue-600 text-white"
                        : "bg-green-600 text-white"
                    }`}
                  >
                    {project.type === "company" ? (
                      <Building2 className="w-3 h-3" />
                    ) : (
                      <User className="w-3 h-3" />
                    )}
                    {project.type.charAt(0).toUpperCase() +
                      project.type.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                {project.company && (
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
                    @{project.company}
                  </p>
                )}
               <p className="text-sm italic text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
  {project.description}
</p>


                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:underline text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No projects found for the selected filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
