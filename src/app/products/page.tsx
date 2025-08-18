"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Package, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  Shield,
  Lock,
  Zap,
  Clock,
  DollarSign,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  Smartphone,
  Globe,
  Database,
  Code,
  Settings,
  Headphones,
  Award,
  Calendar,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Lightbulb,
  Gauge,
  Brain,
  Eye,
  Cpu,
  Activity
} from 'lucide-react';
import Navigation from '@/components/sections/navigation';

// const Navigation = () => (
//   <nav className="bg-white shadow-sm border-b">
//     <div className="container mx-auto px-6 py-4">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-8">
//           <div className="text-xl font-bold text-[#2E5A87]">UnAbandon AI</div>
//           <div className="hidden md:flex space-x-6">
//             <a href="/" className="text-gray-600 hover:text-[#2E5A87] transition-colors">Home</a>
//             <a href="/products" className="text-[#2E5A87] font-semibold">Products</a>
//             <a href="/team" className="text-gray-600 hover:text-[#2E5A87] transition-colors">About</a>
//             <a href="/contact" className="text-gray-600 hover:text-[#2E5A87] transition-colors">Contact</a>
//           </div>
//         </div>
//         <div className="flex items-center space-x-4">
//           <Button variant="outline" className="border-[#2E5A87] text-[#2E5A87] hover:bg-[#2E5A87] hover:text-white">
//             Login
//           </Button>
//           <Button className="bg-[#2E5A87] hover:bg-[#2E5A87]/90">
//             Start Free Trial
//           </Button>
//         </div>
//       </div>
//     </div>
//   </nav>
// );

const ProductHero = () => (
  <section className="gradient-hero text-inverse-token py-20">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-inverse-token">UnAbandon AI Retail Intelligence Platform</h1>
        <p className="text-xl mb-8 text-inverse-token/85">
          "UnAbandon AI harnesses customer behavior intelligence across channels and modes into actionable intelligence for critical Retail applications – like Merchandising, Marketing, eCommerce and Supply Chain"
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button size="lg" className="" style={{ backgroundColor: 'rgb(var(--brand-accent))', color: 'rgb(var(--text-inverse))' }}>
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
          <Button size="lg" className="" style={{ backgroundColor: 'rgb(var(--brand-accent))', color: 'rgb(var(--text-inverse))' }}>
            Start Free Trial
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold" style={{ color: 'rgb(var(--brand-accent))' }}>500+</div>
            <div className="text-sm text-inverse-token/70">Retail Partners</div>
          </div>
          <div>
            <div className="text-3xl font-bold" style={{ color: 'rgb(var(--brand-accent))' }}>98%</div>
            <div className="text-sm text-inverse-token/70">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold" style={{ color: 'rgb(var(--brand-accent))' }}>$2.5B</div>
            <div className="text-sm text-inverse-token/70">Revenue Generated</div>
          </div>
          <div>
            <div className="text-3xl font-bold" style={{ color: 'rgb(var(--brand-accent))' }}>45%</div>
            <div className="text-sm text-inverse-token/70">Avg ROI Increase</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProductCard = ({ title, description, icon: Icon, features, pricing, screenshot, testimonial }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-elevate-token">
    <CardHeader className="gradient-brand text-inverse-token">
      <div className="flex items-center space-x-3">
        <Icon className="w-8 h-8" />
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-inverse-token/80">{description}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="p-6">
      <div className="space-y-6">
        {/* Screenshot Placeholder */}
        <div className="bg-surface-token rounded-lg h-48 flex items-center justify-center">
          <div className="text-center text-muted-token">
            <Icon className="w-16 h-16 mx-auto mb-2 opacity-50" />
            <p>Product Screenshot</p>
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="font-semibold mb-3">Key Features</h4>
          <div className="grid grid-cols-1 gap-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" style={{ color: 'rgb(var(--brand-accent))' }} />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-surface-token rounded-lg p-4">
          <h4 className="font-semibold mb-2">Starting at</h4>
          <div className="text-2xl font-bold" style={{ color: 'rgb(var(--brand-primary))' }}>{pricing}</div>
          <p className="text-sm text-muted-token">per month, billed annually</p>
        </div>

        {/* Testimonial */}
        <div className="border-l-4 pl-4" style={{ borderColor: 'rgb(var(--brand-accent))' }}>
          <p className="text-sm italic mb-2">"{testimonial.quote}"</p>
          <div className="flex items-center space-x-2">
            <div className="text-xs font-semibold">{testimonial.author}</div>
            <div className="text-xs text-muted-token">{testimonial.company}</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button className="flex-1" style={{ backgroundColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--text-inverse))' }}>
            Start Free Trial
          </Button>
          <Button variant="outline" className="" style={{ borderColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--brand-primary))' }}>
            Learn More
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ComparisonTable = () => {
  const [selectedProducts, setSelectedProducts] = useState(['retail-genie', 'analytics']);
  
  const products = {
    'retail-genie': 'RetailGenie',
    'analytics': 'Analytics Dashboard',
    'customer': 'Customer Intelligence',
    'inventory': 'Inventory Optimization',
    'personalization': 'Personalization Engine',
    'forecasting': 'Predictive Forecasting'
  };

  const features = [
    'Real-time Analytics',
    'Customer Segmentation',
    'Inventory Tracking',
    'Sales Forecasting',
    'AI Recommendations',
    'Mobile App',
    'API Access',
    'Custom Reports',
    'Multi-store Support',
    '24/7 Support'
  ];

  return (
    <section className="py-16 bg-surface-token">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-base-token">Product Comparison</h2>
          <p className="text-xl text-muted-token">Compare features across our product suite</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="mb-6">
              <Label className="text-base font-semibold mb-3 block">Select Products to Compare</Label>
              <div className="flex flex-wrap gap-2">
                {Object.entries(products).map(([key, name]) => (
                  <Button
                    key={key}
                    variant={selectedProducts.includes(key) ? "default" : "outline"}
                    onClick={() => {
                      if (selectedProducts.includes(key)) {
                        setSelectedProducts(selectedProducts.filter(p => p !== key));
                      } else if (selectedProducts.length < 3) {
                        setSelectedProducts([...selectedProducts, key]);
                      }
                    }}
                    className={selectedProducts.includes(key) ? "" : ""} style={selectedProducts.includes(key) ? { backgroundColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--text-inverse))' } : undefined}
                    disabled={!selectedProducts.includes(key) && selectedProducts.length >= 3}
                  >
                    {name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Feature</th>
                    {selectedProducts.map(productKey => (
                      <th key={productKey} className="text-center py-3 px-4 min-w-32">
                        {products[productKey]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, idx) => (
                    <tr key={idx} className="border-b hover:bg-surface-token">
                      <td className="py-3 px-4 font-medium">{feature}</td>
                      {selectedProducts.map(productKey => (
                        <td key={productKey} className="text-center py-3 px-4">
                          <CheckCircle className="w-5 h-5 mx-auto" style={{ color: 'rgb(var(--brand-accent))' }} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const FeatureMatrix = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      description: 'Perfect for small retailers',
      color: 'bg-gray-50 border-gray-200'
    },
    {
      name: 'Professional',
      price: '$599',
      description: 'Best for growing businesses',
      color: 'bg-[#2E5A87] text-white',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large retail operations',
      color: 'bg-gray-50 border-gray-200'
    }
  ];

  const features = [
    { category: 'Core Features', items: [
      'Basic Analytics',
      'Customer Insights',
      'Inventory Tracking',
      'Sales Reports'
    ]},
    { category: 'AI & ML', items: [
      'Predictive Analytics',
      'Recommendation Engine',
      'Demand Forecasting',
      'Price Optimization'
    ]},
    { category: 'Integrations', items: [
      'E-commerce Platforms',
      'POS Systems',
      'CRM Integration',
      'Custom APIs'
    ]},
    { category: 'Support', items: [
      'Email Support',
      'Phone Support',
      'Dedicated Manager',
      'Custom Training'
    ]}
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-base-token">Feature Matrix</h2>
          <p className="text-xl text-muted-token">Choose the right plan for your business needs</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-elevate-token rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr>
                <th className="text-left py-6 px-6 bg-surface-token border-b">Features</th>
                {plans.map((plan, idx) => (
                  <th key={idx} className={`text-center py-6 px-6 border-b min-w-48 ${plan.popular ? 'relative' : ''} ${plan.popular ? '' : ''}`} style={plan.popular ? { backgroundColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--text-inverse))' } : {}}>
                    {plan.popular && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2" style={{ backgroundColor: 'rgb(var(--brand-accent))' }}>
                        Most Popular
                      </Badge>
                    )}
                    <div className="text-lg font-bold">{plan.name}</div>
                    <div className="text-2xl font-bold mt-1">{plan.price}</div>
                    <div className={`text-sm mt-1 ${plan.popular ? 'text-inverse-token/80' : ''}`} style={!plan.popular ? { color: 'rgb(var(--text-muted))' } : {}}>
                      {plan.description}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIdx) => (
                <>
                  <tr key={`category-${categoryIdx}`}>
                    <td colSpan={4} className="py-4 px-6 bg-surface-token font-semibold" style={{ color: 'rgb(var(--brand-primary))' }}>
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((item, itemIdx) => (
                    <tr key={`${categoryIdx}-${itemIdx}`} className="hover:bg-surface-token">
                      <td className="py-3 px-6 border-b">{item}</td>
                      <td className="text-center py-3 px-6 border-b">
                        <CheckCircle className="w-5 h-5 mx-auto" style={{ color: 'rgb(var(--brand-accent))' }} />
                      </td>
                      <td className="text-center py-3 px-6 border-b">
                        <CheckCircle className="w-5 h-5 mx-auto" style={{ color: 'rgb(var(--brand-accent))' }} />
                      </td>
                      <td className="text-center py-3 px-6 border-b">
                        <CheckCircle className="w-5 h-5 mx-auto" style={{ color: 'rgb(var(--brand-accent))' }} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="" style={{ backgroundColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--text-inverse))' }}>
            Compare All Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

const IntegrationShowcase = () => {
  const integrations = [
    { name: 'Shopify', logo: '🛍️', category: 'E-commerce' },
    { name: 'WooCommerce', logo: '🛒', category: 'E-commerce' },
    { name: 'Magento', logo: '🏪', category: 'E-commerce' },
    { name: 'Salesforce', logo: '☁️', category: 'CRM' },
    { name: 'Square', logo: '⬜', category: 'POS' },
    { name: 'Stripe', logo: '💳', category: 'Payments' },
    { name: 'Google Analytics', logo: '📊', category: 'Analytics' },
    { name: 'Mailchimp', logo: '📧', category: 'Marketing' },
    { name: 'Slack', logo: '💬', category: 'Communication' },
    { name: 'Zapier', logo: '⚡', category: 'Automation' },
    { name: 'HubSpot', logo: '🧲', category: 'CRM' },
    { name: 'BigCommerce', logo: '🏬', category: 'E-commerce' }
  ];

  const categories = [...new Set(integrations.map(i => i.category))];

  return (
    <section className="py-16 bg-surface-token">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-base-token">Seamless Integrations</h2>
          <p className="text-xl text-muted-token">
            Connect with your existing tools and platforms effortlessly
          </p>
        </div>

        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {integrations
                  .filter(integration => integration.category === category)
                  .map((integration, idx) => (
          <Card key={idx} className="hover:shadow-md transition-shadow cursor-pointer bg-elevate-token">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-3">{integration.logo}</div>
            <h3 className="font-semibold" style={{ color: 'rgb(var(--brand-primary))' }}>{integration.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
      <Button variant="outline" className="mr-4" style={{ borderColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--brand-primary))' }}>
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Integrations
          </Button>
      <Button className="" style={{ backgroundColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--text-inverse))' }}>
            Request Custom Integration
          </Button>
        </div>
      </div>
    </section>
  );
};

const ROICalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(100000);
  const [cartAbandonmentRate, setCartAbandonmentRate] = useState(70);
  const [averageOrderValue, setAverageOrderValue] = useState(85);

  const calculateROI = () => {
    const recoveredCarts = (monthlyRevenue / averageOrderValue) * (cartAbandonmentRate / 100) * 0.15;
    const additionalRevenue = recoveredCarts * averageOrderValue * 12;
    const cost = 599 * 12; // Professional plan
    const roi = ((additionalRevenue - cost) / cost) * 100;
    
    return {
      recoveredCarts: Math.round(recoveredCarts),
      additionalRevenue: Math.round(additionalRevenue),
      roi: Math.round(roi)
    };
  };

  const results = calculateROI();

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-base-token">ROI Calculator</h2>
          <p className="text-xl text-muted-token">
            See how much you could save with UnAbandon AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Your Business Metrics</CardTitle>
              <CardDescription>Enter your current business data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Monthly Revenue ($)</Label>
                <Input
                  type="number"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Cart Abandonment Rate (%)</Label>
                <Input
                  type="number"
                  value={cartAbandonmentRate}
                  onChange={(e) => setCartAbandonmentRate(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Average Order Value ($)</Label>
                <Input
                  type="number"
                  value={averageOrderValue}
                  onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

      <Card className="gradient-hero text-inverse-token">
            <CardHeader>
              <CardTitle>Your Potential ROI</CardTitle>
        <CardDescription className="text-inverse-token/80">
                Based on industry averages and our customer data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
          <div className="text-2xl font-bold" style={{ color: 'rgb(var(--brand-accent))' }}>
                    {results.recoveredCarts.toLocaleString()}
                  </div>
                  <div className="text-sm">Recovered Carts/Month</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
          <div className="text-2xl font-bold" style={{ color: 'rgb(var(--brand-accent))' }}>
                    ${results.additionalRevenue.toLocaleString()}
                  </div>
                  <div className="text-sm">Additional Annual Revenue</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
          <div className="text-2xl font-bold" style={{ color: 'rgb(var(--brand-accent))' }}>
                    {results.roi}%
                  </div>
                  <div className="text-sm">Return on Investment</div>
                </div>
              </div>
        <Button className="w-full" style={{ backgroundColor: 'rgb(var(--brand-accent))', color: 'rgb(var(--text-inverse))' }}>
                Get Detailed ROI Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ProductRoadmap = () => {
  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      status: 'completed',
      items: [
        'Advanced ML algorithms for customer segmentation',
        'Real-time inventory synchronization',
        'Mobile app for iOS and Android'
      ]
    },
    {
      quarter: 'Q2 2024',
      status: 'current',
      items: [
        'Voice commerce integration',
        'Advanced fraud detection',
        'Multi-currency support'
      ]
    },
    {
      quarter: 'Q3 2024',
      status: 'upcoming',
      items: [
        'AR/VR shopping experiences',
        'Blockchain-based loyalty programs',
        'Advanced chatbot with GPT integration'
      ]
    },
    {
      quarter: 'Q4 2024',
      status: 'planned',
      items: [
        'IoT device integrations',
        'Advanced supply chain optimization',
        'Global marketplace connector'
      ]
    }
  ];

  return (
    <section className="py-16 bg-surface-token">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-base-token">Product Roadmap</h2>
          <p className="text-xl text-muted-token">
            See what's coming next in our product evolution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, idx) => (
            <Card key={idx} className={`relative ${
              item.status === 'current' ? 'border-2' : ''
            }`} style={item.status === 'current' ? { borderColor: 'rgb(var(--brand-accent))' } : {}}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.quarter}</CardTitle>
                  <Badge variant={
                    item.status === 'completed' ? 'default' :
                    item.status === 'current' ? 'secondary' :
                    'outline'
                  }>
                    {item.status === 'completed' ? 'Done' :
                     item.status === 'current' ? 'Active' :
                     item.status === 'upcoming' ? 'Next' :
                     'Planned'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.items.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start space-x-2">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0`} style={{ backgroundColor: item.status === 'completed' ? 'rgb(var(--brand-accent))' : item.status === 'current' ? 'rgba(46,90,135,1)' : 'rgba(0,0,0,0.2)' }} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="" style={{ borderColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--brand-primary))' }}>
            <Calendar className="w-4 h-4 mr-2" />
            Subscribe to Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

const TrustIndicators = () => {
  const certifications = [
    { name: 'SOC 2 Type II', icon: Shield },
    { name: 'GDPR Compliant', icon: Lock },
    { name: 'ISO 27001', icon: Award },
    { name: '99.9% Uptime', icon: Activity }
  ];

  return (
    <section className="py-12 bg-elevate-token border-t border-b">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-muted-token mb-6">
            Trusted by leading retailers worldwide
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {certifications.map((cert, idx) => (
            <div key={idx} className="text-center">
              <cert.icon className="w-8 h-8 mx-auto mb-2" style={{ color: 'rgb(var(--brand-primary))' }} />
              <div className="text-sm font-medium">{cert.name}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-token">
            Enterprise-grade security and compliance you can trust
          </p>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-16 gradient-hero text-inverse-token">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Transform Your Retail Business?
      </h2>
      <p className="text-xl mb-8 text-inverse-token/80 max-w-2xl mx-auto">
        Join thousands of retailers who are already using UnAbandon AI to increase 
        sales, reduce costs, and improve customer satisfaction.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button size="lg" className="" style={{ backgroundColor: 'rgb(var(--brand-accent))', color: 'rgb(var(--text-inverse))' }}>
          <Zap className="w-5 h-5 mr-2" />
          Start Free 30-Day Trial
        </Button>
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white" style={{ color: 'rgb(var(--text-inverse))' }}>
          <Headphones className="w-5 h-5 mr-2" />
          Schedule Demo
        </Button>
      </div>
      
      <div className="mt-8 text-sm text-inverse-token/80">
        No credit card required • Full access to all features • Cancel anytime
      </div>
    </div>
  </section>
);

export default function ProductsPage() {
  const products = [
    {
      title: 'RetailGenie',
      description: 'Single Source of Intelligence (SSOI) to power Retail AI Apps',
      icon: Brain,
      features: [
        'Built for Retail associates across Merchandising, eCommerce, Technology, Digital, and Executive Leadership',
        'Trained with Beauty and Cosmetics datasets',
        'Focus on top to mid marketing funnel (Search, Browse to Add to Cart)',
        'Real-time intelligence on your business',
        'Early access platform with continuous feedback integration'
      ],
      pricing: 'Early Access',
      testimonial: {
        quote: 'The journey to make Retail intelligent has started…We are thrilled to put you in the driver seat!',
        author: 'UnAbandon AI Team',
        company: 'Platform Launch'
      }
    },
    {
      title: 'MerchAssist Agent',
      description: 'World\'s first Recommendation Engine for Merchants',
      icon: Users,
      features: [
        'Help Merchants, Planners, Buyers get more data-driven',
        'Customer-centric decision making',
        'Agile and closer to real-time demand',
        'AI-powered merchandising recommendations',
        'Comprehensive retail intelligence'
      ],
      pricing: 'Coming Soon',
      testimonial: {
        quote: 'We are building the world\'s first Recommendation Engine for Merchants with MerchAssist Agent.',
        author: 'Product Development',
        company: 'UnAbandon AI'
      }
    },
    {
      title: 'Customer Intelligence',
      description: 'Deep customer behavior analysis',
      icon: Users,
      features: [
        'Behavioral segmentation',
        'Journey mapping',
        'Lifetime value prediction',
        'Churn prevention',
        'Personalization insights'
      ],
      pricing: '$399',
      testimonial: {
        quote: 'We increased customer retention by 40% using the intelligence platform.',
        author: 'Lisa Rodriguez',
        company: 'Premium Goods Inc.'
      }
    },
    {
      title: 'Inventory Optimization',
      description: 'Smart inventory management',
      icon: Package,
      features: [
        'Demand forecasting',
        'Stock level optimization',
        'Automated reordering',
        'Supplier integration',
        'Cost reduction analytics'
      ],
      pricing: '$499',
      testimonial: {
        quote: 'Reduced inventory costs by 25% while improving stock availability.',
        author: 'David Park',
        company: 'Global Electronics'
      }
    },
    {
      title: 'Personalization Engine',
      description: 'AI-driven personalized experiences',
      icon: Target,
      features: [
        'Product recommendations',
        'Dynamic content',
        'Behavioral targeting',
        'A/B testing',
        'Cross-sell optimization'
      ],
      pricing: '$599',
      testimonial: {
        quote: 'Personalization increased our conversion rate by 60%.',
        author: 'Emma Williams',
        company: 'Fashion Forward'
      }
    },
    {
      title: 'Predictive Forecasting',
      description: 'Advanced sales and trend prediction',
      icon: TrendingUp,
      features: [
        'Sales forecasting',
        'Trend analysis',
        'Seasonal adjustments',
        'Market insights',
        'Risk assessment'
      ],
      pricing: '$699',
      testimonial: {
        quote: 'Our forecasting accuracy improved by 80% with this platform.',
        author: 'James Thompson',
        company: 'Retail Dynamics'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-surface-token">
      <Navigation />
      <ProductHero />
      
      {/* Main Product Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-base-token">Our Product Suite</h2>
            <p className="text-xl text-muted-token">
              Complete AI solutions designed specifically for modern retail businesses
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      <ComparisonTable />
      <FeatureMatrix />
      <IntegrationShowcase />
      <ROICalculator />
      <ProductRoadmap />
      <TrustIndicators />
      <CTASection />
    </div>
  );
}