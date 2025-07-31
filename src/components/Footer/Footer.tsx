import {
  Heart,
  Code,
  Coffee,
  Github,
  Twitter,
  Mail,
  Linkedin,
} from 'lucide-react';
import { handleScrollToItem } from '../../lib/utils';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleLinkClick = (link: any) => {
    if (link.name.toLowerCase() === 'blog') {
      navigate('/article');
      return;
    }
    handleScrollToItem(link.name.toLowerCase());
  };

  return (
    <footer className="relative border-t border-gray-200/30 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Isaac
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md leading-relaxed">
              Crafting clean and modern web experiences with creativity and
              care. Always improving, always iterating.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-600" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'About' },
                { name: 'Projects' },
                { name: 'Blog' },
                { name: 'Skills' },
                { name: 'Contact' },
              ].map((link) => (
                <li
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex space-x-3">
              {[
                {
                  icon: Github,
                  href: 'https://github.com/yourusername',
                  label: 'GitHub',
                },
                {
                  icon: Linkedin,
                  href: 'https://linkedin.com/in/yourusername',
                  label: 'LinkedIn',
                },
                {
                  icon: Mail,
                  href: 'mailto:isaaconyes80@gmail.com',
                  label: 'Email',
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl hover:border-blue-500 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-5 bg-white/70 dark:bg-black/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400 gap-3">
          <p>© {currentYear} Isaac. All rights reserved.</p>
          <div className="flex flex-wrap gap-2 items-center text-xs">
            {[
              { name: 'React', color: 'blue' },
              { name: 'TypeScript', color: 'purple' },
              { name: 'Tailwind', color: 'teal' },
            ].map((tech) => (
              <span
                key={tech.name}
                className={`px-2 py-1 rounded-full bg-${tech.color}-100 dark:bg-${tech.color}-900/30 text-${tech.color}-700 dark:text-${tech.color}-300`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
