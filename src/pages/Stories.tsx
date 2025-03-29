
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import { Bar } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Stories = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const testimonials = [
    {
      name: "रमेश पटेल",
      location: "गुजरात",
      image: "/placeholder.svg",
      quote: "किसानमित्र ने मुझे मौसम की जानकारी देकर मेरी फसल बचाई। मैंने 40% अधिक उपज प्राप्त की।",
      englishQuote: "KisaanMitra saved my crop by providing weather information. I harvested 40% more yield."
    },
    {
      name: "सुनीता देवी",
      location: "उत्तर प्रदेश",
      image: "/placeholder.svg",
      quote: "AI सलाहकार ने मुझे सही समय पर फसल बोने की सलाह दी। अब मेरी फसल बेहतर है।",
      englishQuote: "The AI advisor gave me the right advice on when to sow my crop. Now my crop is better."
    },
    {
      name: "मनोज कुमार",
      location: "पंजाब",
      image: "/placeholder.svg",
      quote: "क्रेडिट सिस्टम से मैं बिना नकद के बीज और खाद खरीद पाया। यह सिस्टम किसानों के लिए वरदान है।",
      englishQuote: "With the credit system, I was able to buy seeds and fertilizers without cash. This system is a boon for farmers."
    },
    {
      name: "लक्ष्मी बाई",
      location: "मध्य प्रदेश",
      image: "/placeholder.svg",
      quote: "GIS फार्म प्लानर से मैंने अपने खेत का सही उपयोग किया। अब मैं एक साथ कई फसलें उगा रही हूं।",
      englishQuote: "With the GIS Farm Planner, I made proper use of my field. Now I'm growing multiple crops simultaneously."
    }
  ];

  const impactData = [
    {
      name: 'Income Increase',
      value: 35,
      label: 'Average Income Increase',
    },
    {
      name: 'Yield Improvement',
      value: 42,
      label: 'Average Yield Improvement',
    },
    {
      name: 'Water Savings',
      value: 28,
      label: 'Water Savings',
    },
    {
      name: 'Input Cost Reduction',
      value: 30,
      label: 'Input Cost Reduction',
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
                किसानों की सफलता की कहानियां
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Real stories of transformation and success from farmers across India
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  location={testimonial.location}
                  image={testimonial.image}
                  quote={testimonial.quote}
                  englishQuote={testimonial.englishQuote}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                किसानमित्र का प्रभाव
              </h2>
              
              <Card className="border border-gray-200 dark:border-gray-700 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-center">
                    Impact Metrics (% Improvement)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <div className="w-full h-full">
                      {impactData.map((item, index) => (
                        <div key={index} className="mb-6">
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{item.label}</span>
                            <span className="text-sm font-bold">{item.value}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                            <div
                              className="bg-primary h-4 rounded-full"
                              style={{ width: `${item.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-4xl font-bold text-primary mb-2">10,000+</h3>
                  <p className="text-gray-600 dark:text-gray-400">Active Farmers</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                  <p className="text-gray-600 dark:text-gray-400">Villages Reached</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-4xl font-bold text-primary mb-2">₹2.5 Cr</h3>
                  <p className="text-gray-600 dark:text-gray-400">Microcredit Provided</p>
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

export default Stories;
