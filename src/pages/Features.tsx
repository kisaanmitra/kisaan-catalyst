
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import { MapPin, CreditCard, Cloud, MessageSquare, Calculator } from 'lucide-react';

const Features = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const features = [
    {
      title: "GIS फार्म प्लानर",
      englishTitle: "GIS Farm Planner",
      description: "आपकी फसल के लिए सटीक भूमि मैपिंग और योजना बनाएं",
      englishDescription: "Precise land mapping and planning for your crops",
      icon: <MapPin className="h-6 w-6" />,
      color: "bg-green-50",
      buttonText: "Try Demo",
      buttonHindi: "डेमो देखें"
    },
    {
      title: "क्रेडिट आधारित बाज़ार",
      englishTitle: "Credit-Based Marketplace",
      description: "बिना नकद के बीज, खाद और उपकरण खरीदें",
      englishDescription: "Buy seeds, fertilizers, and equipment without cash",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-blue-50",
      buttonText: "Learn More",
      buttonHindi: "अधिक जानें"
    },
    {
      title: "मौसम और मंडी अपडेट",
      englishTitle: "Weather & Mandi Updates",
      description: "वास्तविक समय मौसम और बाज़ार मूल्य अलर्ट",
      englishDescription: "Real-time weather and market price alerts",
      icon: <Cloud className="h-6 w-6" />,
      color: "bg-yellow-50",
      buttonText: "View Updates",
      buttonHindi: "अपडेट देखें"
    },
    {
      title: "AI सलाहकार",
      englishTitle: "AI Advisor",
      description: "सटीक फसल सलाह के लिए AI आधारित चैटबॉट",
      englishDescription: "AI-powered chatbot for precise crop advice",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "bg-purple-50",
      buttonText: "Ask Questions",
      buttonHindi: "प्रश्न पूछें"
    },
    {
      title: "सब्सिडी खोजक",
      englishTitle: "Subsidy Finder",
      description: "आपके राज्य और फसल के लिए उपलब्ध सरकारी योजनाएँ",
      englishDescription: "Discover government schemes for your state and crop",
      icon: <Calculator className="h-6 w-6" />,
      color: "bg-red-50",
      buttonText: "Find Schemes",
      buttonHindi: "योजनाएँ देखें"
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isHighContrast ? 'high-contrast' : ''}`}>
      <Header toggleContrast={toggleContrast} isHighContrast={isHighContrast} />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-primary/10 to-transparent py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                किसानमित्र की विशेषताएँ
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Technology that empowers farmers across India
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  englishTitle={feature.englishTitle}
                  description={feature.description}
                  englishDescription={feature.englishDescription}
                  icon={feature.icon}
                  color={feature.color}
                  buttonText={feature.buttonText}
                  buttonHindi={feature.buttonHindi}
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
                किसानों के लिए डिज़ाइन किया गया
              </h2>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">सरल और सहज उपयोग</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>हिंदी और स्थानीय भाषाओं में उपलब्ध</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>ध्वनि सहायता के साथ सरल इंटरफेस</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>कम इंटरनेट कनेक्टिविटी वाले क्षेत्रों के लिए अनुकूलित</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">कई डिवाइस पर कार्य करें</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>मोबाइल, टैबलेट, और कंप्यूटर पर उपयोग करें</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>ऑफलाइन मोड में बुनियादी सुविधाएँ</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>कम या बिना इंटरनेट के उपयोग के लिए SMS अलर्ट</span>
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
