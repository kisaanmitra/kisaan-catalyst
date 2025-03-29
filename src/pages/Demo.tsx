
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ChatbotWidget from '@/components/ChatbotWidget';
import MapPlanner from '@/components/MapPlanner';
import CreditTracker from '@/components/CreditTracker';
import LiveDataWidget from '@/components/LiveDataWidget';

const Demo = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  return (
    <div className={`min-h-screen flex flex-col ${isHighContrast ? 'high-contrast' : ''}`}>
      <Header toggleContrast={toggleContrast} isHighContrast={isHighContrast} />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              किसानमित्र डेमो
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our tools in action - experience how KisaanMitra can transform farming
            </p>
          </div>
          
          <Tabs defaultValue="ai-advisor" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="ai-advisor">AI सलाहकार</TabsTrigger>
              <TabsTrigger value="map-planner">फार्म प्लानर</TabsTrigger>
              <TabsTrigger value="credit-tracker">क्रेडिट ट्रैकर</TabsTrigger>
              <TabsTrigger value="live-data">मौसम और मंडी</TabsTrigger>
            </TabsList>
            
            <Card className="border border-gray-200 dark:border-gray-700 shadow-md">
              <CardContent className="p-0">
                <TabsContent value="ai-advisor" className="p-4 md:p-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">AI किसान सलाहकार</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      आपके सवालों के उत्तर देने और सटीक कृषि सलाह देने के लिए हमारा AI सलाहकार
                    </p>
                  </div>
                  <ChatbotWidget />
                </TabsContent>
                
                <TabsContent value="map-planner" className="p-4 md:p-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">GIS फार्म प्लानर</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      अपने खेत का नक्शा बनाएं और विभिन्न फसल योजनाओं का विश्लेषण करें
                    </p>
                  </div>
                  <MapPlanner />
                </TabsContent>
                
                <TabsContent value="credit-tracker" className="p-4 md:p-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">क्रेडिट ट्रैकर</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      अपने किसानमित्र क्रेडिट ट्रैक करें और मार्केटप्लेस में उपयोग करें
                    </p>
                  </div>
                  <CreditTracker 
                    totalCredits={500}
                    usedCredits={175}
                    pendingCredits={50}
                  />
                </TabsContent>
                
                <TabsContent value="live-data" className="p-4 md:p-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">मौसम और मंडी डेटा</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      वास्तविक समय मौसम और मंडी मूल्य अपडेट प्राप्त करें
                    </p>
                  </div>
                  <LiveDataWidget widgetType="weather" />
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
          
          <div className="mt-16 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ready to experience the full platform?
            </p>
            <a 
              href="/sign-up" 
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
            >
              <span className="hindi-text">अभी पंजीकरण करें</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Demo;
