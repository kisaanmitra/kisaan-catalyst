
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Volume2, UserCircle, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  toggleContrast: () => void;
  isHighContrast: boolean;
  language?: 'english' | 'hindi' | 'kannada';
  setLanguage?: (lang: 'english' | 'hindi' | 'kannada') => void;
}

const Header: React.FC<HeaderProps> = ({ 
  toggleContrast, 
  isHighContrast, 
  language = 'english', 
  setLanguage = () => {} 
}) => {
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

  const getNavText = (key: string) => {
    const texts: Record<string, Record<'english' | 'hindi' | 'kannada', string>> = {
      home: {
        english: 'Home',
        hindi: 'होम',
        kannada: 'ಮುಖಪುಟ'
      },
      features: {
        english: 'Features',
        hindi: 'विशेषताएँ',
        kannada: 'ವೈಶಿಷ್ಟ್ಯಗಳು'
      },
      demo: {
        english: 'Demo',
        hindi: 'डेमो',
        kannada: 'ಡೆಮೋ'
      },
      stories: {
        english: 'Farmer Stories',
        hindi: 'किसान कहानियां',
        kannada: 'ರೈತರ ಕಥೆಗಳು'
      },
      government: {
        english: 'Government Tie-Ups',
        hindi: 'सरकारी योजनाएँ',
        kannada: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು'
      },
      signIn: {
        english: 'Sign In',
        hindi: 'प्रवेश करें',
        kannada: 'ಸೈನ್ ಇನ್'
      },
      signUp: {
        english: 'Join Now',
        hindi: 'अभी जुड़ें',
        kannada: 'ಈಗ ಸೇರಿ'
      }
    };
    
    return texts[key][language];
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
            <span className="ml-2 text-xs text-gray-500 hidden sm:block">
              {language === 'english' 
                ? 'Your companion, your crop'
                : (language === 'hindi' 
                  ? 'आपका साथी, आपकी फ़सल'
                  : 'ನಿಮ್ಮ ಸಂಗಾತಿ, ನಿಮ್ಮ ಬೆಳೆ')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              {getNavText('home')}
            </Link>
            <Link to="/features" className="text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              {getNavText('features')}
            </Link>
            <Link to="/demo" className="text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              {getNavText('demo')}
            </Link>
            <Link to="/stories" className="text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              {getNavText('stories')}
            </Link>
            <Link to="/government" className="text-gray-700 dark:text-gray-200 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
              {getNavText('government')}
            </Link>
          </nav>

          {/* Accessibility & User Actions */}
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 mr-1"
                  aria-label="Change Language"
                >
                  <Globe size={20} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('english')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('hindi')}>
                  हिन्दी (Hindi)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('kannada')}>
                  ಕನ್ನಡ (Kannada)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
              <Button variant="outline">
                <UserCircle size={18} className="mr-1" />
                <span className="text-sm">{getNavText('signIn')}</span>
              </Button>
            </Link>
            
            <Link to="/sign-up">
              <Button className="bg-primary hover:bg-primary-dark text-white">
                <span className="text-sm">{getNavText('signUp')}</span>
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
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              {getNavText('home')}
            </Link>
            <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              {getNavText('features')}
            </Link>
            <Link to="/demo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              {getNavText('demo')}
            </Link>
            <Link to="/stories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              {getNavText('stories')}
            </Link>
            <Link to="/government" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              {getNavText('government')}
            </Link>
            <Link to="/sign-in" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              {getNavText('signIn')}
            </Link>
            <Link to="/sign-up" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              {getNavText('signUp')}
            </Link>
            <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-3">
                <div className="text-gray-600 dark:text-gray-300">
                  {language === 'english' 
                    ? 'Your companion, your crop'
                    : (language === 'hindi' 
                      ? 'आपका साथी, आपकी फ़सल'
                      : 'ನಿಮ್ಮ ಸಂಗಾತಿ, ನಿಮ್ಮ ಬೆಳೆ')}
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
