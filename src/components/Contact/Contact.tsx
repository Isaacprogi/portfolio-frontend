import { Mail,Linkedin,Github } from "lucide-react";
export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-display md:text-6xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Let's Work Together
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having 
              a chat about technology and design. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                -
                <span className="text-gray-700 dark:text-gray-300">isaaconyes80@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                -
                <span className="text-gray-700 dark:text-gray-300">linkedin.com/in/isaacanasonye</span>
              </div>
              <div className="flex items-center gap-4">
                <Github className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                -
                <span className="text-gray-700 dark:text-gray-300">github.com/isaacprogi</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800/40 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200  dark:border-gray-800/40 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm  font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800/40 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};