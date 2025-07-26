export const Skills: React.FC = () => {
  const skillCategories = {
    Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript'],
    Backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
    Tools: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code', 'Webpack', 'Vite'],
    Design: [ 'Responsive Design', 'Accessibility', 'Design Systems']
  };

  return (
    <section className="py-20 px-4 bg-blue-900 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white  dark:text-white mb-12 text-center">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
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