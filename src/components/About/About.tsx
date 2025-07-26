import { MapPin ,Github,Linkedin,Mail} from "lucide-react";
export const About: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Software Engineer based in Lagos, Nigeria, with a love for creating 
              intuitive and beautiful web experiences. With expertise in modern JavaScript frameworks 
              and a keen eye for design, I bring ideas to life through code.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge through writing and mentoring.
            </p>
            
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
              <MapPin className="w-4 h-4" />
              <span>Lagos, Nigeria</span>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Quick Facts
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>🎯 5+ years of frontend development</li>
              <li>⚡ React & TypeScript enthusiast</li>
              <li>🎨 UI/UX design principles advocate</li>
              <li>📚 Continuous learner and tech blogger</li>
              <li>☕ Coffee-powered coding sessions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};