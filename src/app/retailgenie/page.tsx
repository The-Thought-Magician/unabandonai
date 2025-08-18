"use client";

import { useState } from "react";
import Navigation from "@/components/sections/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  BarChart, 
  Package, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Truck,
  Eye,
  Brain,
  TrendingDown,
  Zap,
  Star,
  ArrowRight
} from "lucide-react";

interface FormData {
  companyName: string;
  industry: string;
  email: string;
  phone: string;
  useCase: string;
}

export default function RetailGenieAccess() {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    industry: "",
    email: "",
    phone: "",
    useCase: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Analytics",
      description: "Deep insights into customer behavior, preferences, and journey optimization"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory Optimization",
      description: "AI-powered stock management and demand-supply balancing"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Demand Forecasting",
      description: "Predictive analytics for accurate demand planning and trend analysis"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Price Intelligence",
      description: "Dynamic pricing strategies based on market conditions and competitor analysis"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Personalization Engine",
      description: "Tailored experiences and recommendations for every customer"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Supply Chain Analytics",
      description: "End-to-end visibility and optimization of your supply chain operations"
    }
  ];

  const benefits = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Real-time Insights",
      description: "Instant access to actionable data"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Data-driven Decisions",
      description: "Make informed choices with AI analytics"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increased Sales",
      description: "Boost revenue through optimization"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Reduced Costs",
      description: "Eliminate inefficiencies and waste"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Enhanced Experience",
      description: "Delight customers at every touchpoint"
    }
  ];

  return (
    <div className="min-h-screen bg-surface-token">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero text-inverse-token">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-inverse-token text-sm font-medium mb-8 bg-white/10">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Retail Intelligence Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-inverse-token mb-6 leading-tight">
              RetailGenie
              <span className="gradient-brand bg-clip-text text-transparent">
                {" "}AI Platform
              </span>
            </h1>
            <p className="text-xl text-inverse-token/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your retail operations with our comprehensive AI platform. 
              Get real-time insights, optimize inventory, and deliver personalized customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" style={{ background: 'linear-gradient(90deg, rgb(var(--brand-primary)), rgb(var(--brand-secondary)))', color: 'rgb(var(--text-inverse))' }}
              >
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2" style={{ borderColor: 'rgb(var(--text-inverse))', color: 'rgb(var(--text-inverse))' }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
  <section className="py-20 px-4 bg-surface-token">
        <div className="container mx-auto">
          <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-base-token mb-4">
              Comprehensive AI Solutions
            </h2>
    <p className="text-xl text-muted-token max-w-2xl mx-auto">
              Harness the power of artificial intelligence to revolutionize every aspect of your retail business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
        className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-elevate-token"
              >
                <CardHeader className="text-center pb-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, rgb(var(--brand-primary)), rgb(var(--brand-secondary)))', color: 'rgb(var(--text-inverse))' }}>
                    {feature.icon}
                  </div>
      <CardTitle className="text-xl font-bold text-base-token">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
      <p className="text-muted-token text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
  <section className="py-20 px-4 bg-surface-token">
        <div className="container mx-auto">
          <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-base-token mb-4">
              Why Choose RetailGenie?
            </h2>
    <p className="text-xl text-muted-token max-w-2xl mx-auto">
              Experience measurable improvements across all key business metrics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center group"
              >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: 'rgba(46,90,135,0.06)', color: 'rgb(var(--brand-primary))' }}>
                  {benefit.icon}
                </div>
        <h3 className="font-bold text-base-token mb-2">
                  {benefit.title}
                </h3>
        <p className="text-sm text-muted-token">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 px-4 bg-surface-token">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-base-token mb-4">
              Join the Retail Revolution
            </h2>
            <p className="text-xl text-muted-token">
              Get early access to RetailGenie and transform your business today
            </p>
          </div>
          
          <Card className="border-0 shadow-2xl bg-elevate-token">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-sm font-semibold text-base-token">
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      required
                      className="h-12 border-2 rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-sm font-semibold text-base-token">
                      Industry *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("industry", value)} required>
                      <SelectTrigger className="h-12 border-2 rounded-lg">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fashion">Fashion & Apparel</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="grocery">Grocery & Food</SelectItem>
                        <SelectItem value="home">Home & Garden</SelectItem>
                        <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                        <SelectItem value="sports">Sports & Outdoors</SelectItem>
                        <SelectItem value="automotive">Automotive</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-base-token">
                      Contact Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="h-12 border-2 rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-base-token">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="h-12 border-2 rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="useCase" className="text-sm font-semibold text-base-token">
                    Primary Use Case
                  </Label>
                  <Textarea
                    id="useCase"
                    placeholder="Tell us about your specific needs and how you plan to use RetailGenie..."
                    value={formData.useCase}
                    onChange={(e) => handleInputChange("useCase", e.target.value)}
                    className="min-h-[120px] border-2 rounded-lg resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" style={{ background: 'linear-gradient(90deg, rgb(var(--brand-primary)), rgb(var(--brand-secondary)))', color: 'rgb(var(--text-inverse))' }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Processing...
                      </div>
                    ) : (
                      <>
                        Get Early Access
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 px-4 gradient-hero text-inverse-token">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-xl mb-8 text-inverse-token/80 max-w-2xl mx-auto">
            Join leading retailers who are already using AI to drive growth, optimize operations, and enhance customer experiences.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 bg-white"
            style={{ color: 'rgb(var(--brand-primary))' }}
          >
            Contact Our Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}