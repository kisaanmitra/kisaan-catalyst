
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

type Profile = {
  id?: string;
  name?: string;
  profile_image?: string;
  address?: string;
  location?: string;
  phone?: string;
  land_size?: number;
  crop_type?: string;
  credit_score?: number;
};

const UserSettings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<Profile>({});
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      
      if (!user?.id) return;
      
      const { data, error } = await supabase
        .from('farmer_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();
        
      if (error) {
        throw error;
      }
      
      if (data) {
        setProfile(data);
        if (data.profile_image) {
          setAvatarPreview(data.profile_image);
        }
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast({
        title: "Error",
        description: "Failed to load profile data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      setLoading(true);
      
      if (!user?.id) return;
      
      // Convert credit_score to a number if it exists
      const credit_score = profile.credit_score ? Number(profile.credit_score) : undefined;
      const land_size = profile.land_size ? Number(profile.land_size) : undefined;
      
      // Update profile
      const { error } = await supabase
        .from('farmer_profiles')
        .update({
          ...profile,
          credit_score,
          land_size,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', user.id);
        
      if (error) {
        throw error;
      }
      
      // Upload avatar if changed
      if (avatar) {
        const fileExt = avatar.name.split('.').pop();
        const filePath = `${user.id}/profile_image.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(filePath, avatar, { upsert: true });
          
        if (uploadError) {
          throw uploadError;
        }
        
        // Get public URL
        const { data } = supabase.storage
          .from('avatars')
          .getPublicUrl(filePath);
          
        // Update profile with avatar URL
        await supabase
          .from('farmer_profiles')
          .update({ profile_image: data.publicUrl })
          .eq('user_id', user.id);
          
        setProfile({
          ...profile,
          profile_image: data.publicUrl,
        });
      }
      
      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setAvatar(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setProfile({
      ...profile,
      [name]: value
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>
          Manage your account settings and profile information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-4 mt-4">
            <div className="flex items-center space-x-4 mb-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={avatarPreview || undefined} />
                <AvatarFallback>{profile.name?.charAt(0) || user?.email?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <Label htmlFor="avatar" className="cursor-pointer text-sm font-medium text-primary hover:underline">
                  Change Profile Picture
                </Label>
                <Input 
                  id="avatar" 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleAvatarChange}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={profile.name || ''}
                  onChange={handleChangeProfile}
                  placeholder="Your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={profile.phone || ''}
                  onChange={handleChangeProfile}
                  placeholder="Your phone number"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={profile.location || ''}
                  onChange={handleChangeProfile}
                  placeholder="Your location"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={profile.address || ''}
                  onChange={handleChangeProfile}
                  placeholder="Your address"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="preferences" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="land_size">Farm Size (acres)</Label>
                <Input
                  id="land_size"
                  name="land_size"
                  value={profile.land_size || ''}
                  onChange={handleChangeProfile}
                  placeholder="Farm size in acres"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="crop_type">Farm Type</Label>
                <Select 
                  value={profile.crop_type || ''} 
                  onValueChange={(value) => handleSelectChange('crop_type', value)}
                >
                  <SelectTrigger id="crop_type">
                    <SelectValue placeholder="Select farm type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="crop">Crop Farming</SelectItem>
                    <SelectItem value="livestock">Livestock</SelectItem>
                    <SelectItem value="mixed">Mixed Farming</SelectItem>
                    <SelectItem value="organic">Organic Farming</SelectItem>
                    <SelectItem value="plantation">Plantation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="credit_score">Credit Score</Label>
                <Input
                  id="credit_score"
                  name="credit_score"
                  type="number"
                  value={profile.credit_score || ''}
                  onChange={handleChangeProfile}
                  placeholder="Your credit score"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={updateProfile} disabled={loading}>
          {loading ? 'Saving...' : 'Save Changes'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserSettings;
