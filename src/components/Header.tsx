
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Volume2, UserCircle } from 'lucide-react';

interface HeaderProps {
  toggleContrast: () => void;
  isHighContrast: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleContrast, isHighContrast }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const activateVoiceNavigation = () => {
    // This would connect to a speech recognition API
    alert("Voice navigation activated. Please speak your command.");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-primary text-xl font-bold mr-1">Kisaan</span>
              <span className="text-primary-dark text-xl font-bold">Mitra</span>
            </Link>
            <span className="ml-2 text-xs text-gray-500 hidden sm:block">आपका साथी, आपकी फ़सल</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/features" className="text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Features</Link>
            <Link to="/demo" className="text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Demo</Link>
            <Link to="/stories" className="text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Farmer Stories</Link>
            <Link to="/government" className="text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Government Tie-Ups</Link>
          </nav>

          {/* Accessibility & User Actions */}
          <div className="flex items-center">
            <button 
              onClick={activateVoiceNavigation}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 mr-1"
              aria-label="Voice Navigation"
            >
              <Volume2 size={20} />
            </button>
            
            <button 
              onClick={toggleContrast}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 mr-1"
              aria-label={isHighContrast ? "Disable High Contrast" : "Enable High Contrast"}
            >
              <span className="text-xs font-medium">HC</span>
            </button>
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 mr-2"
              aria-label={isDarkMode ? "Light Mode" : "Dark Mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <Link to="/sign-in" className="hidden sm:flex mr-2">
              <Button variant="outline" className="font-noto">
                <UserCircle size={18} className="mr-1" />
                <span className="hindi-text text-sm">प्रवेश करें</span>
              </Button>
            </Link>
            
            <Link to="/sign-up">
              <Button className="font-noto bg-primary hover:bg-primary-dark text-white">
                <span className="hindi-text text-sm">अभी जुड़ें</span>
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="ml-2 md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
            <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Features</Link>
            <Link to="/demo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Demo</Link>
            <Link to="/stories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Farmer Stories</Link>
            <Link to="/government" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Government Tie-Ups</Link>
            <Link to="/sign-in" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">प्रवेश करें (Sign In)</Link>
            <Link to="/sign-up" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">पंजीकरण करें (Sign Up)</Link>
            <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-3">
                <div className="font-noto hindi-text text-gray-600 dark:text-gray-300">
                  आपका साथी, आपकी फ़सल
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
