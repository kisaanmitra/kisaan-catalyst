
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  titleHindi?: string;
  description: string;
  icon: LucideIcon;
  color: string;
  buttonText: string;
  buttonHindi?: string;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  titleHindi,
  description,
  icon: Icon,
  color,
  buttonText,
  buttonHindi,
  onClick
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className={`bg-${color}/10`}>
        <div className="flex items-center space-x-2">
          <div className={`p-2 rounded-full bg-${color} text-white`}>
            <Icon size={24} />
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            {titleHindi && (
              <p className="text-sm text-gray-600 dark:text-gray-400 font-noto">{titleHindi}</p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-4 flex-grow">
        <CardDescription className="text-foreground/80 text-sm">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          className="w-full bg-primary hover:bg-primary-dark text-white"
          onClick={onClick}
        >
          {buttonText}
          {buttonHindi && (
            <span className="ml-1 text-sm font-noto">({buttonHindi})</span>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
