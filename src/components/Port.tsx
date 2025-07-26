// import React, { useState, useEffect } from 'react';
// import { Sun, Moon,} from 'lucide-react';


// // Components
// const ThemeToggle: React.FC = () => {
//   const { isDark, toggleTheme } = React.useContext(ThemeContext);
  
//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
//       aria-label="Toggle theme"
//     >
//       {isDark ? (
//         <Sun className="w-5 h-5 text-yellow-500" />
//       ) : (
//         <Moon className="w-5 h-5 text-gray-600" />
//       )}
//     </button>
//   );
// };















// // Main App Component
// const Port: React.FC = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [currentPage, setCurrentPage] = useState('overview');

//   useEffect(() => {
//     const savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     setIsDark(savedTheme);
//   }, []);

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
//         <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
        
//         <Footer />
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export default Port;