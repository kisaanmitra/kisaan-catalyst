
import React, { useState, useEffect } from 'react';
import { Cloud, Sun, Tint, Thermometer, ArrowDown, ArrowUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for the widget
const mockWeatherData = {
  location: "Delhi, India",
  temperature: 32,
  humidity: 45,
  rainfall: 0,
  forecast: [
    { day: "Today", temp: 32, condition: "Sunny" },
    { day: "Tomorrow", temp: 30, condition: "Partly Cloudy" },
    { day: "Wed", temp: 28, condition: "Cloudy" }
  ]
};

const mockMandiData = {
  mandiName: "Azadpur Mandi",
  crops: [
    { name: "Wheat", price: 2150, trend: "up", change: 50 },
    { name: "Rice", price: 3200, trend: "down", change: 30 },
    { name: "Potato", price: 1200, trend: "up", change: 120 },
    { name: "Onion", price: 1800, trend: "down", change: 200 }
  ]
};

interface LiveDataWidgetProps {
  widgetType: 'weather' | 'mandi';
}

const LiveDataWidget: React.FC<LiveDataWidgetProps> = ({ widgetType }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const renderWeatherWidget = () => (
    <Card className="w-full overflow-hidden">
      <CardHeader className="bg-primary/10 pb-2">
        <CardTitle className="flex justify-between items-center">
          <span>Weather Updates</span>
          <Sun className="text-yellow-500" size={20} />
        </CardTitle>
        <CardDescription>
          {mockWeatherData.location} • Updated <span className="font-semibold">10 min</span> ago
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        {isLoading ? (
          <div className="animate-pulse flex flex-col space-y-3">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-12 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        ) : (
          <>
            <div className="flex justify-between mb-4">
              <div className="text-center">
                <p className="text-gray-500 text-xs">Temperature</p>
                <div className="flex items-center justify-center">
                  <Thermometer size={16} className="text-red-500 mr-1" />
                  <p className="text-2xl font-bold">{mockWeatherData.temperature}°C</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-xs">Humidity</p>
                <div className="flex items-center justify-center">
                  <Tint size={16} className="text-blue-500 mr-1" />
                  <p className="text-2xl font-bold">{mockWeatherData.humidity}%</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-xs">Rainfall</p>
                <div className="flex items-center justify-center">
                  <Cloud size={16} className="text-blue-400 mr-1" />
                  <p className="text-2xl font-bold">{mockWeatherData.rainfall} mm</p>
                </div>
              </div>
            </div>
            <div className="border-t pt-3">
              <h4 className="text-sm font-medium mb-2">3-Day Forecast</h4>
              <div className="flex justify-between text-center">
                {mockWeatherData.forecast.map((day, index) => (
                  <div key={index} className={`${index < mockWeatherData.forecast.length - 1 ? 'border-r pr-2' : ''}`}>
                    <p className="text-xs text-gray-500">{day.day}</p>
                    <p className="text-sm font-semibold">{day.temp}°C</p>
                    <p className="text-xs">{day.condition}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="bg-gray-50 text-xs text-gray-500 justify-center">
        <span className="font-noto">Source: भारत मौसम विज्ञान विभाग (IMD)</span>
      </CardFooter>
    </Card>
  );

  const renderMandiWidget = () => (
    <Card className="w-full overflow-hidden">
      <CardHeader className="bg-primary/10 pb-2">
        <CardTitle className="flex justify-between items-center">
          <span>Mandi Prices</span>
          <span className="text-sm font-normal text-primary-dark">₹</span>
        </CardTitle>
        <CardDescription>
          {mockMandiData.mandiName} • Updated <span className="font-semibold">2 hours</span> ago
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        {isLoading ? (
          <div className="animate-pulse flex flex-col space-y-3">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        ) : (
          <div className="space-y-3">
            {mockMandiData.crops.map((crop, index) => (
              <div key={index} className="flex justify-between items-center py-1 border-b last:border-b-0">
                <span className="font-medium">{crop.name}</span>
                <div className="flex items-center">
                  <span className="font-bold mr-2">₹{crop.price}/q</span>
                  <div className={`flex items-center ${crop.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {crop.trend === 'up' ? (
                      <ArrowUp size={14} className="mr-1" />
                    ) : (
                      <ArrowDown size={14} className="mr-1" />
                    )}
                    <span className="text-xs">₹{crop.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="bg-gray-50 text-xs text-gray-500 justify-center">
        <span className="font-noto">Source: कृषि बाजार मूल्य निगरानी (Agrimarket)</span>
      </CardFooter>
    </Card>
  );

  return widgetType === 'weather' ? renderWeatherWidget() : renderMandiWidget();
};

export default LiveDataWidget;
