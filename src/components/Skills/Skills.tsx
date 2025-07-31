export const Skills: React.FC = () => {
  const skillCategories = {
    Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript'],
    Backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
    Tools: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code', 'Webpack', 'Vite'],
    Design: ['Responsive Design', 'Accessibility', 'Design Systems'],
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 text-black dark:text-white transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-display md:text-6xl font-bold text-center mb-10">
          🛠️ Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 shadow-md dark:shadow-none hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
