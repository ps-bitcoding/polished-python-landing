
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle resize to close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/', hash: '#hero' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Skills', path: '/', hash: '#skills' },
    { name: 'Projects', path: '/', hash: '#projects' },
    { name: 'Contact', path: '/', hash: '#contact' },
  ];

  const scrollToSection = (hash: string) => {
    setMobileMenuOpen(false);
    
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-foreground">
            Portfolio<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.hash}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.hash);
              }}
              className="nav-item"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-foreground hover:bg-secondary dark:hover:bg-accent/80 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col min-h-screen overflow-y-scroll bg-background dark:bg-background pt-20 pb-6 px-4">
          <nav className="flex flex-col space-y-4 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.hash}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.hash);
                }}
                className="py-3 px-4 rounded-lg bg-secondary dark:bg-accent/20 font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
