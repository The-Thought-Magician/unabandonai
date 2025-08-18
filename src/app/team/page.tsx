import Navigation from "@/components/sections/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, Linkedin, Github, Twitter } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      expertise: "AI & Retail Strategy Expert",
      bio: "Former McKinsey partner with 15+ years in retail transformation and AI strategy. PhD in Computer Science from Stanford.",
      image: "/api/placeholder/300/300",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      expertise: "Machine Learning & Architecture",
      bio: "Ex-Google engineering leader with expertise in large-scale ML systems. Built AI platforms used by millions of users.",
      image: "/api/placeholder/300/300",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Lisa Wang",
      role: "VP of Product",
      expertise: "Product Innovation & UX",
      bio: "Former Amazon PM who led innovative retail products. Expert in user-centric design and product strategy.",
      image: "/api/placeholder/300/300",
      linkedin: "#"
    },
    {
      name: "James Thompson",
      role: "Head of Sales",
      expertise: "Enterprise Partnerships",
      bio: "20+ years in enterprise sales with Fortune 500 retail clients. Deep understanding of retail operations.",
      image: "/api/placeholder/300/300",
      linkedin: "#"
    },
    {
      name: "Dr. Raj Patel",
      role: "Lead Data Scientist",
      expertise: "AI Research & Development",
      bio: "PhD in Machine Learning from MIT. Published researcher in retail AI and predictive analytics.",
      image: "/api/placeholder/300/300",
      linkedin: "#",
      github: "#"
    }
  ]

  const values = [
    {
      title: "Innovation",
      description: "We push the boundaries of what's possible in retail AI, constantly exploring new technologies and methodologies."
    },
    {
      title: "Customer Success",
      description: "Our customers' success is our success. We're committed to delivering measurable value and exceptional outcomes."
    },
    {
      title: "Data-Driven Decisions",
      description: "Every decision we make is backed by data and analytics, ensuring we're always moving in the right direction."
    },
    {
      title: "Transparency",
      description: "We believe in open communication, honest feedback, and transparent processes with our team and customers."
    },
    {
      title: "Collaboration",
      description: "Great achievements come from great teams. We foster a collaborative environment where everyone's voice matters."
    }
  ]

  const techStack = [
    "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing",
    "Cloud Computing", "Real-time Analytics", "Predictive Modeling", "Big Data Processing",
    "API Development", "Microservices", "Docker", "Kubernetes"
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 500",
      zipCode: "San Francisco, CA 94105",
      type: "Headquarters"
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 15",
      zipCode: "New York, NY 10013",
      type: "Sales Office"
    },
    {
      city: "Austin",
      address: "789 Congress Ave, Building B",
      zipCode: "Austin, TX 78701",
      type: "R&D Center"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#2E5A87] to-[#1a4066] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About UnAbandon AI</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pioneering the future of retail intelligence through innovative AI solutions
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-[#2E5A87] mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To make retail intelligent, agile, and customer-centric through AI innovation that transforms how businesses understand and serve their customers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-[#2E5A87] mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where every retail decision is powered by intelligent insights, creating seamless experiences for customers and sustainable growth for businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2E5A87] mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts combines deep retail knowledge with cutting-edge AI expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#2E5A87] to-[#4CAF50] flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-[#2E5A87] font-semibold">{member.role}</p>
                    <Badge variant="secondary" className="mt-2">
                      {member.expertise}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    {member.linkedin && (
                      <Button variant="ghost" size="sm" className="p-2">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    )}
                    {member.github && (
                      <Button variant="ghost" size="sm" className="p-2">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                    {member.twitter && (
                      <Button variant="ghost" size="sm" className="p-2">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2E5A87] mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-[#2E5A87] transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#2E5A87] text-center">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2E5A87] mb-4">Our Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies that power our AI solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-[#2E5A87] text-[#2E5A87] hover:bg-[#2E5A87] hover:text-white transition-colors duration-200">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2E5A87] mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find us in key innovation hubs across the United States
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-[#2E5A87] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{office.city}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {office.type}
                  </Badge>
                  <p className="text-gray-600 text-sm">
                    {office.address}<br />
                    {office.zipCode}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-br from-[#2E5A87] to-[#1a4066] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Ready to transform your retail business with AI? Let's start the conversation.
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-blue-200" />
              <span className="text-lg">hello@unabandon.ai</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-blue-200" />
              <span className="text-lg">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#2E5A87] mb-6">Join Our Team</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented individuals who share our passion for innovation and retail transformation. 
              Join us in building the future of retail intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#2E5A87] hover:bg-[#1a4066] text-white px-8 py-3 text-lg">
                View Open Positions
              </Button>
              <Button variant="outline" className="border-[#2E5A87] text-[#2E5A87] hover:bg-[#2E5A87] hover:text-white px-8 py-3 text-lg">
                Submit Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}