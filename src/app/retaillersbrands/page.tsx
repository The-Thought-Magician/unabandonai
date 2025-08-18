"use client";

import React, { useState } from 'react';
import Navigation from "@/components/sections/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Store, 
  TrendingUp, 
  Package, 
  BarChart3, 
  Users, 
  Eye, 
  Target, 
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Building,
  ShoppingCart,
  Brain,
  Rocket
} from 'lucide-react';

export default function RetailersBrandsPage() {
  const [activeTab, setActiveTab] = useState('retailers');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    type: 'retailer',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership inquiry submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-[#2E5A87]/10 text-[#2E5A87] border-0">
                <Building className="mr-2 h-4 w-4" />
                For Retailers & Brands
              </Badge>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#333333] lg:text-6xl">
              Empowering Retailers & Brands with{' '}
              <span className="bg-gradient-to-r from-[#2E5A87] to-[#4CAF50] bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>
            
            <p className="mb-8 text-xl text-[#666666] lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Drive growth, optimize operations, and enhance customer experiences with our comprehensive AI-powered retail intelligence platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-[#2E5A87] hover:bg-[#2E5A87]/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Your AI Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-[#2E5A87] text-[#2E5A87] hover:bg-[#2E5A87] hover:text-white transition-all duration-300"
              >
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#4CAF50]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-[#2E5A87]/20 rounded-full animate-bounce"></div>
      </section>

      {/* Solutions Tabs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-2 p-2 bg-gray-100 rounded-xl">
                  <TabsTrigger 
                    value="retailers" 
                    className="px-6 py-3 text-lg font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#2E5A87] data-[state=active]:shadow-md transition-all duration-300"
                  >
                    <Store className="mr-2 h-5 w-5" />
                    Retailers
                  </TabsTrigger>
                  <TabsTrigger 
                    value="brands"
                    className="px-6 py-3 text-lg font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#2E5A87] data-[state=active]:shadow-md transition-all duration-300"
                  >
                    <Building className="mr-2 h-5 w-5" />
                    Brands
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="retailers" className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-[#333333] mb-4">
                    Retail Intelligence Solutions
                  </h2>
                  <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                    Transform your retail operations with AI-powered insights that drive revenue growth and operational efficiency
                  </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {[
                    {
                      icon: <BarChart3 className="h-8 w-8 text-[#2E5A87]" />,
                      title: "Store Analytics",
                      description: "Real-time performance insights across all locations with predictive analytics and automated reporting"
                    },
                    {
                      icon: <Users className="h-8 w-8 text-[#4CAF50]" />,
                      title: "Customer Journey Mapping",
                      description: "Track and optimize every touchpoint from browsing to purchase with AI-powered behavioral analysis"
                    },
                    {
                      icon: <Package className="h-8 w-8 text-[#2E5A87]" />,
                      title: "Inventory Management",
                      description: "Smart inventory optimization with demand forecasting and automated replenishment strategies"
                    },
                    {
                      icon: <TrendingUp className="h-8 w-8 text-[#4CAF50]" />,
                      title: "Sales Forecasting",
                      description: "Accurate demand prediction using machine learning models trained on historical and market data"
                    }
                  ].map((solution, index) => (
                    <Card key={index} className="group p-8 border-2 border-gray-100 hover:border-[#2E5A87]/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-0">
                        <div className="mb-4 p-3 bg-gray-50 rounded-xl w-fit group-hover:bg-[#2E5A87]/10 transition-colors duration-300">
                          {solution.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#333333] mb-3">{solution.title}</h3>
                        <p className="text-[#666666] leading-relaxed">{solution.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-r from-[#2E5A87]/5 to-[#4CAF50]/5 rounded-3xl p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-[#333333] mb-8 text-center">Key Benefits for Retailers</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      "Increase conversion rates by 25%+",
                      "Optimize store layouts for maximum revenue",
                      "Reduce stockouts by 40%",
                      "Improve profit margins through smart pricing"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                        <span className="text-[#333333] font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="brands" className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-[#333333] mb-4">
                    Brand Intelligence Solutions
                  </h2>
                  <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                    Maximize your brand performance with comprehensive market intelligence and consumer insights
                  </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {[
                    {
                      icon: <Eye className="h-8 w-8 text-[#2E5A87]" />,
                      title: "Brand Performance Analytics",
                      description: "Monitor brand health metrics, sentiment analysis, and competitive positioning across all channels"
                    },
                    {
                      icon: <Brain className="h-8 w-8 text-[#4CAF50]" />,
                      title: "Market Intelligence",
                      description: "Stay ahead with real-time market trends, competitor analysis, and emerging opportunity identification"
                    },
                    {
                      icon: <Users className="h-8 w-8 text-[#2E5A87]" />,
                      title: "Consumer Insights",
                      description: "Deep dive into consumer behavior patterns, preferences, and purchase drivers with AI analytics"
                    },
                    {
                      icon: <Target className="h-8 w-8 text-[#4CAF50]" />,
                      title: "Channel Optimization",
                      description: "Optimize distribution strategies and channel performance with data-driven recommendations"
                    }
                  ].map((solution, index) => (
                    <Card key={index} className="group p-8 border-2 border-gray-100 hover:border-[#2E5A87]/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-0">
                        <div className="mb-4 p-3 bg-gray-50 rounded-xl w-fit group-hover:bg-[#2E5A87]/10 transition-colors duration-300">
                          {solution.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#333333] mb-3">{solution.title}</h3>
                        <p className="text-[#666666] leading-relaxed">{solution.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-r from-[#4CAF50]/5 to-[#2E5A87]/5 rounded-3xl p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-[#333333] mb-8 text-center">Key Benefits for Brands</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      "Track brand health in real-time",
                      "Understand consumer behavior patterns",
                      "Optimize distribution channels",
                      "Maximize marketing ROI by 35%+"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                        <span className="text-[#333333] font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              See how leading retailers and brands are transforming their businesses with UnAbandon AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                company: "Global Fashion Retailer",
                industry: "Fashion",
                result: "40% increase in conversion rates",
                quote: "UnAbandon AI helped us understand our customers like never before. The insights transformed our entire approach to retail.",
                metrics: ["25% revenue growth", "40% better inventory turnover", "60% reduction in markdowns"]
              },
              {
                company: "Premium Electronics Brand",
                industry: "Electronics",
                result: "35% improvement in market share",
                quote: "The market intelligence platform gave us the competitive edge we needed to dominate our category.",
                metrics: ["35% market share increase", "50% faster product launches", "28% cost reduction"]
              },
              {
                company: "Luxury Department Store",
                industry: "Luxury Retail",
                result: "50% increase in customer lifetime value",
                quote: "Customer journey mapping revolutionized our in-store experience and drove unprecedented loyalty.",
                metrics: ["50% higher CLV", "30% increase in repeat purchases", "45% improvement in satisfaction"]
              }
            ].map((story, index) => (
              <Card key={index} className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <Badge variant="outline" className="text-[#2E5A87] border-[#2E5A87]/30">
                      {story.industry}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#333333] mb-2">{story.company}</h3>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-[#4CAF50]">{story.result}</span>
                  </div>
                  
                  <blockquote className="text-[#666666] italic mb-6 leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    {story.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-[#4CAF50]" />
                        <span className="text-sm text-[#666666]">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Seamless Integration Capabilities
            </h2>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Connect with your existing systems and start seeing results in days, not months
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            {[
              { name: "Shopify", category: "E-commerce" },
              { name: "Salesforce", category: "CRM" },
              { name: "SAP", category: "ERP" },
              { name: "Oracle", category: "Database" },
              { name: "Microsoft Dynamics", category: "Business Apps" },
              { name: "Adobe Analytics", category: "Analytics" },
              { name: "Google Analytics", category: "Web Analytics" },
              { name: "Tableau", category: "BI Tools" }
            ].map((integration, index) => (
              <Card key={index} className="p-6 text-center border-2 border-gray-100 hover:border-[#2E5A87]/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2E5A87]/10 to-[#4CAF50]/10 rounded-xl mx-auto flex items-center justify-center">
                      <Zap className="h-6 w-6 text-[#2E5A87]" />
                    </div>
                  </div>
                  <h4 className="font-bold text-[#333333] mb-1">{integration.name}</h4>
                  <p className="text-sm text-[#666666]">{integration.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-[#666666] mb-6">
              Don't see your platform? We support 100+ integrations and custom APIs.
            </p>
            <Button variant="outline" className="px-8 py-3 border-2 border-[#2E5A87] text-[#2E5A87] hover:bg-[#2E5A87] hover:text-white">
              View All Integrations
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-to-br from-[#2E5A87]/5 to-[#4CAF50]/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              Partnership Benefits
            </h2>
            <p className="text-xl text-[#666666] mb-12 max-w-2xl mx-auto">
              Join hundreds of leading retailers and brands who trust UnAbandon AI to power their growth
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Brain className="h-12 w-12 text-[#2E5A87]" />,
                  title: "AI-First Approach",
                  description: "Leverage cutting-edge AI and machine learning for unprecedented insights and automation"
                },
                {
                  icon: <Zap className="h-12 w-12 text-[#4CAF50]" />,
                  title: "Rapid Implementation",
                  description: "Get up and running in weeks, not months, with our streamlined onboarding process"
                },
                {
                  icon: <Users className="h-12 w-12 text-[#2E5A87]" />,
                  title: "Dedicated Support",
                  description: "Access to our team of retail AI experts for strategy, implementation, and optimization"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 p-4 bg-white rounded-2xl shadow-lg w-fit mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-3">{benefit.title}</h3>
                  <p className="text-[#666666] leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#333333] mb-4">
                Start Your Partnership Journey
              </h2>
              <p className="text-xl text-[#666666] max-w-2xl mx-auto">
                Ready to transform your retail operations with AI? Let's discuss how UnAbandon AI can drive your growth.
              </p>
            </div>

            <Card className="p-8 lg:p-12 border-2 border-gray-100 shadow-xl">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#333333] mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-[#2E5A87] rounded-xl"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-[#333333] mb-2">
                        Company *
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-[#2E5A87] rounded-xl"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#333333] mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-[#2E5A87] rounded-xl"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="type" className="block text-sm font-semibold text-[#333333] mb-2">
                        Business Type *
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 border-2 border-gray-200 focus:border-[#2E5A87] rounded-xl px-4 bg-white"
                      >
                        <option value="retailer">Retailer</option>
                        <option value="brand">Brand</option>
                        <option value="both">Both Retailer & Brand</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#333333] mb-2">
                      Tell us about your needs
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="border-2 border-gray-200 focus:border-[#2E5A87] rounded-xl"
                      placeholder="Describe your current challenges, goals, and how we can help you succeed..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-[#2E5A87] hover:bg-[#2E5A87]/90 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Rocket className="mr-2 h-5 w-5" />
                      Start Partnership Discussion
                    </Button>
                    
                    <Button 
                      type="button"
                      variant="outline"
                      size="lg"
                      className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-all duration-300"
                    >
                      Schedule Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}