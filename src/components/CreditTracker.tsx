
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface CreditTrackerProps {
  totalCredits: number;
  usedCredits: number;
  pendingCredits: number;
}

const CreditTracker: React.FC<CreditTrackerProps> = ({
  totalCredits,
  usedCredits,
  pendingCredits
}) => {
  const availableCredits = totalCredits - usedCredits;
  const usedPercentage = (usedCredits / totalCredits) * 100;
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary/10 pb-2">
        <CardTitle className="text-lg">Credit Tracker</CardTitle>
        <CardDescription>Monitor and use your KisaanMitra credits</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Available Credits</span>
            <span className="text-lg font-bold text-primary">{availableCredits}</span>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-500">Used</span>
              <span className="text-xs text-gray-500">{usedCredits} of {totalCredits} credits</span>
            </div>
            <Progress value={usedPercentage} className="h-2" />
          </div>
          
          <div className="bg-muted p-3 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Pending Credits</span>
              <span className="text-sm font-semibold text-amber-600">+{pendingCredits}</span>
            </div>
            <p className="text-xs text-gray-600">Credits will be added to your account after harvest verification</p>
          </div>
          
          <div className="border-t pt-3">
            <h4 className="text-sm font-medium mb-2">Recent Transactions</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Seeds Purchase</span>
                <span className="text-red-500">-50</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Soil Testing</span>
                <span className="text-red-500">-25</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Sustainability Bonus</span>
                <span className="text-green-500">+100</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between space-x-2">
        <Button variant="outline" className="flex-1">
          Transfer
        </Button>
        <Button className="flex-1 bg-primary hover:bg-primary-dark">
          Redeem
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreditTracker;
