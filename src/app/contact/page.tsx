"use client";

import { useState } from "react";
import Navigation from "@/components/sections/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Calendar,
  MessageCircle,
  HeadphonesIcon,
  Building,
  Users,
  Shield,
  Timer,
  CreditCard,
  Settings,
  CheckCircle,
  ChevronRight
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  inquiryType: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Sales Inquiries",
      description: "Ready to transform your retail operations?",
      contact: "sales@unabandon.ai",
      phone: "+1 (555) 123-4567",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: HeadphonesIcon,
      title: "Support",
      description: "Need help with your existing setup?",
      contact: "support@unabandon.ai",
      phone: "+1 (555) 123-4568",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Interested in partnering with us?",
      contact: "partnerships@unabandon.ai",
      phone: "+1 (555) 123-4569",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const offices = [
    {
      city: "San Francisco",
      label: "Headquarters",
      address: "123 Innovation Drive",
      location: "San Francisco, CA 94105",
      timezone: "PST",
      hours: "9:00 AM - 6:00 PM",
    },
    {
      city: "New York",
      label: "East Coast Office",
      address: "456 Retail Avenue",
      location: "New York, NY 10001",
      timezone: "EST",
      hours: "9:00 AM - 6:00 PM",
    },
    {
      city: "London",
      label: "European Office",
      address: "789 Tech Street",
      location: "London, UK EC2A 4DP",
      timezone: "GMT",
      hours: "9:00 AM - 5:00 PM",
    },
  ];

  const faqs = [
    {
      question: "What is the typical implementation timeline?",
      answer: "Implementation typically takes 4-8 weeks depending on your existing infrastructure and requirements. We provide a detailed timeline during our initial consultation and work closely with your team to ensure smooth deployment.",
      icon: Timer,
    },
    {
      question: "How does your pricing work?",
      answer: "Our pricing is based on your specific needs, transaction volume, and features required. We offer flexible plans from starter packages to enterprise solutions. Contact our sales team for a personalized quote.",
      icon: CreditCard,
    },
    {
      question: "What does the integration process involve?",
      answer: "Our integration process includes API setup, data migration, staff training, and ongoing support. Our technical team handles the heavy lifting while providing comprehensive documentation and training materials.",
      icon: Settings,
    },
    {
      question: "How do you ensure data security?",
      answer: "We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is stored in secure, GDPR-compliant data centers with 24/7 monitoring.",
      icon: Shield,
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support, dedicated account management, comprehensive documentation, video tutorials, and regular training sessions. Premium plans include priority support and dedicated success managers.",
      icon: HeadphonesIcon,
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Thank You!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We've received your message and will get back to you within 24 hours.
              </p>
              <Button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    inquiryType: "",
                    message: "",
                  });
                }}
                className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's UnAbandon Your{" "}
              <span className="text-[var(--brand-primary)]">Retail Potential</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to transform your retail operations? Get in touch with our experts 
              and discover how UnAbandon AI can revolutionize your customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 text-lg px-8 py-4"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Conversation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Multiple Ways to Connect
              </h2>
              <p className="text-lg text-gray-600">
                Choose the best way to reach our team based on your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg ${method.bgColor} flex items-center justify-center mb-4`}>
                      <method.icon className={`w-6 h-6 ${method.color}`} />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <p className="text-gray-600">{method.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a 
                          href={`mailto:${method.contact}`}
                          className="text-[var(--brand-primary)] hover:underline"
                        >
                          {method.contact}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <a 
                          href={`tel:${method.phone}`}
                          className="text-[var(--brand-primary)] hover:underline"
                        >
                          {method.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                          className={errors.company ? 'border-red-500' : ''}
                        />
                        {errors.company && (
                          <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select 
                        value={formData.inquiryType} 
                        onValueChange={(value) => handleInputChange('inquiryType', value)}
                      >
                        <SelectTrigger className={errors.inquiryType ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales & Pricing</SelectItem>
                          <SelectItem value="demo">Request Demo</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.inquiryType && (
                        <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your retail challenges and how we can help..."
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Locations */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Visit Our Offices
                </h3>
                <p className="text-gray-600">
                  We have offices around the world to serve you better.
                </p>
              </div>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[var(--brand-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">
                              {office.city}
                            </h4>
                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {office.label}
                            </span>
                          </div>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{office.address}, {office.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{office.hours} ({office.timezone})</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Meeting Scheduler Placeholder */}
              <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-[var(--brand-primary)] mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Schedule a Meeting
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Book a personalized demo or consultation with our experts.
                  </p>
                  <Button className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90">
                    Book Meeting
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about UnAbandon AI
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <faq.icon className="w-5 h-5 text-[var(--brand-primary)]" />
                      </div>
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-14 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Connect with us through your preferred channel
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Live Chat Support
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Get instant help from our support team during business hours.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HeadphonesIcon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    24/7 Support Portal
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Access our knowledge base and submit support tickets anytime.
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Access Portal
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}