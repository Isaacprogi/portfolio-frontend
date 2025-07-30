export const Skills: React.FC = () => {
  const skillCategories = {
    Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript'],
    Backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
    Tools: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code', 'Webpack', 'Vite'],
    Design: ['Responsive Design', 'Accessibility', 'Design Systems'],
  };

  return (
    <section id="skills" className="py-16 px-4 bg-white dark:bg-black text-black dark:text-white font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-display md:text-6xl font-bold text-center mb-10">
          🛠️ Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className=" rounded-xl p-5 border border-gray-200 dark:bg-gray-900 dark:border-gray-700/40">
              <h3 className="text-xl font-semibold mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#e7e7e7] border border-gray-800 dark:bg-gray-800/40 text-sm text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full"
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
