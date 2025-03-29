
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
import { Map, CreditCard, Cloud, Store, Calendar, FileText } from 'lucide-react';

const Index = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      testimony: "KisaanMitra ने मेरी फसल की पैदावार दोगुनी कर दी। मौसम की जानकारी समय पर मिलने से मैं अपनी फसल को बचा पाया।",
      rating: 5,
      crop: "Wheat"
    },
    {
      name: "Lakshmi Devi",
      location: "Karnataka",
      image: "https://via.placeholder.com/64x64?text=LD",
      testimony: "मैंने ऐप पर मिली जानकारी से अपनी मिट्टी की जांच करवाई और सही खाद का चयन किया। अब मेरी फसल पहले से कहीं बेहतर है।",
      rating: 4,
      crop: "Rice"
    },
    {
      name: "Abdul Karim",
      location: "Bihar",
      image: "https://via.placeholder.com/64x64?text=AK",
      testimony: "सरकारी योजनाओं की जानकारी मिलने से मुझे बीज और खाद पर सब्सिडी मिली। KisaanMitra हम किसानों के लिए वरदान है।",
      rating: 5,
      crop: "Maize"
    }
  ];

  // Mock government scheme data
  const governmentSchemes = [
    {
      name: "PM-KISAN",
      nameHindi: "प्रधानमंत्री किसान सम्मान निधि",
      description: "Income support scheme for farmers that provides ₹6,000 annually in three equal installments.",
      ministry: "Ministry of Agriculture & Farmers Welfare",
      eligibility: [
        "All landholding farmers' families",
        "Subject to exclusion criteria",
        "Valid KYC documents required"
      ],
      benefits: [
        "₹6,000 per year in three installments",
        "Direct transfer to bank account",
        "No loan repayment required"
      ],
      link: "https://pmkisan.gov.in/",
      logo: "https://via.placeholder.com/64x64?text=PM-KISAN"
    },
    {
      name: "PMFBY",
      nameHindi: "प्रधानमंत्री फसल बीमा योजना",
      description: "Crop insurance scheme that provides financial support to farmers in case of crop failure due to natural calamities.",
      ministry: "Ministry of Agriculture & Farmers Welfare",
      eligibility: [
        "All farmers growing notified crops",
        "Both loanee and non-loanee farmers",
        "Share-croppers and tenant farmers"
      ],
      benefits: [
        "Financial support for crop loss",
        "Low premium rates",
        "Coverage for multiple risks"
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
        <p className="mt-2 text-gray-600 dark:text-gray-400 font-noto">आपका साथी, आपकी फ़सल</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${isHighContrast ? 'high-contrast' : ''}`}>
      <Header toggleContrast={toggleContrast} isHighContrast={isHighContrast} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-light/20 to-secondary-light/20 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                <span className="text-primary">किसान</span> की उन्नति, <span className="text-primary-dark">देश</span> की प्रगति
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                KisaanMitra: AI-powered agriculture platform offering GIS farm planning, credit-based marketplace, real-time subsidies, weather alerts, and microloans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary-dark text-white text-lg font-noto">
                  अभी जुड़ें
                </Button>
                <Button variant="outline" className="text-primary hover:bg-primary hover:text-white text-lg font-noto">
                  मुफ्त सलाह लें
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
                    <p className="mb-2">30-sec explainer video</p>
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                      Play Video
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Our Features</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive tools designed to empower farmers with technology and information
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="Farm Planner" 
              titleHindi="खेत की योजना"
              description="GIS-based farm planning with soil health mapping, crop recommendations, and resource optimization."
              icon={Map}
              color="primary"
              buttonText="Plan Now"
              buttonHindi="योजना बनाएं"
              onClick={() => alert("Opening Farm Planner")}
            />
            
            <FeatureCard 
              title="Credit Marketplace" 
              titleHindi="क्रेडिट बाज़ार"
              description="Buy seeds, fertilizers, and equipment using earned credits. Earn more credits for sustainable farming."
              icon={CreditCard}
              color="secondary"
              buttonText="Shop Now"
              buttonHindi="खरीदें"
              onClick={() => alert("Opening Credit Marketplace")}
            />
            
            <FeatureCard 
              title="Weather Alerts" 
              titleHindi="मौसम अलर्ट"
              description="Get precise weather forecasts and timely alerts for your specific location to protect your crops."
              icon={Cloud}
              color="primary"
              buttonText="Set Alerts"
              buttonHindi="अलर्ट सेट करें"
              onClick={() => alert("Opening Weather Alerts")}
            />
            
            <FeatureCard 
              title="Mandi Connect" 
              titleHindi="मंडी कनेक्ट"
              description="Direct connection to local markets with live pricing, demand forecasts, and logistics support."
              icon={Store}
              color="secondary"
              buttonText="Connect"
              buttonHindi="जुड़ें"
              onClick={() => alert("Opening Mandi Connect")}
            />
            
            <FeatureCard 
              title="Scheme Matcher" 
              titleHindi="योजना खोजें"
              description="Find government schemes and subsidies you're eligible for based on your location, crop, and farm size."
              icon={FileText}
              color="primary"
              buttonText="Find Schemes"
              buttonHindi="योजनाएं खोजें"
              onClick={() => alert("Opening Scheme Matcher")}
            />
            
            <FeatureCard 
              title="Seasonal Calendar" 
              titleHindi="मौसमी कैलेंडर"
              description="Personalized calendar with crop-specific timelines for sowing, irrigation, fertilization, and harvesting."
              icon={Calendar}
              color="secondary"
              buttonText="View Calendar"
              buttonHindi="कैलेंडर देखें"
              onClick={() => alert("Opening Seasonal Calendar")}
            />
          </div>
        </div>
      </section>
      
      {/* Demo Tools Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Try Our Tools</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the power of KisaanMitra with these interactive demos
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
            <CreditTracker totalCredits={500} usedCredits={175} pendingCredits={100} />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Farmers' Stories</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from the farmers who have transformed their agricultural practices with KisaanMitra
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
                <p className="text-gray-600 dark:text-gray-400">Farmers</p>
              </div>
              <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-gray-600 dark:text-gray-400">States</p>
              </div>
              <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-primary">30%</p>
                <p className="text-gray-600 dark:text-gray-400">Yield Increase</p>
              </div>
              <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-primary">₹25Cr+</p>
                <p className="text-gray-600 dark:text-gray-400">Subsidies Claimed</p>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary-dark">
              Read More Stories
            </Button>
          </div>
        </div>
      </section>
      
      {/* Government Tie-Ups Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Government Tie-Ups</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Access to government schemes and subsidies to support your farming journey
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
              View All Schemes
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farming?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already benefiting from KisaanMitra's innovative tools and services
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-gray-100 text-lg">
              Download App
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg font-noto">
              अभी जुड़ें
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
