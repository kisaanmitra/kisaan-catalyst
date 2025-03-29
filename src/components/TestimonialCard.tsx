
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  testimony: string;
  rating: number;
  crop: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  image,
  testimony,
  rating,
  crop
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="pb-0">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/64x64?text=Farmer";
              }}
            />
          </div>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>
              {location} • {crop} Farmer
            </CardDescription>
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < rating ? "text-yellow-500 fill-current" : "text-gray-300"}
                />
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4 flex-grow">
        <p className="text-gray-600 dark:text-gray-400 text-sm italic">"{testimony}"</p>
      </CardContent>
      <CardFooter className="text-xs text-gray-500 justify-end border-t pt-3">
        <span>KisaanMitra user since 2023</span>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
