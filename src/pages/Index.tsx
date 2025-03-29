
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Info, Check, Shield, CreditCard, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatbotWidget from '@/components/ChatbotWidget';
import TestimonialCard from '@/components/TestimonialCard';
import LiveDataWidget from '@/components/LiveDataWidget';

const Index = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [language, setLanguage] = useState<'english' | 'hindi' | 'kannada'>('english');
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };
  
  // Translations for features
  const features = {
    title: {
      english: "Modern farming for a better future",
      hindi: "बेहतर भविष्य के लिए आधुनिक खेती",
      kannada: "ಉತ್ತಮ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಆಧುನಿಕ ಕೃಷಿ"
    },
    subtitle: {
      english: "KisaanMitra empowers farmers with technology and financial solutions",
      hindi: "किसानमित्र किसानों को प्रौद्योगिकी और वित्तीय समाधानों के साथ सशक्त बनाता है",
      kannada: "ಕಿಸಾನ್‌ಮಿತ್ರ ರೈತರಿಗೆ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಹಣಕಾಸು ಪರಿಹಾರಗಳೊಂದಿಗೆ ಸಾಮರ್ಥ್ಯ ನೀಡುತ್ತದೆ"
    },
    getStarted: {
      english: "Get Started",
      hindi: "शुरू करें",
      kannada: "ಪ್ರಾರಂಭಿಸಿ"
    },
    learnMore: {
      english: "Learn More",
      hindi: "अधिक जानें",
      kannada: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ"
    },
    // And other translations...
  };
  
  // FAQ items
  const faqItems = [
    {
      question: {
        english: "How can KisaanMitra help improve my farm's productivity?",
        hindi: "किसानमित्र मेरे खेत की उत्पादकता में कैसे सुधार कर सकता है?",
        kannada: "ನನ್ನ ಕೃಷಿಯ ಉತ್ಪಾದಕತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಕಿಸಾನ್‌ಮಿತ್ರ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?"
      },
      answer: {
        english: "KisaanMitra provides personalized crop recommendations, weather alerts, market price information, and connects you with agricultural experts for advice on optimizing your farming practices.",
        hindi: "किसानमित्र आपको वैयक्तिकृत फसल सिफारिशें, मौसम अलर्ट, बाजार मूल्य की जानकारी प्रदान करता है और आपकी खेती के तरीकों को अनुकूलित करने के लिए सलाह के लिए आपको कृषि विशेषज्ञों से जोड़ता है।",
        kannada: "ಕಿಸಾನ್‌ಮಿತ್ರ ವೈಯಕ್ತಿಕ ಬೆಳೆ ಶಿಫಾರಸುಗಳು, ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳು, ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸುತ್ತದೆ ಮತ್ತು ನಿಮ್ಮ ಕೃಷಿ ಅಭ್ಯಾಸಗಳನ್ನು ಅನುಕೂಲಗೊಳಿಸಲು ಸಲಹೆಗಾಗಿ ನಿಮ್ಮನ್ನು ಕೃಷಿ ತಜ್ಞರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ."
      }
    },
    {
      question: {
        english: "Do I need a smartphone to use KisaanMitra services?",
        hindi: "क्या मुझे किसानमित्र सेवाओं का उपयोग करने के लिए स्मार्टफोन की आवश्यकता है?",
        kannada: "ಕಿಸಾನ್‌ಮಿತ್ರ ಸೇವೆಗಳನ್ನು ಬಳಸಲು ನನಗೆ ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ಬೇಕೇ?"
      },
      answer: {
        english: "While a smartphone provides the full experience, we also offer SMS-based services for basic features like weather alerts and market prices for farmers with basic phones.",
        hindi: "हालांकि स्मार्टफोन पूर्ण अनुभव प्रदान करता है, हम बुनियादी फोन वाले किसानों के लिए मौसम अलर्ट और बाजार मूल्य जैसी बुनियादी सुविधाओं के लिए SMS-आधारित सेवाएं भी प्रदान करते हैं।",
        kannada: "ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ಪೂರ್ಣ ಅನುಭವವನ್ನು ನೀಡುತ್ತದೆ, ಆದರೆ ನಾವು ಮೂಲ ಫೋನ್‌ಗಳನ್ನು ಹೊಂದಿರುವ ರೈತರಿಗೆ ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳಂತಹ ಮೂಲ ವೈಶಿಷ್ಟ್ಯಗಳಿಗಾಗಿ SMS-ಆಧಾರಿತ ಸೇವೆಗಳನ್ನು ಸಹ ನೀಡುತ್ತೇವೆ."
      }
    },
    {
      question: {
        english: "How does the credit system work?",
        hindi: "क्रेडिट सिस्टम कैसे काम करता है?",
        kannada: "ಕ್ರೆಡಿಟ್ ವ್ಯವಸ್ಥೆ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ?"
      },
      answer: {
        english: "Farmers earn credits through sustainable farming practices, crop yields, and timely loan repayments. These credits can be used to purchase farming inputs, equipment, or redeemed for cash equivalents.",
        hindi: "किसान टिकाऊ खेती पद्धतियों, फसल उपज और समय पर ऋण चुकौती के माध्यम से क्रेडिट अर्जित करते हैं। इन क्रेडिट का उपयोग खेती के इनपुट, उपकरण खरीदने या नकद समकक्षों के लिए भुनाने के लिए किया जा सकता है।",
        kannada: "ರೈತರು ಸುಸ್ಥಿರ ಕೃಷಿ ಪದ್ಧತಿಗಳು, ಬೆಳೆ ಇಳುವರಿ ಮತ್ತು ಸಾಲ ಮರುಪಾವತಿಗಳ ಮೂಲಕ ಕ್ರೆಡಿಟ್‌ಗಳನ್ನು ಗಳಿಸುತ್ತಾರೆ. ಈ ಕ್ರೆಡಿಟ್‌ಗಳನ್ನು ಕೃಷಿ ಉತ್ಪನ್ನಗಳನ್ನು ಖರೀದಿಸಲು, ಉಪಕರಣಗಳು, ಅಥವಾ ನಗದು ಸಮಾನಾಂತರಗಳಿಗಾಗಿ ರಿಡೀಮ್ ಮಾಡಬಹುದು."
      }
    },
    // Add more FAQ items as needed
  ];
  
  // Benefits section
  const benefits = [
    {
      icon: <Info className="h-6 w-6 text-green-600" />,
      title: {
        english: "Smart Farming Decisions",
        hindi: "स्मार्ट खेती निर्णय",
        kannada: "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ನಿರ್ಧಾರಗಳು"
      },
      description: {
        english: "Get personalized crop recommendations based on your soil, weather, and market conditions",
        hindi: "अपनी मिट्टी, मौसम और बाजार की स्थिति के आधार पर वैयक्तिकृत फसल सिफारिशें प्राप्त करें",
        kannada: "ನಿಮ್ಮ ಮಣ್ಣು, ಹವಾಮಾನ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಪರಿಸ್ಥಿತಿಗಳ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕ ಬೆಳೆ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ"
      }
    },
    {
      icon: <Check className="h-6 w-6 text-green-600" />,
      title: {
        english: "Easy Market Access",
        hindi: "आसान बाजार पहुंच",
        kannada: "ಸುಲಭ ಮಾರುಕಟ್ಟೆ ಪ್ರವೇಶ"
      },
      description: {
        english: "Connect directly with buyers and get better prices for your produce",
        hindi: "खरीदारों से सीधे जुड़ें और अपनी उपज के लिए बेहतर कीमतें प्राप्त करें",
        kannada: "ಖರೀದಿದಾರರೊಂದಿಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕ ಸಾಧಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಉತ್ಪನ್ನಗಳಿಗೆ ಉತ್ತಮ ಬೆಲೆಗಳನ್ನು ಪಡೆಯಿರಿ"
      }
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: {
        english: "Risk Management",
        hindi: "जोखिम प्रबंधन",
        kannada: "ಅಪಾಯ ನಿರ್ವಹಣೆ"
      },
      description: {
        english: "Protect your farm with weather alerts and crop insurance options",
        hindi: "मौसम अलर्ट और फसल बीमा विकल्पों के साथ अपने खेत की रक्षा करें",
        kannada: "ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಬೆಳೆ ವಿಮಾ ಆಯ್ಕೆಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಕೃಷಿಯನ್ನು ರಕ್ಷಿಸಿ"
      }
    },
    {
      icon: <CreditCard className="h-6 w-6 text-green-600" />,
      title: {
        english: "Financial Inclusion",
        hindi: "वित्तीय समावेशन",
        kannada: "ಹಣಕಾಸು ಸೇರ್ಪಡೆ"
      },
      description: {
        english: "Access loans, credits, and banking services tailored for farmers",
        hindi: "किसानों के लिए अनुकूलित ऋण, क्रेडिट और बैंकिंग सेवाओं का उपयोग करें",
        kannada: "ರೈತರಿಗಾಗಿ ವಿಶೇಷವಾಗಿ ರೂಪಿಸಲಾದ ಸಾಲಗಳು, ಕ್ರೆಡಿಟ್‌ಗಳು ಮತ್ತು ಬ್ಯಾಂಕಿಂಗ್ ಸೇವೆಗಳನ್ನು ಪಡೆಯಿರಿ"
      }
    }
  ];
  
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Uttar Pradesh",
      image: "/farmer1.jpg",
      quote: {
        english: "KisaanMitra helped me increase my crop yield by 30% through better planning and access to quality inputs.",
        hindi: "किसानमित्र ने बेहतर योजना और गुणवत्तापूर्ण इनपुट तक पहुंच के माध्यम से मेरी फसल उपज को 30% तक बढ़ाने में मदद की।",
        kannada: "ಉತ್ತಮ ಯೋಜನೆ ಮತ್ತು ಗುಣಮಟ್ಟದ ಉತ್ಪನ್ನಗಳ ಮೂಲಕ ನನ್ನ ಬೆಳೆ ಇಳುವರಿಯನ್ನು 30% ಹೆಚ್ಚಿಸಲು ಕಿಸಾನ್‌ಮಿತ್ರ ಸಹಾಯ ಮಾಡಿತು."
      }
    },
    {
      name: "Sunita Devi",
      location: "Bihar",
      image: "/farmer2.jpg",
      quote: {
        english: "I was able to get a crop loan within a week through KisaanMitra's platform. The process was simple and transparent.",
        hindi: "मैं किसानमित्र के प्लेटफॉर्म के माध्यम से एक सप्ताह के भीतर फसल ऋण प्राप्त करने में सक्षम थी। प्रक्रिया सरल और पारदर्शी थी।",
        kannada: "ಕಿಸಾನ್‌ಮಿತ್ರ ವೇದಿಕೆಯ ಮೂಲಕ ನಾನು ಒಂದು ವಾರದೊಳಗೆ ಬೆಳೆ ಸಾಲವನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಾಯಿತು. ಪ್ರಕ್ರಿಯೆಯು ಸರಳ ಮತ್ತು ಪಾರದರ್ಶಕವಾಗಿತ್ತು."
      }
    },
    {
      name: "Prakash Reddy",
      location: "Telangana",
      image: "/farmer3.jpg",
      quote: {
        english: "The market price information helped me sell my produce at the right time, increasing my profits significantly.",
        hindi: "बाजार मूल्य की जानकारी ने मुझे सही समय पर अपनी उपज बेचने में मदद की, जिससे मेरा लाभ काफी बढ़ गया।",
        kannada: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಮಾಹಿತಿಯು ನನಗೆ ಸರಿಯಾದ ಸಮಯದಲ್ಲಿ ನನ್ನ ಉತ್ಪನ್ನಗಳನ್ನು ಮಾರಾಟ ಮಾಡಲು ಸಹಾಯ ಮಾಡಿತು, ನನ್ನ ಲಾಭವನ್ನು ಗಣನೀಯವಾಗಿ ಹೆಚ್ಚಿಸಿತು."
      }
    }
  ];

  const whatWeOffer = [
    {
      id: "farming-tech",
      title: {
        english: "Precision Farming Technology",
        hindi: "सटीक खेती प्रौद्योगिकी",
        kannada: "ನಿಖರವಾದ ಕೃಷಿ ತಂತ್ರಜ್ಞಾನ"
      },
      content: {
        english: "Our GIS-powered farm planner helps you map your land, track crop growth, and plan irrigation efficiently. Get soil analysis, crop recommendations, and yield forecasts tailored to your farm's specific conditions.",
        hindi: "हमारा GIS-संचालित फार्म प्लानर आपको अपनी भूमि का नक्शा बनाने, फसल की वृद्धि को ट्रैक करने और सिंचाई की कुशल योजना बनाने में मदद करता है। अपने खेत की विशिष्ट स्थितियों के अनुरूप मिट्टी विश्लेषण, फसल सिफारिशें और उपज पूर्वानुमान प्राप्त करें।",
        kannada: "ನಮ್ಮ GIS-ಸಾಮರ್ಥ್ಯದ ಕೃಷಿ ಯೋಜಕವು ನಿಮ್ಮ ಭೂಮಿಯನ್ನು ನಕ್ಷೆ ಮಾಡಲು, ಬೆಳೆ ಬೆಳವಣಿಗೆಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಮತ್ತು ನೀರಾವರಿಯನ್ನು ದಕ್ಷತೆಯಿಂದ ಯೋಜಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ನಿಮ್ಮ ಕೃಷಿಯ ನಿರ್ದಿಷ್ಟ ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ, ಬೆಳೆ ಶಿಫಾರಸುಗಳು ಮತ್ತು ಇಳುವರಿ ಮುನ್ಸೂಚನೆಗಳನ್ನು ಪಡೆಯಿರಿ."
      }
    },
    {
      id: "credit-system",
      title: {
        english: "Credit-Based System",
        hindi: "क्रेडिट-आधारित प्रणाली",
        kannada: "ಕ್ರೆಡಿಟ್ ಆಧಾರಿತ ವ್ಯವಸ್ಥೆ"
      },
      content: {
        english: "Access seeds, fertilizers, and equipment without immediate cash payment. Our credit system allows farmers to pay after harvest, reducing financial pressure during planting seasons. Build your credit score for larger loans and better terms.",
        hindi: "तत्काल नकद भुगतान के बिना बीज, उर्वरक और उपकरण तक पहुंच प्राप्त करें। हमारी क्रेडिट प्रणाली किसानों को फसल के बाद भुगतान करने की अनुमति देती है, जिससे रोपण मौसम के दौरान वित्तीय दबाव कम होता है। बड़े ऋण और बेहतर शर्तों के लिए अपना क्रेडिट स्कोर बनाएं।",
        kannada: "ತಕ್ಷಣದ ನಗದು ಪಾವತಿ ಇಲ್ಲದೆ ಬೀಜಗಳು, ರಸಗೊಬ್ಬರಗಳು ಮತ್ತು ಉಪಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ. ನಮ್ಮ ಕ್ರೆಡಿಟ್ ವ್ಯವಸ್ಥೆಯು ಕೃಷಿಕರು ಸುಗ್ಗಿಯ ನಂತರ ಪಾವತಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ, ನಾಟಿ ಋತುಗಳಲ್ಲಿ ಆರ್ಥಿಕ ಒತ್ತಡವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ. ದೊಡ್ಡ ಸಾಲಗಳು ಮತ್ತು ಉತ್ತಮ ನಿಯಮಗಳಿಗಾಗಿ ನಿಮ್ಮ ಕ್ರೆಡಿಟ್ ಸ್ಕೋರ್ ಅನ್ನು ನಿರ್ಮಿಸಿ."
      }
    },
    {
      id: "market-insights",
      title: {
        english: "Market Insights & Connections",
        hindi: "बाजार अंतर्दृष्टि और कनेक्शन",
        kannada: "ಮಾರುಕಟ್ಟೆ ಒಳನೋಟಗಳು ಮತ್ತು ಸಂಪರ್ಕಗಳು"
      },
      content: {
        english: "Get real-time mandi prices, weather forecasts, and market demand predictions. Connect directly with wholesale buyers and food processing companies to get better prices for your produce. Reduce dependency on middlemen and increase profits.",
        hindi: "रीयल-टाइम मंडी कीमतें, मौसम का पूर्वानुमान और बाजार मांग की भविष्यवाणियां प्राप्त करें। अपनी उपज के लिए बेहतर कीमतें पाने के लिए सीधे थोक खरीदारों और खाद्य प्रसंस्करण कंपनियों से जुड़ें। बिचौलियों पर निर्भरता कम करें और लाभ बढ़ाएं।",
        kannada: "ನೈಜ-ಸಮಯದ ಮಂಡಿ ಬೆಲೆಗಳು, ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಗಳು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೇಡಿಕೆ ಮುನ್ಸೂಚನೆಗಳನ್ನು ಪಡೆಯಿರಿ. ನಿಮ್ಮ ಉತ್ಪನ್ನಗಳಿಗೆ ಉತ್ತಮ ಬೆಲೆಗಳನ್ನು ಪಡೆಯಲು ನೇರವಾಗಿ ಹೋಲ್‌ಸೇಲ್ ಖರೀದಿದಾರರು ಮತ್ತು ಆಹಾರ ಸಂಸ್ಕರಣಾ ಕಂಪನಿಗಳೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ. ಮಧ್ಯವರ್ತಿಗಳ ಮೇಲಿನ ಅವಲಂಬನೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ ಮತ್ತು ಲಾಭವನ್ನು ಹೆಚ್ಚಿಸಿ."
      }
    }
  ];

  const states = ["Uttar Pradesh", "Maharashtra", "Karnataka", "Punjab", "Gujarat"];
  const crops = ["Wheat", "Rice", "Cotton", "Sugarcane", "Vegetables"];

  return (
    <div className={`min-h-screen flex flex-col ${isHighContrast ? 'high-contrast' : ''}`}>
      <Header 
        toggleContrast={toggleContrast} 
        isHighContrast={isHighContrast} 
        language={language}
        setLanguage={setLanguage}
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-green-50 to-white dark:from-green-900/30 dark:to-gray-900 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {features.title[language]}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  {features.subtitle[language]}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link to="/sign-up">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary-dark">
                      {features.getStarted[language]} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/features">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      {features.learnMore[language]}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:col-span-5">
                <img 
                  src="/hero-image.jpg" 
                  alt="Farmer using KisaanMitra app" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'english' ? 'Benefits for Farmers' : (language === 'hindi' ? 'किसानों के लिए लाभ' : 'ರೈತರಿಗೆ ಪ್ರಯೋಜನಗಳು')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {language === 'english' 
                  ? 'KisaanMitra provides tools and services designed specifically for Indian farmers' 
                  : (language === 'hindi' 
                    ? 'किसानमित्र विशेष रूप से भारतीय किसानों के लिए डिज़ाइन किए गए उपकरण और सेवाएँ प्रदान करता है' 
                    : 'ಕಿಸಾನ್‌ಮಿತ್ರ ಭಾರತೀಯ ರೈತರಿಗಾಗಿ ವಿಶೇಷವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಾಧನಗಳು ಮತ್ತು ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {benefit.title[language]}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {benefit.description[language]}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* What We Offer Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'english' ? 'What We Offer' : (language === 'hindi' ? 'हम क्या प्रदान करते हैं' : 'ನಾವು ಏನು ನೀಡುತ್ತೇವೆ')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {language === 'english' 
                  ? 'Comprehensive solutions to address the challenges faced by farmers' 
                  : (language === 'hindi' 
                    ? 'किसानों द्वारा सामना की जाने वाली चुनौतियों का समाधान करने के लिए व्यापक समाधान' 
                    : 'ರೈತರು ಎದುರಿಸುವ ಸವಾಲುಗಳನ್ನು ಪರಿಹರಿಸಲು ಸಮಗ್ರ ಪರಿಹಾರಗಳು')}
              </p>
            </div>
            
            <div className="space-y-6">
              {whatWeOffer.map((item) => (
                <div key={item.id} className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleSection(item.id)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                      {item.title[language]}
                    </h3>
                    {openSection === item.id ? 
                      <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-400" /> : 
                      <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    }
                  </button>
                  
                  {openSection === item.id && (
                    <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.content[language]}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'english' ? 'Success Stories' : (language === 'hindi' ? 'सफलता की कहानियां' : 'ಯಶಸ್ಸಿನ ಕಥೆಗಳು')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {language === 'english' 
                  ? 'Hear from farmers who have transformed their farming with KisaanMitra' 
                  : (language === 'hindi' 
                    ? 'ऐसे किसानों से सुनें, जिन्होंने किसानमित्र के साथ अपनी खेती को बदल दिया है' 
                    : 'ಕಿಸಾನ್‌ಮಿತ್ರದೊಂದಿಗೆ ತಮ್ಮ ಕೃಷಿಯನ್ನು ಪರಿವರ್ತಿಸಿದ ರೈತರಿಂದ ಕೇಳಿ')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  name={testimonial.name}
                  location={testimonial.location}
                  quote={testimonial.quote[language]}
                  image={testimonial.image}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/stories">
                <Button variant="outline" size="lg">
                  {language === 'english' ? 'View More Stories' : (language === 'hindi' ? 'और कहानियां देखें' : 'ಇನ್ನಷ್ಟು ಕಥೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Live Data Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'english' ? 'Live Market Data' : (language === 'hindi' ? 'लाइव मार्केट डेटा' : 'ಲೈವ್ ಮಾರುಕಟ್ಟೆ ಡೇಟಾ')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {language === 'english' 
                  ? 'Stay updated with current market prices and weather conditions' 
                  : (language === 'hindi' 
                    ? 'वर्तमान बाजार मूल्य और मौसम की स्थिति से अपडेट रहें' 
                    : 'ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು ಮತ್ತು ಹವಾಮಾನ ಪರಿಸ್ಥಿತಿಗಳೊಂದಿಗೆ ಅಪ್‌ಡೇಟ್ ಆಗಿರಿ')}
              </p>
            </div>
            
            <Tabs defaultValue="market-prices" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="market-prices">
                  {language === 'english' ? 'Market Prices' : (language === 'hindi' ? 'मार्केट भाव' : 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು')}
                </TabsTrigger>
                <TabsTrigger value="weather">
                  {language === 'english' ? 'Weather Updates' : (language === 'hindi' ? 'मौसम अपडेट' : 'ಹವಾಮಾನ ಅಪ್ಡೇಟ್‌ಗಳು')}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="market-prices" className="mt-6">
                <LiveDataWidget 
                  type="market" 
                  data={{
                    states: states,
                    crops: crops
                  }}
                  language={language}
                />
              </TabsContent>
              
              <TabsContent value="weather" className="mt-6">
                <LiveDataWidget 
                  type="weather" 
                  data={{
                    states: states
                  }}
                  language={language}
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'english' ? 'Frequently Asked Questions' : (language === 'hindi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {language === 'english' 
                  ? 'Find answers to common questions about KisaanMitra' 
                  : (language === 'hindi' 
                    ? 'किसानमित्र के बारे में सामान्य प्रश्नों के उत्तर खोजें' 
                    : 'ಕಿಸಾನ್‌ಮಿತ್ರ ಬಗ್ಗೆ ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಗಳನ್ನು ಹುಡುಕಿ')}
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleSection(`faq-${index}`)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                      {item.question[language]}
                    </h3>
                    {openSection === `faq-${index}` ? 
                      <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-400" /> : 
                      <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    }
                  </button>
                  
                  {openSection === `faq-${index}` && (
                    <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.answer[language]}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/10 dark:bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'english' 
                ? 'Start Growing Better Today' 
                : (language === 'hindi' 
                  ? 'आज से बेहतर खेती शुरू करें' 
                  : 'ಇಂದೇ ಉತ್ತಮವಾಗಿ ಬೆಳೆಯಲು ಪ್ರಾರಂಭಿಸಿ')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              {language === 'english' 
                ? 'Join thousands of farmers across India who are using KisaanMitra to improve their farming and livelihoods' 
                : (language === 'hindi' 
                  ? 'भारत भर के हजारों किसानों से जुड़ें जो अपनी खेती और आजीविका को बेहतर बनाने के लिए किसानमित्र का उपयोग कर रहे हैं' 
                  : 'ಭಾರತದಾದ್ಯಂತ ಸಾವಿರಾರು ರೈತರೊಂದಿಗೆ ಸೇರಿ ಅವರು ತಮ್ಮ ಕೃಷಿ ಮತ್ತು ಜೀವನೋಪಾಯವನ್ನು ಸುಧಾರಿಸಲು ಕಿಸಾನ್‌ಮಿತ್ರವನ್ನು ಬಳಸುತ್ತಿದ್ದಾರೆ')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sign-up">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary-dark">
                  {language === 'english' ? 'Sign Up Now' : (language === 'hindi' ? 'अभी साइन अप करें' : 'ಈಗ ಸೈನ್ ಅಪ್ ಮಾಡಿ')}
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {language === 'english' ? 'Try Demo' : (language === 'hindi' ? 'डेमो आज़माएं' : 'ಡೆಮೋ ಪ್ರಯತ್ನಿಸಿ')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Chat Bot */}
        <ChatbotWidget 
          language={language} 
          translations={{
            title: {
              english: "KisaanMitra Assistant",
              hindi: "किसानमित्र सहायक",
              kannada: "ಕಿಸಾನ್‌ಮಿತ್ರ ಸಹಾಯಕ"
            },
            placeholder: {
              english: "Ask a question...",
              hindi: "एक प्रश्न पूछें...",
              kannada: "ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ..."
            },
            button: {
              english: "Send",
              hindi: "भेजें",
              kannada: "ಕಳುಹಿಸಿ"
            },
            greeting: {
              english: "Hi! I'm your KisaanMitra assistant. How can I help you today?",
              hindi: "नमस्ते! मैं आपका किसानमित्र सहायक हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?",
              kannada: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಕಿಸಾನ್‌ಮಿತ್ರ ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?"
            }
          }}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
