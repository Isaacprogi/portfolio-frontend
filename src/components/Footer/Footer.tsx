import { Heart, Code, Coffee, Github, Twitter, Mail} from 'lucide-react';
import { handleScrollToItem } from '../../lib/utils';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate()


  const handleLinkClick = (link:any) => {
    if(link.name.toLocaleLowerCase() === "blog"){
      navigate("/article")
      return
    }
    handleScrollToItem(link.name.toLocaleLowerCase())
  }

  return (
    <footer className=" dark:bg-black border-t border-gray-200/50 dark:border-gray-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6  py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Isaac
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-sm">
              Crafting digital experiences with passion, precision, and a touch of creativity. 
              Always learning, always building.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-600" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Navigation</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Blog', href: '/blog' },
                { name: 'Skills', href: '/skills' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <div
                  key={link.name}
                  onClick={()=>handleLinkClick(link)}
                  className="block cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex space-x-3">
              {[
                { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
                { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
                { icon: Mail, href: 'mailto:isaaconyes80@gmail.com', label: 'Email' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center text-sm">
            <div className="flex items-center space-x-4 mb-3 sm:mb-0">
              <p className="text-gray-600 dark:text-gray-400">
                © {currentYear} Isaac. All rights reserved.
              </p>
              <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-500">
                <span>Built with</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                  React
                </span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};