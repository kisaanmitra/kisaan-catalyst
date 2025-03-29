import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import { MapPin, CreditCard, Cloud, MessageSquare, Calculator } from 'lucide-react';

const Features = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [language, setLanguage] = useState<'english' | 'hindi' | 'kannada'>('english');

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const features = [
    {
      title: language === 'english' ? "GIS Farm Planner" : (language === 'hindi' ? "GIS फार्म प्लानर" : "GIS ಕೃಷಿ ಯೋಜಕ"),
      description: language === 'english' 
        ? "Precise land mapping and planning for your crops" 
        : (language === 'hindi' 
          ? "आपकी फसल के लिए सटीक भूमि मैपिंग और योजना बनाएं" 
          : "ನಿಮ್ಮ ಬೆಳೆಗಳಿಗೆ ನಿಖರವಾದ ಭೂಮಿ ಮ್ಯಾಪಿಂಗ್ ಮತ್ತು ಯೋಜನೆ"),
      icon: MapPin,
      color: "bg-green-50",
      buttonText: language === 'english' ? "Try Demo" : (language === 'hindi' ? "डेमो देखें" : "ಡೆಮೋ ನೋಡಿ")
    },
    {
      title: language === 'english' ? "Credit-Based Marketplace" : (language === 'hindi' ? "क्रेडिट आधारित बाज़ार" : "ಕ್ರೆಡಿಟ್ ಆಧಾರಿತ ಮಾರುಕಟ್ಟೆ"),
      description: language === 'english' 
        ? "Buy seeds, fertilizers, and equipment without cash" 
        : (language === 'hindi' 
          ? "बिना नकद के बीज, खाद और उपकरण खरीदें" 
          : "ನಗದು ಇಲ್ಲದೆ ಬೀಜಗಳು, ರಸಗೊಬ್ಬರಗಳು ಮತ್ತು ಉಪಕರಣಗಳನ್ನು ಖರೀದಿಸಿ"),
      icon: CreditCard,
      color: "bg-blue-50",
      buttonText: language === 'english' ? "Learn More" : (language === 'hindi' ? "अधिक जानें" : "ಹೆಚ್ಚು ತಿಳಿಯಿರಿ")
    },
    {
      title: language === 'english' ? "Weather & Mandi Updates" : (language === 'hindi' ? "मौसम और मंडी अपडेट" : "ಹವಾಮಾನ ಮತ್ತು ಮಂಡಿ ಅಪ್ಡೇಟ್‌ಗಳು"),
      description: language === 'english' 
        ? "Real-time weather and market price alerts" 
        : (language === 'hindi' 
          ? "वास्तविक समय मौसम और बाज़ार मूल्य अलर्ट" 
          : "ನೈಜ-ಸಮಯದ ಹವಾಮಾನ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಎಚ್ಚರಿಕೆಗಳು"),
      icon: Cloud,
      color: "bg-yellow-50",
      buttonText: language === 'english' ? "View Updates" : (language === 'hindi' ? "अपडेट देखें" : "ಅಪ್ಡೇಟ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ")
    },
    {
      title: language === 'english' ? "AI Advisor" : (language === 'hindi' ? "AI सलाहकार" : "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಸಲಹೆಗಾರ"),
      description: language === 'english' 
        ? "AI-powered chatbot for precise crop advice" 
        : (language === 'hindi' 
          ? "सटीक फसल सलाह के लिए AI आधारित चैटबॉट" 
          : "ನಿಖರವಾದ ಬೆಳೆ ಸಲಹೆಗಾಗಿ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಆಧಾರಿತ ಚಾಟ್‌ಬಾಟ್"),
      icon: MessageSquare,
      color: "bg-purple-50",
      buttonText: language === 'english' ? "Ask Questions" : (language === 'hindi' ? "प्रश्न पूछें" : "ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ")
    },
    {
      title: language === 'english' ? "Subsidy Finder" : (language === 'hindi' ? "सब्सिडी खोजक" : "ಸಬ್ಸಿಡಿ ಹುಡುಕಾಟ"),
      description: language === 'english' 
        ? "Discover government schemes for your state and crop" 
        : (language === 'hindi' 
          ? "आपके राज्य और फसल के लिए उपलब्ध सरकारी योजनाएँ" 
          : "ನಿಮ್ಮ ರಾಜ್ಯ ಮತ್ತು ಬೆಳೆಗೆ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ"),
      icon: Calculator,
      color: "bg-red-50",
      buttonText: language === 'english' ? "Find Schemes" : (language === 'hindi' ? "योजनाएँ देखें" : "ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ")
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isHighContrast ? 'high-contrast' : ''}`}>
      <Header 
        toggleContrast={toggleContrast} 
        isHighContrast={isHighContrast} 
        language={language}
        setLanguage={setLanguage}
      />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-primary/10 to-transparent py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'english' 
                  ? "KisaanMitra Features" 
                  : (language === 'hindi' 
                    ? "किसानमित्र की विशेषताएँ" 
                    : "ಕಿಸಾನ್‌ಮಿತ್ರ ವೈಶಿಷ್ಟ್ಯಗಳು")}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {language === 'english' 
                  ? "Technology that empowers farmers across India" 
                  : (language === 'hindi' 
                    ? "प्रौद्योगिकी जो भारत भर के किसानों को सशक्त बनाती है" 
                    : "ಭಾರತದಾದ್ಯಂತ ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವ ತಂತ್ರಜ್ಞಾನ")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color}
                  buttonText={feature.buttonText}
                  onClick={() => console.log(`Clicked on ${feature.title}`)}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                {language === 'english' 
                  ? "Designed for Farmers" 
                  : (language === 'hindi' 
                    ? "किसानों के लिए डिज़ाइन किया गया" 
                    : "ರೈತರಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ")}
              </h2>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        {language === 'english' 
                          ? "Simple and Intuitive" 
                          : (language === 'hindi' 
                            ? "सरल और सहज उपयोग" 
                            : "ಸರಳ ಮತ್ತು ಸಹಜ")}
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>
                            {language === 'english' 
                              ? "Available in multiple languages" 
                              : (language === 'hindi' 
                                ? "हिंदी और स्थानीय भाषाओं में उपलब्ध" 
                                : "ಬಹು ಭಾಷೆಗಳಲ್ಲಿ ಲಭ್ಯವಿದೆ")}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>
                            {language === 'english' 
                              ? "Simple interface with voice assistance" 
                              : (language === 'hindi' 
                                ? "ध्वनि सहायता के साथ सरल इंटरफेस" 
                                : "ಧ್ವನಿ ಸಹಾಯದೊಂದಿಗೆ ಸರಳ ಇಂಟರ್ಫೇಸ್")}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>
                            {language === 'english' 
                              ? "Optimized for areas with low internet connectivity" 
                              : (language === 'hindi' 
                                ? "कम इंटरनेट कनेक्टिविटी वाले क्षेत्रों के लिए अनुकूलित" 
                                : "ಕಡಿಮೆ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವಿರುವ ಪ್ರದೇಶಗಳಿಗೆ ಅನುಕೂಲಿಸಲಾಗಿದೆ")}
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        {language === 'english' 
                          ? "Works on Multiple Devices" 
                          : (language === 'hindi' 
                            ? "कई डिवाइस पर कार्य करें" 
                            : "ಬಹು ಸಾಧನಗಳಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ")}
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>
                            {language === 'english' 
                              ? "Use on mobile, tablet, and computer" 
                              : (language === 'hindi' 
                                ? "मोबाइल, टैबलेट, और कंप्यूटर पर उपयोग करें" 
                                : "ಮೊಬೈಲ್, ಟ್ಯಾಬ್ಲೆಟ್ ಮತ್ತು ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ ಬಳಸಿ")}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>
                            {language === 'english' 
                              ? "Basic features in offline mode" 
                              : (language === 'hindi' 
                                ? "ऑफलाइन मोड में बुनियादी सुविधाएँ" 
                                : "ಆಫ್‌ಲೈನ್ ಮೋಡ್‌ನಲ್ಲಿ ಮೂಲ ವೈಶಿಷ್ಟ್ಯಗಳು")}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>
                            {language === 'english' 
                              ? "SMS alerts for use with little or no internet" 
                              : (language === 'hindi' 
                                ? "कम या बिना इंटरनेट के उपयोग के लिए SMS अलर्ट" 
                                : "ಕಡಿಮೆ ಅಥವಾ ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದೆ ಬಳಸಲು SMS ಎಚ್ಚರಿಕೆಗಳು")}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
