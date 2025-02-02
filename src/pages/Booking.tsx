import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, DollarSign, Home, MapPin, User } from "lucide-react";

const BookingPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Book Your Cleaning Service</h1>
          <p className="text-lg text-gray-600">Complete your booking in a few simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Tell us about yourself</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => setStep(2)} className="w-full">
                    Next Step
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" />
                    Property Details
                  </CardTitle>
                  <CardDescription>Tell us about your space</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Main St" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Los Angeles" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input id="zipCode" placeholder="90001" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Property Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(1)} className="w-full">
                    Previous
                  </Button>
                  <Button onClick={() => setStep(3)} className="w-full">
                    Next Step
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Service Details
                  </CardTitle>
                  <CardDescription>Choose your cleaning preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Service Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Cleaning</SelectItem>
                        <SelectItem value="deep">Deep Cleaning</SelectItem>
                        <SelectItem value="move">Move In/Out Cleaning</SelectItem>
                        <SelectItem value="airbnb">Airbnb Cleaning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Frequency</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="once">One Time</SelectItem>
                        <SelectItem value="weekly">Weekly (-15% off)</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly (-10% off)</SelectItem>
                        <SelectItem value="monthly">Monthly (-5% off)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Additional Services</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fridge" />
                        <Label htmlFor="fridge">Inside Fridge</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="oven" />
                        <Label htmlFor="oven">Inside Oven</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="windows" />
                        <Label htmlFor="windows">Interior Windows</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cabinets" />
                        <Label htmlFor="cabinets">Inside Cabinets</Label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Special Instructions</Label>
                    <Textarea id="notes" placeholder="Any special requests or instructions..." />
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(2)} className="w-full">
                    Previous
                  </Button>
                  <Button onClick={() => setStep(4)} className="w-full">
                    Next Step
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Schedule & Payment
                  </CardTitle>
                  <CardDescription>Choose your preferred date and time</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Preferred Date</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (4:00 PM - 8:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">I agree to the terms and conditions</Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(3)} className="w-full">
                    Previous
                  </Button>
                  <Button className="w-full">Complete Booking</Button>
                </CardFooter>
              </Card>
            )}
          </div>

          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base Price</span>
                    <span>$120.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Additional Services</span>
                    <span>$30.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Discount</span>
                    <span>-$15.00</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-primary">$135.00</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Free travel within service area</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>100% satisfaction guaranteed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;