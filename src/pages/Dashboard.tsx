
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { User } from '@supabase/supabase-js';
import CreditTracker from '@/components/CreditTracker';
import FarmerProfile from '@/components/FarmerProfile';
import LoanApplicationForm from '@/components/LoanApplicationForm';
import LoanApplicationList from '@/components/LoanApplicationList';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [farmerProfile, setFarmerProfile] = useState<any>(null);
  const [hasProfile, setHasProfile] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          navigate('/sign-in');
          return;
        }
        
        setUser(session.user);
        
        // Check if user has a farmer profile
        const { data: profileData, error: profileError } = await supabase
          .from('farmer_profiles')
          .select('*')
          .eq('user_id', session.user.id)
          .maybeSingle();
        
        if (profileError) {
          console.error('Error fetching farmer profile:', profileError);
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to fetch your profile. Please try again later.",
          });
        }
        
        if (profileData) {
          setFarmerProfile(profileData);
          setHasProfile(true);
        }
      } catch (error) {
        console.error('Session error:', error);
        toast({
          variant: "destructive",
          title: "Authentication Error",
          description: "Please sign in to access this page.",
        });
        navigate('/sign-in');
      } finally {
        setLoading(false);
      }
    };
    
    checkUser();
  }, [navigate]);
  
  const handleProfileCreated = (profile: any) => {
    setFarmerProfile(profile);
    setHasProfile(true);
    toast({
      title: "Profile Created",
      description: "Your farmer profile has been created successfully.",
    });
  };
  
  const handleProfileUpdated = (profile: any) => {
    setFarmerProfile(profile);
    toast({
      title: "Profile Updated",
      description: "Your farmer profile has been updated successfully.",
    });
  };

  const navigateToTab = (tabName: string) => {
    setActiveTab(tabName);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full"></div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow p-4 md:p-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">किसान डैशबोर्ड (Farmer Dashboard)</h1>
          
          {!hasProfile ? (
            <Card>
              <CardHeader>
                <CardTitle>प्रोफ़ाइल बनाएं (Create Your Profile)</CardTitle>
                <CardDescription>
                  कृपया अपनी किसान प्रोफ़ाइल बनाएं ताकि आप ऋण के लिए आवेदन कर सकें
                  (Please create your farmer profile to apply for loans)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FarmerProfile 
                  user={user} 
                  onProfileCreated={handleProfileCreated} 
                  mode="create" 
                />
              </CardContent>
            </Card>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid grid-cols-4 w-full max-w-md">
                <TabsTrigger value="overview">ओवरव्यू (Overview)</TabsTrigger>
                <TabsTrigger value="profile">प्रोफ़ाइल (Profile)</TabsTrigger>
                <TabsTrigger value="apply">ऋण आवेदन (Apply)</TabsTrigger>
                <TabsTrigger value="history">इतिहास (History)</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>क्रेडिट स्कोर (Credit Score)</CardTitle>
                      <CardDescription>
                        आपका वर्तमान क्रेडिट स्कोर और ऋण पात्रता
                        (Your current credit score and loan eligibility)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <CreditTracker creditScore={farmerProfile.credit_score} />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>प्रोफ़ाइल संक्षेप (Profile Summary)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="font-medium">नाम (Name):</dt>
                          <dd>{farmerProfile.name}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="font-medium">स्थान (Location):</dt>
                          <dd>{farmerProfile.location}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="font-medium">भूमि का आकार (Land Size):</dt>
                          <dd>{farmerProfile.land_size} हेक्टेयर</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="font-medium">फसल प्रकार (Crop Type):</dt>
                          <dd>{farmerProfile.crop_type}</dd>
                        </div>
                      </dl>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" onClick={() => navigateToTab("profile")}>
                        प्रोफ़ाइल संपादित करें (Edit Profile)
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>हाल के ऋण आवेदन (Recent Loan Applications)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LoanApplicationList userId={user?.id} limit={3} />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" onClick={() => navigateToTab("history")}>
                      सभी आवेदन देखें (View All Applications)
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>किसान प्रोफ़ाइल (Farmer Profile)</CardTitle>
                    <CardDescription>
                      अपनी प्रोफ़ाइल जानकारी अपडेट करें
                      (Update your profile information)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FarmerProfile 
                      user={user} 
                      onProfileUpdated={handleProfileUpdated} 
                      mode="edit" 
                      existingProfile={farmerProfile} 
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="apply">
                <Card>
                  <CardHeader>
                    <CardTitle>ऋण के लिए आवेदन करें (Apply for Loan)</CardTitle>
                    <CardDescription>
                      कृपया अपने ऋण आवेदन के विवरण भरें
                      (Please fill in the details for your loan application)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LoanApplicationForm 
                      userId={user?.id} 
                      creditScore={farmerProfile.credit_score} 
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle>ऋण आवेदन इतिहास (Loan Application History)</CardTitle>
                    <CardDescription>
                      आपके सभी ऋण आवेदनों की स्थिति देखें
                      (View the status of all your loan applications)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LoanApplicationList userId={user?.id} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
