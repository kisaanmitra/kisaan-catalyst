import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface HeaderProps {
  toggleContrast?: () => void;
  isHighContrast?: boolean;
  language?: "english" | "hindi" | "kannada";
  setLanguage?: React.Dispatch<React.SetStateAction<"english" | "hindi" | "kannada">>;
}

const Header: React.FC<HeaderProps> = ({ 
  toggleContrast, 
  isHighContrast,
  language,
  setLanguage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [user, setUser] = useState<any>(null);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "साइन आउट सफल (Sign Out Successful)",
        description: "आप सफलतापूर्वक साइन आउट हो गए हैं (You have been successfully signed out)"
      });
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        variant: "destructive",
        title: "साइन आउट विफल (Sign Out Failed)",
        description: "साइन आउट करने में समस्या हुई (There was a problem signing out)"
      });
    }
  };

  const navigationLinks = [
    { name: 'मुख्य पृष्ठ (Home)', path: '/' },
    { name: 'विशेषताएँ (Features)', path: '/features' },
    { name: 'डेमो (Demo)', path: '/demo' },
    { name: 'किसानों की कहानियां (Stories)', path: '/stories' },
    { name: 'सरकारी योजनाएँ (Government Schemes)', path: '/government' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/farm-logo.png" alt="KisaanMitra Logo" />
              <span className="ml-2 text-xl font-bold text-primary">किसानमित्र</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 items-center">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? 'text-primary bg-green-50 dark:bg-green-900/20'
                    : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {user && (
              <Link
                to="/dashboard"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/dashboard'
                    ? 'text-primary bg-green-50 dark:bg-green-900/20'
                    : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                डैशबोर्ड (Dashboard)
              </Link>
            )}
            
            <div className="flex items-center gap-2 ml-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {toggleContrast && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleContrast}
                  aria-label={isHighContrast ? 'Switch to normal contrast' : 'Switch to high contrast'}
                  className="text-xs"
                >
                  {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
                </Button>
              )}

              {language && setLanguage && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      {language === 'english' ? 'English' : 
                       language === 'hindi' ? 'हिंदी' : 'ಕನ್ನಡ'}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setLanguage('english')}>
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage('hindi')}>
                      हिंदी
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage('kannada')}>
                      ಕನ್ನಡ
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-2 flex items-center gap-1">
                    <span className="truncate max-w-[100px]">
                      {user.email ? user.email.split('@')[0] : 'User'}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer">
                      डैशबोर्ड (Dashboard)
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                    साइन आउट (Sign Out)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center ml-2">
                <Link to="/sign-in">
                  <Button variant="outline" size="sm" className="mr-2">
                    साइन इन (Sign In)
                  </Button>
                </Link>
                <Link to="/sign-up">
                  <Button size="sm">साइन अप (Sign Up)</Button>
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-primary bg-green-50 dark:bg-green-900/20'
                    : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {user && (
              <Link
                to="/dashboard"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === '/dashboard'
                    ? 'text-primary bg-green-50 dark:bg-green-900/20'
                    : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                डैशबोर्ड (Dashboard)
              </Link>
            )}
            
            {toggleContrast && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  toggleContrast();
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start text-left px-3 py-2 rounded-md text-base font-medium"
              >
                {isHighContrast ? 'Normal Contrast' : 'High Contrast'}
              </Button>
            )}

            {language && setLanguage && (
              <div className="py-2">
                <p className="px-3 text-sm text-gray-500 dark:text-gray-400 mb-1">Language / भाषा</p>
                <div className="flex space-x-2 px-3">
                  <Button 
                    size="sm" 
                    variant={language === 'english' ? 'default' : 'outline'}
                    onClick={() => {
                      setLanguage('english');
                      setMobileMenuOpen(false);
                    }}
                  >
                    English
                  </Button>
                  <Button 
                    size="sm" 
                    variant={language === 'hindi' ? 'default' : 'outline'}
                    onClick={() => {
                      setLanguage('hindi');
                      setMobileMenuOpen(false);
                    }}
                  >
                    हिंदी
                  </Button>
                  <Button 
                    size="sm" 
                    variant={language === 'kannada' ? 'default' : 'outline'}
                    onClick={() => {
                      setLanguage('kannada');
                      setMobileMenuOpen(false);
                    }}
                  >
                    ಕನ್ನಡ
                  </Button>
                </div>
              </div>
            )}
            
            {user ? (
              <Button
                variant="ghost"
                onClick={() => {
                  handleSignOut();
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start text-left px-3 py-2 rounded-md text-base font-medium"
              >
                साइन आउट (Sign Out)
              </Button>
            ) : (
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    साइन इन (Sign In)
                  </Button>
                </Link>
                <Link to="/sign-up" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">साइन अप (Sign Up)</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
