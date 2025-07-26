// ThemeContext.tsx
import { createContext, useState, useContext, type ReactNode } from "react";

// 1. Create the context
export const ThemeContext = createContext<{
  isDark: boolean;
  toggleTheme: () => void;
}>({
  isDark: false,
  toggleTheme: () => {},
});

// 2. Create the provider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Optional: custom hook for easier usage
export const useTheme = () => useContext(ThemeContext);
