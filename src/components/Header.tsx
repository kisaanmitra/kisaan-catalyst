
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navigation from './Navigation';

interface HeaderProps {
  toggleContrast?: () => void;
  isHighContrast?: boolean;
  language?: 'english' | 'hindi' | 'kannada';
  setLanguage?: React.Dispatch<React.SetStateAction<'english' | 'hindi' | 'kannada'>>;
}

const Header: React.FC<HeaderProps> = ({ 
  toggleContrast, 
  isHighContrast,
  language,
  setLanguage
}) => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 relative">
      <Navigation />
      
      {/* Accessibility Controls */}
      {toggleContrast && (
        <div className="container mx-auto px-4 flex justify-end py-2 bg-gray-50 dark:bg-gray-800">
          {/* Language Selector */}
          {language && setLanguage && (
            <div className="flex items-center mr-4">
              <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Language:</span>
              <div className="flex space-x-2">
                <Button
                  variant={language === 'english' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLanguage('english')}
                  className="text-xs py-1 h-8"
                >
                  English
                </Button>
                <Button
                  variant={language === 'hindi' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLanguage('hindi')}
                  className="text-xs py-1 h-8"
                >
                  हिंदी
                </Button>
                <Button
                  variant={language === 'kannada' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLanguage('kannada')}
                  className="text-xs py-1 h-8"
                >
                  ಕನ್ನಡ
                </Button>
              </div>
            </div>
          )}
          
          {/* Contrast Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleContrast}
            className="flex items-center"
          >
            {isHighContrast ? (
              <>
                <Sun className="h-4 w-4 mr-1" />
                <span className="text-xs">Normal Contrast</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4 mr-1" />
                <span className="text-xs">High Contrast</span>
              </>
            )}
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
