
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LiveDataWidget from '@/components/LiveDataWidget';
import FeatureCard from '@/components/FeatureCard';
import ChatbotWidget from '@/components/ChatbotWidget';
import TestimonialCard from '@/components/TestimonialCard';
import MapPlanner from '@/components/MapPlanner';
import CreditTracker from '@/components/CreditTracker';
import GovernmentScheme from '@/components/GovernmentScheme';
import { Button } from "@/components/ui/button";
import { Map, CreditCard, Cloud, Store, FileText, Calendar } from 'lucide-react';

const Index = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<'english' | 'hindi' | 'kannada'>('english');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.body.classList.toggle('high-contrast');
  };

  // Mock testimonial data
  const testimonials = [
    {
      name: "Ramesh Singh",
      location: "Uttar Pradesh",
      image: "https://via.placeholder.com/64x64?text=RS",
      testimony: language === 'english' 
        ? "KisaanMitra doubled my crop yield. The timely weather information helped me save my crops."
        : (language === 'hindi' 
          ? "KisaanMitra ने मेरी फसल की पैदावार दोगुनी कर दी। मौसम की जानकारी समय पर मिलने से मैं अपनी फसल को बचा पाया।"
          : "ಕಿಸಾನ್ಮಿತ್ರ ನನ್ನ ಬೆಳೆ ಇಳುವರಿಯನ್ನು ದ್ವಿಗುಣಗೊಳಿಸಿತು. ಸಮಯೋಚಿತ ಹವಾಮಾನ ಮಾಹಿತಿಯು ನನ್ನ ಬೆಳೆಗಳನ್ನು ರಕ್ಷಿಸಲು ಸಹಾಯ ಮಾಡಿತು."),
      rating: 5,
      crop: "Wheat"
    },
    {
      name: "Lakshmi Devi",
      location: "Karnataka",
      image: "https://via.placeholder.com/64x64?text=LD",
      testimony: language === 'english'
        ? "I used the app to get my soil tested and choose the right fertilizers. My crops are now much better than before."
        : (language === 'hindi' 
          ? "मैंने ऐप पर मिली जानकारी से अपनी मिट्टी की जांच करवाई और सही खाद का चयन किया। अब मेरी फसल पहले से कहीं बेहतर है।"
          : "ನನ್ನ ಮಣ್ಣನ್ನು ಪರೀಕ್ಷಿಸಲು ಮತ್ತು ಸರಿಯಾದ ರಸಗೊಬ್ಬರಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ನಾನು ಅಪ್ಲಿಕೇಶನ್ ಅನ್ನು ಬಳಸಿದೆ. ನನ್ನ ಬೆಳೆಗಳು ಈಗ ಮೊದಲಿಗಿಂತ ಉತ್ತಮವಾಗಿವೆ."),
      rating: 4,
      crop: "Rice"
    },
    {
      name: "Abdul Karim",
      location: "Bihar",
      image: "https://via.placeholder.com/64x64?text=AK",
      testimony: language === 'english'
        ? "Learning about government schemes helped me get subsidies for seeds and fertilizers. KisaanMitra is a blessing for us farmers."
        : (language === 'hindi' 
          ? "सरकारी योजनाओं की जानकारी मिलने से मुझे बीज और खाद पर सब्सिडी मिली। KisaanMitra हम किसानों के लिए वरदान है।"
          : "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ತಿಳಿದುಕೊಳ್ಳುವುದರಿಂದ ನನಗೆ ಬೀಜಗಳು ಮತ್ತು ರಸಗೊಬ್ಬರಗಳಿಗೆ ಸಬ್ಸಿಡಿಗಳನ್ನು ಪಡೆಯಲು ಸಹಾಯವಾಯಿತು. ಕಿಸಾನ್ಮಿತ್ರ ನಮ್ಮ ರೈತರಿಗೆ ವರದಾನವಾಗಿದೆ."),
      rating: 5,
      crop: "Maize"
    }
  ];

  // Mock government scheme data
  const governmentSchemes = [
    {
      name: "PM-KISAN",
      nameHindi: language === 'hindi' ? "प्रधानमंत्री किसान सम्मान निधि" : "ಪ್ರಧಾನಮಂತ್ರಿ ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ",
      description: language === 'english'
        ? "Income support scheme for farmers that provides ₹6,000 annually in three equal installments."
        : (language === 'hindi' 
          ? "किसानों के लिए आय सहायता योजना जो तीन समान किश्तों में सालाना ₹6,000 प्रदान करती है।"
          : "ರೈತರಿಗೆ ಮೂರು ಸಮಾನ ಕಂತುಗಳಲ್ಲಿ ವಾರ್ಷಿಕ ₹6,000 ಒದಗಿಸುವ ಆದಾಯ ಬೆಂಬಲ ಯೋಜನೆ."),
      ministry: language === 'english' 
        ? "Ministry of Agriculture & Farmers Welfare" 
        : (language === 'hindi' 
          ? "कृषि और किसान कल्याण मंत्रालय" 
          : "ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ"),
      eligibility: [
        language === 'english' ? "All landholding farmers' families" : (language === 'hindi' ? "सभी भूमिधारक किसान परिवार" : "ಎಲ್ಲಾ ಭೂಮಿ ಹೊಂದಿರುವ ರೈತರ ಕುಟುಂಬಗಳು"),
        language === 'english' ? "Subject to exclusion criteria" : (language === 'hindi' ? "बहिष्करण मानदंडों के अधीन" : "ಹೊರಗಿಡುವಿಕೆ ಮಾನದಂಡಗಳಿಗೆ ಒಳಪಟ್ಟಿದೆ"),
        language === 'english' ? "Valid KYC documents required" : (language === 'hindi' ? "वैध केवाईसी दस्तावेज़ आवश्यक" : "ಮಾನ್ಯ KYC ದಾಖಲೆಗಳು ಅಗತ್ಯವಿದೆ")
      ],
      benefits: [
        language === 'english' ? "₹6,000 per year in three installments" : (language === 'hindi' ? "₹6,000 प्रति वर्ष तीन किस्तों में" : "ವರ್ಷಕ್ಕೆ ₹6,000 ಮೂರು ಕಂತುಗಳಲ್ಲಿ"),
        language === 'english' ? "Direct transfer to bank account" : (language === 'hindi' ? "बैंक खाते में सीधा हस्तांतरण" : "ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೇರ ವರ್ಗಾವಣೆ"),
        language === 'english' ? "No loan repayment required" : (language === 'hindi' ? "ऋण चुकाने की आवश्यकता नहीं" : "ಸಾಲ ಮರುಪಾವತಿ ಅಗತ್ಯವಿಲ್ಲ")
      ],
      link: "https://pmkisan.gov.in/",
      logo: "https://via.placeholder.com/64x64?text=PM-KISAN"
    },
    {
      name: "PMFBY",
      nameHindi: language === 'hindi' ? "प्रधानमंत्री फसल बीमा योजना" : "ಪ್ರಧಾನಮಂತ್ರಿ ಫಸಲ್ ಬೀಮಾ ಯೋಜನೆ",
      description: language === 'english'
        ? "Crop insurance scheme that provides financial support to farmers in case of crop failure due to natural calamities."
        : (language === 'hindi' 
          ? "फसल बीमा योजना जो प्राकृतिक आपदाओं के कारण फसल की विफलता के मामले में किसानों को वित्तीय सहायता प्रदान करती है।"
          : "ನೈಸರ್ಗಿಕ ವಿಪತ್ತುಗಳಿಂದ ಬೆಳೆ ವಿಫಲತೆಯ ಸಂದರ್ಭದಲ್ಲಿ ರೈತರಿಗೆ ಆರ್ಥಿಕ ಬೆಂಬಲವನ್ನು ಒದಗಿಸುವ ಬೆಳೆ ವಿಮಾ ಯೋಜನೆ."),
      ministry: language === 'english' 
        ? "Ministry of Agriculture & Farmers Welfare" 
        : (language === 'hindi' 
          ? "कृषि और किसान कल्याण मंत्रालय" 
          : "ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ"),
      eligibility: [
        language === 'english' ? "All farmers growing notified crops" : (language === 'hindi' ? "सभी किसान जो अधिसूचित फसलें उगाते हैं" : "ಅಧಿಸೂಚಿತ ಬೆಳೆಗಳನ್ನು ಬೆಳೆಯುವ ಎಲ್ಲಾ ರೈತರು"),
        language === 'english' ? "Both loanee and non-loanee farmers" : (language === 'hindi' ? "ऋणी और गैर-ऋणी किसान दोनों" : "ಸಾಲಗಾರ ಮತ್ತು ಸಾಲವಲ್ಲದ ರೈತರು"),
        language === 'english' ? "Share-croppers and tenant farmers" : (language === 'hindi' ? "बटाईदार और किरायेदार किसान" : "ಬೆಳೆ ಹಂಚಿಕೊಳ್ಳುವವರು ಮತ್ತು ಗೇಣಿ ರೈತರು")
      ],
      benefits: [
        language === 'english' ? "Financial support for crop loss" : (language === 'hindi' ? "फसल के नुकसान के लिए वित्तीय सहायता" : "ಬೆಳೆ ನಷ್ಟಕ್ಕೆ ಆರ್ಥಿಕ ಬೆಂಬಲ"),
        language === 'english' ? "Low premium rates" : (language === 'hindi' ? "कम प्रीमियम दरें" : "ಕಡಿಮೆ ಪ್ರೀಮಿಯಂ ದರಗಳು"),
        language === 'english' ? "Coverage for multiple risks" : (language === 'hindi' ? "कई जोखिमों के लिए कवरेज" : "ಅನೇಕ ಅಪಾಯಗಳಿಗೆ ರಕ್ಷಣೆ")
      ],
      link: "https://pmfby.gov.in/",
      logo: "https://via.placeholder.com/64x64?text=PMFBY"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <h1 className="mt-8 text-2xl font-bold text-primary">KisaanMitra</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {language === 'english' 
            ? 'Your companion, your crop'
            : (language === 'hindi' 
              ? 'आपका साथी, आपकी फ़सल'
              : 'ನಿಮ್ಮ ಸಂಗಾತಿ, ನಿಮ್ಮ ಬೆಳೆ')}
        </p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${isHighContrast ? 'high-contrast' : ''}`}>
      <Header 
        toggleContrast={toggleContrast} 
        isHighContrast={isHighContrast} 
        language={language}
        setLanguage={setLanguage}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-light/20 to-secondary-light/20 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {language === 'english' 
                  ? (<><span className="text-primary">Farmer</span> Progress, <span className="text-primary-dark">Nation</span>'s Success</>)
                  : (language === 'hindi' 
                    ? (<><span className="text-primary">किसान</span> की उन्नति, <span className="text-primary-dark">देश</span> की प्रगति</>)
                    : (<><span className="text-primary">ರೈತರ</span> ಪ್ರಗತಿ, <span className="text-primary-dark">ದೇಶದ</span> ಯಶಸ್ಸು</>))}
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {language === 'english' 
                  ? "KisaanMitra: AI-powered agriculture platform offering GIS farm planning, credit-based marketplace, real-time subsidies, weather alerts, and microloans."
                  : (language === 'hindi' 
                    ? "किसानमित्र: AI-संचालित कृषि प्लेटफॉर्म जो GIS आधारित खेत योजना, क्रेडिट आधारित बाज़ार, रियल-टाइम सब्सिडी, मौसम अलर्ट और माइक्रोलोन प्रदान करता है।"
                    : "ಕಿಸಾನ್‌ಮಿತ್ರ: ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಆಧಾರಿತ ಕೃಷಿ ವೇದಿಕೆ, GIS ಕೃಷಿ ಯೋಜನೆ, ಕ್ರೆಡಿಟ್ ಆಧಾರಿತ ಮಾರುಕಟ್ಟೆ, ನೈಜ-ಸಮಯದ ಸಬ್ಸಿಡಿಗಳು, ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಸಣ್ಣ ಸಾಲಗಳನ್ನು ನೀಡುತ್ತದೆ.")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary-dark text-white text-lg">
                  {language === 'english' 
                    ? "Join Now"
                    : (language === 'hindi' 
                      ? "अभी जुड़ें"
                      : "ಈಗ ಸೇರಿ")}
                </Button>
                <Button variant="outline" className="text-primary hover:bg-primary hover:text-white text-lg">
                  {language === 'english' 
                    ? "Get Free Advice"
                    : (language === 'hindi' 
                      ? "मुफ्त सलाह लें"
                      : "ಉಚಿತ ಸಲಹೆ ಪಡೆಯಿರಿ")}
                </Button>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <img src="https://via.placeholder.com/80x40?text=PM-KISAN" alt="PM-KISAN" className="h-10 object-contain" />
                <img src="https://via.placeholder.com/80x40?text=NABARD" alt="NABARD" className="h-10 object-contain" />
                <img src="https://via.placeholder.com/80x40?text=ICAR" alt="ICAR" className="h-10 object-contain" />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="bg-black aspect-video w-full">
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                  <div className="text-center">
                    <p className="mb-2">
                      {language === 'english' 
                        ? "30-sec explainer video"
                        : (language === 'hindi' 
                          ? "30 सेकंड की व्याख्यात्मक वीडियो"
                          : "30 ಸೆಕೆಂಡುಗಳ ವಿವರಣಾತ್ಮಕ ವೀಡಿಯೊ")}
                    </p>
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                      {language === 'english' 
                        ? "Play Video"
                        : (language === 'hindi' 
                          ? "वीडियो चलाएं"
                          : "ವೀಡಿಯೊ ಪ್ಲೇ ಮಾಡಿ")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Live Data Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <LiveDataWidget widgetType="weather" />
            <LiveDataWidget widgetType="mandi" />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {language === 'english' 
                ? "Our Features"
                : (language === 'hindi' 
                  ? "हमारी विशेषताएँ"
                  : "ನಮ್ಮ ವೈಶಿಷ್ಟ್ಯಗಳು")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {language === 'english' 
                ? "Comprehensive tools designed to empower farmers with technology and information"
                : (language === 'hindi' 
                  ? "किसानों को प्रौद्योगिकी और जानकारी से सशक्त बनाने के लिए डिज़ाइन किए गए व्यापक उपकरण"
                  : "ರೈತರನ್ನು ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಮಾಹಿತಿಯೊಂದಿಗೆ ಸಬಲೀಕರಣಗೊಳಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಮಗ್ರ ಉಪಕರಣಗಳು")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title={language === 'english' ? "Farm Planner" : (language === 'hindi' ? "खेत की योजना" : "ಕೃಷಿ ಯೋಜಕ")}
              description={language === 'english' 
                ? "GIS-based farm planning with soil health mapping, crop recommendations, and resource optimization."
                : (language === 'hindi' 
                  ? "GIS आधारित खेत योजना, मिट्टी के स्वास्थ्य मैपिंग, फसल अनुशंसाओं, और संसाधन अनुकूलन के साथ।"
                  : "GIS ಆಧಾರಿತ ಕೃಷಿ ಯೋಜನೆ, ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಮ್ಯಾಪಿಂಗ್, ಬೆಳೆ ಶಿಫಾರಸುಗಳು ಮತ್ತು ಸಂಪನ್ಮೂಲ ಅನುಕೂಲೀಕರಣದೊಂದಿಗೆ.")}
              icon={Map}
              color="bg-primary"
              buttonText={language === 'english' ? "Plan Now" : (language === 'hindi' ? "योजना बनाएं" : "ಈಗ ಯೋಜಿಸಿ")}
              onClick={() => alert("Opening Farm Planner")}
            />
            
            <FeatureCard 
              title={language === 'english' ? "Credit Marketplace" : (language === 'hindi' ? "क्रेडिट बाज़ार" : "ಕ್ರೆಡಿಟ್ ಮಾರುಕಟ್ಟೆ")}
              description={language === 'english' 
                ? "Buy seeds, fertilizers, and equipment using earned credits. Earn more credits for sustainable farming."
                : (language === 'hindi' 
                  ? "अर्जित क्रेडिट का उपयोग करके बीज, उर्वरक और उपकरण खरीदें। टिकाऊ खेती के लिए अधिक क्रेडिट अर्जित करें।"
                  : "ಗಳಿಸಿದ ಕ್ರೆಡಿಟ್‌ಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಬೀಜಗಳು, ರಸಗೊಬ್ಬರಗಳು ಮತ್ತು ಉಪಕರಣಗಳನ್ನು ಖರೀದಿಸಿ. ಸುಸ್ಥಿರ ಕೃಷಿಗೆ ಹೆಚ್ಚಿನ ಕ್ರೆಡಿಟ್‌ಗಳನ್ನು ಗಳಿಸಿ.")}
              icon={CreditCard}
              color="bg-secondary"
              buttonText={language === 'english' ? "Shop Now" : (language === 'hindi' ? "खरीदें" : "ಈಗ ಶಾಪ್ ಮಾಡಿ")}
              onClick={() => alert("Opening Credit Marketplace")}
            />
            
            <FeatureCard 
              title={language === 'english' ? "Weather Alerts" : (language === 'hindi' ? "मौसम अलर्ट" : "ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳು")}
              description={language === 'english' 
                ? "Get precise weather forecasts and timely alerts for your specific location to protect your crops."
                : (language === 'hindi' 
                  ? "अपनी फसलों की रक्षा के लिए अपने विशिष्ट स्थान के लिए सटीक मौसम पूर्वानुमान और समय पर अलर्ट प्राप्त करें।"
                  : "ನಿಮ್ಮ ಬೆಳೆಗಳನ್ನು ರಕ್ಷಿಸಲು ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಸ್ಥಳಕ್ಕೆ ನಿಖರವಾದ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಗಳು ಮತ್ತು ಸಮಯೋಚಿತ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಪಡೆಯಿರಿ.")}
              icon={Cloud}
              color="bg-primary"
              buttonText={language === 'english' ? "Set Alerts" : (language === 'hindi' ? "अलर्ट सेट करें" : "ಎಚ್ಚರಿಕೆಗಳನ್ನು ಹೊಂದಿಸಿ")}
              onClick={() => alert("Opening Weather Alerts")}
            />
            
            <FeatureCard 
              title={language === 'english' ? "Mandi Connect" : (language === 'hindi' ? "मंडी कनेक्ट" : "ಮಂಡಿ ಕನೆಕ್ಟ್")}
              description={language === 'english' 
                ? "Direct connection to local markets with live pricing, demand forecasts, and logistics support."
                : (language === 'hindi' 
                  ? "लाइव मूल्य निर्धारण, मांग पूर्वानुमान और लॉजिस्टिक्स सहायता के साथ स्थानीय बाजारों से सीधा संपर्क।"
                  : "ಜೀವಂತ ಬೆಲೆ ನಿಗದಿ, ಬೇಡಿಕೆ ಮುನ್ಸೂಚನೆಗಳು ಮತ್ತು ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಬೆಂಬಲದೊಂದಿಗೆ ಸ್ಥಳೀಯ ಮಾರುಕಟ್ಟೆಗಳಿಗೆ ನೇರ ಸಂಪರ್ಕ.")}
              icon={Store}
              color="bg-secondary"
              buttonText={language === 'english' ? "Connect" : (language === 'hindi' ? "जुड़ें" : "ಸಂಪರ್ಕಪಡಿಸಿ")}
              onClick={() => alert("Opening Mandi Connect")}
            />
            
            <FeatureCard 
              title={language === 'english' ? "Scheme Matcher" : (language === 'hindi' ? "योजना खोजें" : "ಯೋಜನೆ ಹೊಂದಾಣಿಕೆ")}
              description={language === 'english' 
                ? "Find government schemes and subsidies you're eligible for based on your location, crop, and farm size."
                : (language === 'hindi' 
                  ? "अपने स्थान, फसल और खेत के आकार के आधार पर आप जिन सरकारी योजनाओं और सब्सिडी के लिए पात्र हैं, उन्हें खोजें।"
                  : "ನಿಮ್ಮ ಸ್ಥಳ, ಬೆಳೆ ಮತ್ತು ಕೃಷಿ ಗಾತ್ರದ ಆಧಾರದ ಮೇಲೆ ನೀವು ಅರ್ಹರಾಗಿರುವ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಸಬ್ಸಿಡಿಗಳನ್ನು ಹುಡುಕಿ.")}
              icon={FileText}
              color="bg-primary"
              buttonText={language === 'english' ? "Find Schemes" : (language === 'hindi' ? "योजनाएं खोजें" : "ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ")}
              onClick={() => alert("Opening Scheme Matcher")}
            />
            
            <FeatureCard 
              title={language === 'english' ? "Seasonal Calendar" : (language === 'hindi' ? "मौसमी कैलेंडर" : "ಋತುಮಾನದ ಕ್ಯಾಲೆಂಡರ್")}
              description={language === 'english' 
                ? "Personalized calendar with crop-specific timelines for sowing, irrigation, fertilization, and harvesting."
                : (language === 'hindi' 
                  ? "बुवाई, सिंचाई, उर्वरक और कटाई के लिए फसल-विशिष्ट समयरेखाओं के साथ वैयक्तिकृत कैलेंडर।"
                  : "ಬಿತ್ತನೆ, ನೀರಾವರಿ, ರಸಗೊಬ್ಬರ ಮತ್ತು ಕೊಯ್ಲುಗಾಗಿ ಬೆಳೆ-ನಿರ್ದಿಷ್ಟ ಕಾಲರೇಖೆಗಳೊಂದಿಗೆ ವೈಯಕ್ತಿಕ ಕ್ಯಾಲೆಂಡರ್.")}
              icon={Calendar}
              color="bg-secondary"
              buttonText={language === 'english' ? "View Calendar" : (language === 'hindi' ? "कैलेंडर देखें" : "ಕ್ಯಾಲೆಂಡರ್ ವೀಕ್ಷಿಸಿ")}
              onClick={() => alert("Opening Seasonal Calendar")}
            />
          </div>
        </div>
      </section>
      
      {/* Demo Tools Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {language === 'english' 
                ? "Try Our Tools"
                : (language === 'hindi' 
                  ? "हमारे टूल्स आज़माएँ"
                  : "ನಮ್ಮ ಉಪಕರಣಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿ")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {language === 'english' 
                ? "Experience the power of KisaanMitra with these interactive demos"
                : (language === 'hindi' 
                  ? "इन इंटरैक्टिव डेमो के साथ KisaanMitra की शक्ति का अनुभव करें"
                  : "ಈ ಸಂವಾದಾತ್ಮಕ ಡೆಮೊಗಳೊಂದಿಗೆ ಕಿಸಾನ್‌ಮಿತ್ರದ ಶಕ್ತಿಯನ್ನು ಅನುಭವಿಸಿ")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <MapPlanner />
            </div>
            <div>
              <ChatbotWidget />
            </div>
          </div>
          
          <div className="mt-8">
            <CreditTracker 
              totalCredits={500} 
              usedCredits={175} 
              pendingCredits={100}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {language === 'english' 
                ? "Farmers' Stories"
                : (language === 'hindi' 
                  ? "किसानों की कहानियां"
                  : "ರೈತರ ಕಥೆಗಳು")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {language === 'english' 
                ? "Hear from the farmers who have transformed their agricultural practices with KisaanMitra"
                : (language === 'hindi' 
                  ? "उन किसानों से सुनें जिन्होंने KisaanMitra के साथ अपनी कृषि प्रथाओं को बदला है"
                  : "ಕಿಸಾನ್‌ಮಿತ್ರದೊಂದಿಗೆ ತಮ್ಮ ಕೃಷಿ ಪದ್ಧತಿಗಳನ್ನು ಪರಿವರ್ತಿಸಿದ ರೈತರಿಂದ ಕೇಳಿ")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                image={testimonial.image}
                testimony={testimonial.testimony}
                rating={testimonial.rating}
                crop={testimonial.crop}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-primary">10,000+</p>
                <p className="text-gray-600 dark:text-gray-400">
                  {language === 'english' ? "Farmers" : (language === 'hindi' ? "किसान" : "ರೈತರು")}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-gray-600 dark:text-gray-400">
                  {language === 'english' ? "States" : (language === 'hindi' ? "राज्य" : "ರಾಜ್ಯಗಳು")}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-primary">30%</p>
                <p className="text-gray-600 dark:text-gray-400">
                  {language === 'english' ? "Yield Increase" : (language === 'hindi' ? "उपज में वृद्धि" : "ಇಳುವರಿ ಹೆಚ್ಚಳ")}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-primary">₹25Cr+</p>
                <p className="text-gray-600 dark:text-gray-400">
                  {language === 'english' ? "Subsidies Claimed" : (language === 'hindi' ? "प्राप्त सब्सिडी" : "ಪಡೆದ ಸಬ್ಸಿಡಿಗಳು")}
                </p>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary-dark">
              {language === 'english' ? "Read More Stories" : (language === 'hindi' ? "और कहानियां पढ़ें" : "ಇನ್ನಷ್ಟು ಕಥೆಗಳನ್ನು ಓದಿ")}
            </Button>
          </div>
        </div>
      </section>
      
      {/* Government Tie-Ups Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {language === 'english' ? "Government Tie-Ups" : (language === 'hindi' ? "सरकारी सहभागिता" : "ಸರ್ಕಾರಿ ಸಹಭಾಗಿತ್ವಗಳು")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {language === 'english' 
                ? "Access to government schemes and subsidies to support your farming journey"
                : (language === 'hindi' 
                  ? "आपकी खेती के सफर में सहायता के लिए सरकारी योजनाओं और सब्सिडी तक पहुंच"
                  : "ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಯಾಣವನ್ನು ಬೆಂಬಲಿಸಲು ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಸಬ್ಸಿಡಿಗಳಿಗೆ ಪ್ರವೇಶ")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {governmentSchemes.map((scheme, index) => (
              <GovernmentScheme 
                key={index}
                name={scheme.name}
                nameHindi={scheme.nameHindi}
                description={scheme.description}
                ministry={scheme.ministry}
                eligibility={scheme.eligibility}
                benefits={scheme.benefits}
                link={scheme.link}
                logo={scheme.logo}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-primary hover:bg-primary-dark">
              {language === 'english' ? "View All Schemes" : (language === 'hindi' ? "सभी योजनाएँ देखें" : "ಎಲ್ಲಾ ಯೋಜನೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ")}
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'english' 
              ? "Ready to Transform Your Farming?"
              : (language === 'hindi' 
                ? "अपनी खेती को बदलने के लिए तैयार हैं?"
                : "ನಿಮ್ಮ ಕೃಷಿಯನ್ನು ಪರಿವರ್ತಿಸಲು ಸಿದ್ಧವಾಗಿದ್ದೀರಾ?")}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === 'english' 
              ? "Join thousands of farmers who are already benefiting from KisaanMitra's innovative tools and services"
              : (language === 'hindi' 
                ? "हजारों किसानों के साथ जुड़ें जो पहले से ही KisaanMitra के नवीन उपकरणों और सेवाओं से लाभ उठा रहे हैं"
                : "ಆಗಲೇ ಕಿಸಾನ್‌ಮಿತ್ರದ ನವೀನ ಉಪಕರಣಗಳು ಮತ್ತು ಸೇವೆಗಳಿಂದ ಲಾಭ ಪಡೆಯುತ್ತಿರುವ ಸಾವಿರಾರು ರೈತರೊಂದಿಗೆ ಸೇರಿ")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-gray-100 text-lg">
              {language === 'english' ? "Download App" : (language === 'hindi' ? "ऐप डाउनलोड करें" : "ಅಪ್ಲಿಕೇಶನ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ")}
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg">
              {language === 'english' ? "Join Now" : (language === 'hindi' ? "अभी जुड़ें" : "ಈಗ ಸೇರಿ")}
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
