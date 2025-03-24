
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  // Apply theme whenever isDarkMode changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button 
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="w-10 h-10 rounded-full flex items-center justify-center
                transition-all duration-300 ease-in-out
                bg-secondary dark:bg-accent
                hover:bg-secondary/80 dark:hover:bg-accent/80
                focus:outline-none focus:ring-2 focus:ring-primary/20 focus-visible:ring-2"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Moon size={18} className="text-primary animate-fade-in" />
      ) : (
        <Sun size={18} className="text-primary animate-fade-in" />
      )}
    </button>
  );
};

export default ThemeToggle;
