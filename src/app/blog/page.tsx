"use client";

import React, { useState } from 'react';
import { Search, Calendar, User, Clock, Share2, Tag, TrendingUp, BookOpen, BarChart3, Lightbulb, Users, Filter, ArrowRight, Mail, ChevronRight, Eye, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'All', icon: BookOpen, count: 47 },
    { name: 'AI Trends', icon: TrendingUp, count: 12 },
    { name: 'Retail Strategy', icon: BarChart3, count: 15 },
    { name: 'Customer Analytics', icon: Users, count: 8 },
    { name: 'Case Studies', icon: Eye, count: 7 },
    { name: 'Industry News', icon: Lightbulb, count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Retail: How AI is Transforming Customer Experience in 2024",
      excerpt: "Discover the latest AI innovations reshaping retail landscapes, from personalized shopping experiences to predictive inventory management. Learn how forward-thinking retailers are leveraging machine learning to create unprecedented customer value.",
      author: "Sarah Chen",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "AI Trends",
      image: "/api/placeholder/400/250",
      featured: true,
      views: 2847,
      comments: 23
    },
    {
      id: 2,
      title: "Reducing Cart Abandonment: 5 Data-Driven Strategies That Actually Work",
      excerpt: "Cart abandonment costs retailers billions annually. Our comprehensive analysis of 10,000+ customer journeys reveals the most effective AI-powered interventions to recover lost sales and improve conversion rates.",
      author: "Michael Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Customer Analytics",
      image: "/api/placeholder/400/250",
      featured: true,
      views: 1932,
      comments: 31
    },
    {
      id: 3,
      title: "Personalization at Scale: How Major Retailers Use AI to Create Individual Experiences",
      excerpt: "From Amazon to Spotify, learn how industry leaders implement personalization engines that adapt to millions of users simultaneously. We break down the technology, strategies, and measurable outcomes.",
      author: "Emily Watson",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Case Studies",
      image: "/api/placeholder/400/250",
      featured: false,
      views: 1654,
      comments: 18
    },
    {
      id: 4,
      title: "Predictive Analytics in Inventory Management: Preventing Stockouts and Overstock",
      excerpt: "Smart inventory management powered by AI can reduce carrying costs by 25% while improving product availability. Explore real-world implementations and ROI calculations from retail leaders.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Retail Strategy",
      image: "/api/placeholder/400/250",
      featured: false,
      views: 1234,
      comments: 15
    },
    {
      id: 5,
      title: "Customer Journey Mapping with AI: Understanding the Modern Shopping Path",
      excerpt: "Traditional customer journey maps fall short in today's omnichannel world. Discover how AI-powered journey mapping provides real-time insights and actionable intelligence for retailers.",
      author: "Lisa Anderson",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Customer Analytics",
      image: "/api/placeholder/400/250",
      featured: false,
      views: 987,
      comments: 12
    },
    {
      id: 6,
      title: "Voice Commerce Revolution: Preparing Your Retail Strategy for Voice Shopping",
      excerpt: "Voice commerce is projected to reach $40 billion by 2025. Learn how retailers are optimizing for voice search, implementing voice-activated shopping, and preparing for the next wave of consumer behavior.",
      author: "James Wilson",
      date: "March 3, 2024",
      readTime: "5 min read",
      category: "Industry News",
      image: "/api/placeholder/400/250",
      featured: false,
      views: 756,
      comments: 9
    },
    {
      id: 7,
      title: "Dynamic Pricing Strategies: Using AI to Optimize Revenue in Real-Time",
      excerpt: "Dynamic pricing isn't just for airlines anymore. Discover how retailers use machine learning algorithms to adjust prices based on demand, competition, inventory levels, and customer segments.",
      author: "Rachel Thompson",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Retail Strategy",
      image: "/api/placeholder/400/250",
      featured: false,
      views: 1456,
      comments: 27
    },
    {
      id: 8,
      title: "The Psychology of Online Shopping: Behavioral Insights from 1 Million Customers",
      excerpt: "Our extensive analysis reveals fascinating patterns in online shopping behavior. From decision triggers to abandonment points, understand what drives customers to buy—or walk away.",
      author: "Dr. Amanda Foster",
      date: "February 25, 2024",
      readTime: "12 min read",
      category: "Customer Analytics",
      image: "/api/placeholder/400/250",
      featured: false,
      views: 2103,
      comments: 42
    },
    {
      id: 9,
      title: "Omnichannel Excellence: Seamlessly Connecting Online and Offline Experiences",
      excerpt: "The lines between digital and physical retail continue to blur. Learn how successful retailers create unified experiences that delight customers across every touchpoint and drive loyalty.",
      author: "Marcus Johnson",
      date: "February 22, 2024",
      readTime: "7 min read",
      category: "Retail Strategy",
      image: "/api/placeholder/400/250",
      featured: false,
      views: 1678,
      comments: 19
    },
    {
      id: 10,
      title: "AI-Powered Customer Service: From Chatbots to Emotional Intelligence",
      excerpt: "Modern AI customer service goes beyond simple chatbots. Explore how retailers implement empathetic AI that understands context, emotion, and intent to deliver exceptional customer support.",
      author: "Sophia Martinez",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "AI Trends",
      image: "/api/placeholder/400/250",
      featured: false,
      views: 1234,
      comments: 16
    }
  ];

  const popularPosts = [
    { title: "The Future of Retail: How AI is Transforming Customer Experience", views: 2847 },
    { title: "The Psychology of Online Shopping: Behavioral Insights", views: 2103 },
    { title: "Reducing Cart Abandonment: 5 Data-Driven Strategies", views: 1932 },
    { title: "Omnichannel Excellence: Seamlessly Connecting Experiences", views: 1678 },
    { title: "Personalization at Scale: How Major Retailers Use AI", views: 1654 }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-surface-token">
      {/* Hero Section */}
      <section className="gradient-hero text-inverse-token py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Retail Intelligence
              <span className="block text-inverse-token/80">Insights & Trends</span>
            </h1>
            <p className="text-xl md:text-2xl text-inverse-token/80 mb-8 leading-relaxed">
              Stay ahead of the curve with expert insights on AI-powered retail strategies, 
              customer experience optimization, and the future of commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white px-8 py-3" style={{ color: 'rgb(var(--brand-primary))' }}>
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Articles
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white px-8 py-3" style={{ color: 'rgb(var(--text-inverse))' }}>
                <Mail className="mr-2 h-5 w-5" />
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Search and Filter Bar */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Button variant="outline" className="h-12 px-6">
                  <Filter className="mr-2 h-4 w-4" />
                  Advanced Filters
                </Button>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category.name
                          ? 'shadow-lg'
                          : 'bg-elevate-token text-muted-token hover:bg-surface-token border'
                      }`}
                      style={selectedCategory === category.name ? { backgroundColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--text-inverse))' } : {}}
                    >
                      <IconComponent className="mr-2 h-4 w-4" />
                      {category.name}
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Featured Posts */}
            {selectedCategory === 'All' && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-base-token mb-8">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-elevate-token">
                      <div className="relative">
                        <div className="h-48 gradient-hero rounded-t-lg opacity-80"></div>
                        <Badge className="absolute top-4 left-4" style={{ backgroundColor: '#FCD34D', color: '#000' }}>
                          Featured
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <Badge variant="outline">{post.category}</Badge>
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-base-token mb-3 transition-colors line-clamp-2" style={{}}
                        >
                          {post.title}
                        </h3>
                        <p className="text-muted-token mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3" style={{ backgroundColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--text-inverse))' }}>
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-base-token">{post.author}</p>
                              <div className="flex items-center text-xs text-muted-token">
                                <Eye className="mr-1 h-3 w-3" />
                                {post.views.toLocaleString()}
                                <MessageSquare className="ml-2 mr-1 h-3 w-3" />
                                {post.comments}
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="hover:bg-surface-token" style={{ color: 'rgb(var(--brand-primary))' }}>
                            Read More
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Posts Grid */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-base-token">
                  {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
                </h2>
                <p className="text-muted-token">
                  {filteredPosts.length} articles found
                </p>
              </div>
              
              <div className="grid gap-8">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-elevate-token">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="h-48 md:h-full gradient-hero rounded-t-lg md:rounded-l-lg md:rounded-t-none opacity-80"></div>
                      </div>
                      <CardContent className="md:w-2/3 p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <Badge variant="outline">{post.category}</Badge>
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-base-token mb-3 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-token mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3" style={{ backgroundColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--text-inverse))' }}>
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-base-token">{post.author}</p>
                              <div className="flex items-center text-xs text-muted-token">
                                <Eye className="mr-1 h-3 w-3" />
                                {post.views.toLocaleString()}
                                <MessageSquare className="ml-2 mr-1 h-3 w-3" />
                                {post.comments}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="text-gray-400" style={{}}>
                              <Share2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hover:bg-surface-token" style={{ color: 'rgb(var(--brand-primary))' }}>
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="px-8">
                Load More Articles
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-8">
              {/* Newsletter Signup */}
              <Card className="gradient-hero text-inverse-token">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Stay Updated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-inverse-token/80 mb-4">
                    Get the latest retail AI insights delivered to your inbox weekly.
                  </p>
                  <div className="space-y-3">
                    <Input
                      placeholder="Your email address"
                      className="bg-white/10 border-white/20 text-white placeholder:text-inverse-token/70"
                    />
                    <Button className="w-full bg-white" style={{ color: 'rgb(var(--brand-primary))' }}>
                      Subscribe Now
                    </Button>
                  </div>
                  <p className="text-xs text-inverse-token/70 mt-3">
                    Join 5,000+ retail professionals getting weekly insights.
                  </p>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" style={{ color: 'rgb(var(--brand-primary))' }} />
                    Popular Articles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--text-inverse))' }}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-base-token line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-muted-token">
                          <Eye className="mr-1 h-3 w-3" />
                          {post.views.toLocaleString()} views
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Tag className="mr-2 h-5 w-5" style={{ color: 'rgb(var(--brand-primary))' }} />
                    Browse by Topic
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.slice(1).map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center">
                          <IconComponent className="mr-3 h-4 w-4" style={{ color: 'rgb(var(--brand-primary))' }} />
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="" style={{ background: 'linear-gradient(135deg, rgba(76,175,80,0.08), rgba(46,90,135,0.08))', borderColor: 'rgba(76,175,80,0.2)' }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgb(var(--brand-accent))' }}>
                    <Lightbulb className="h-6 w-6" style={{ color: 'rgb(var(--text-inverse))' }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Ready to Transform Your Retail Strategy?
                  </h3>
                  <p className="text-sm text-muted-token mb-4">
                    Discover how UnAbandon AI can help you reduce cart abandonment and increase conversions.
                  </p>
                  <Button className="w-full" style={{ backgroundColor: 'rgb(var(--brand-accent))', color: 'rgb(var(--text-inverse))' }}>
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}