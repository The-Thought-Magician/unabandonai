import Navigation from "@/components/sections/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, Linkedin, Github, Twitter } from "lucide-react"
import Image from "next/image"

type TeamMember = {
  name: string;
  role: string;
  expertise: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
};

export default function AboutPage() {
  const teamMembers: TeamMember[] = [
    {
      name: "Anand Muralidaran",
      role: "Co-Founder & CEO",
      expertise: "Retail & AI Strategy",
      bio: "28 years with F1000 Retailers building Stores, Supply Chain, Digital & AI Solutions. Led Global Retail GTM, BD, Sales and Partnerships at NVIDIA through the crucial years of Enterprise AI",
      image: "https://images.squarespace-cdn.com/content/v1/6756c5acb680c2769a5b6b8b/d3ae3866-58c5-41e1-9a58-43d663820bd3/Anand.jpeg",
      linkedin: "#"
    },
    {
      name: "Jon Glick",
      role: "Co-Founder & CTO",
      expertise: "Search & AI/ML Product",
      bio: "Product Leader with 25 years in Search, AI/ML, and eCommerce. Led Search at eBay, Yahoo! Search Technologies, and UnitedHealth Care",
      image: "https://images.squarespace-cdn.com/content/v1/6756c5acb680c2769a5b6b8b/0602d589-c2e0-4daf-8939-a64a57075a68/Jon.png",
      linkedin: "#"
    },
    {
      name: "Sundar Moorthy",
      role: "Co-Founder & CPO",
      expertise: "Digital Transformation",
      bio: "Leading digital transformation initiatives for over 13 years. Developing AI solutions for startups & Enterprise",
      image: "https://images.squarespace-cdn.com/content/v1/6756c5acb680c2769a5b6b8b/e925f9eb-900c-41c8-8e3b-e48c85cfaf3d/Sundar.jpg",
      linkedin: "#"
    },
    {
      name: "Nagendra Jayanty",
      role: "Co-Founder & VP Supply Chain",
      expertise: "Supply Chain & Planning",
      bio: "Supply Chain Planning Leader with expertise in Merchandise Planning and Inventory Optimization. Building AI products in Supply Chain for Startups & Enterprise.",
      image: "https://images.squarespace-cdn.com/content/v1/6756c5acb680c2769a5b6b8b/8854408a-5119-4fda-b155-071c4027f29a/Nag+profile+pic.png",
      linkedin: "#"
    },
    {
      name: "Sunil Rawat",
      role: "Co-Founder & Advisor",
      expertise: "Enterprise AI & Risk Management",
      bio: "Trusted advisor to Fortune 250 CEOs and large, enduring companies navigating complex technology. Founder of Omniscience, supercompute scale AI for risk management in banking and life insurance.",
      image: "https://images.squarespace-cdn.com/content/v1/6756c5acb680c2769a5b6b8b/7a3150b3-2e74-4e6e-8131-c3d050985167/headshot+sunil.jpg",
      linkedin: "#"
    }
  ]

  const advisors = [
    {
      name: "Jim Miller",
      role: "Strategic Advisor",
      expertise: "Former CEO, CTO, Exec and Board Advisor",
      bio: "Google, early Amazon Executive. Board Member at The RealReal, LivePerson, Service Express",
      image: "https://images.squarespace-cdn.com/content/v1/6756c5acb680c2769a5b6b8b/1b654a06-cd1c-4fec-b379-9719e285b084/Jim+Miller.png",
      linkedin: "#"
    },
    {
      name: "Rajlakshmi (Raj) Shankaran",
      role: "Strategic Advisor",
      expertise: "Retail Merchandising Expert",
      bio: "Former Retail Merchandising Executive at Walmart, SVP Global Retail & Vertical Product Strategy at Circana. Founding Board Member - Bold Futures Academy",
      image: "https://images.squarespace-cdn.com/content/v1/6756c5acb680c2769a5b6b8b/f6cb31e5-fe66-4bb9-97cc-cdcd951c0208/Raj+Shankaran+2025.jpeg",
      linkedin: "#"
    },
    {
      name: "Debesh Khattoi",
      role: "Strategic Advisor",
      expertise: "Retail Technology Executive",
      bio: "30+ year in Retail, Technology and Business. Former Executive at Target, Finish Line, Meijer and Container Store. CIO at National Co+Op Grocers",
      image: "https://images.squarespace-cdn.com/content/v1/6756c5acb680c2769a5b6b8b/925d7e65-9282-4298-862a-99d928036f7d/Debesh+Khattoi.jpeg",
      linkedin: "#"
    },
    {
      name: "Alex Alexander",
      role: "Strategic Advisor",
      expertise: "Global Retail Technology",
      bio: "Former CIO and CTO at Walmart UK, Emirates, Yoox Net-a-Porter. European Digital SMEs Ambassador and a Board Advisor & Associated Partner of the European Artificial Intelligence Skills Alliance",
      image: "https://images.squarespace-cdn.com/content/v1/6756c5acb680c2769a5b6b8b/2b91f781-f26c-42c3-9352-edac7712626e/Alex_Xoots.jpg",
      linkedin: "#"
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
    <div className="min-h-screen bg-surface-token">
      <Navigation />
      {/* Header Section */}
      <section className="gradient-hero text-inverse-token py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About UnAbandon AI</h1>
          <p className="text-xl text-inverse-token/80 max-w-3xl mx-auto">
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
        <CardTitle className="text-2xl font-bold mb-4" style={{ color: 'rgb(var(--brand-primary))' }}>Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
        <p className="text-lg text-base-token leading-relaxed">
                  Translate Customer Behavior into Actionable Intelligence with AI Agents for front and back-office functions powered by Domain Language Models
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold mb-4" style={{ color: 'rgb(var(--brand-primary))' }}>Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
        <p className="text-lg text-base-token leading-relaxed">
                  Help Retailers thrive again by harnessing customer intelligence across channels/modes and sync Supply with real-time Demand
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
  <section className="py-16 bg-surface-token">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(var(--brand-primary))' }}>Our Team</h2>
    <p className="text-lg text-muted-token max-w-2xl mx-auto">
              Our diverse team of experts combines deep retail knowledge with cutting-edge AI expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
      <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-elevate-token">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                    />
        <h3 className="text-xl font-bold text-base-token">{member.name}</h3>
        <p className="font-semibold" style={{ color: 'rgb(var(--brand-primary))' }}>{member.role}</p>
                    <Badge variant="secondary" className="mt-2">
                      {member.expertise}
                    </Badge>
                  </div>
      <p className="text-muted-token text-sm mb-4 text-center">
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

      {/* Strategic Advisors Section */}
  <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(var(--brand-primary))' }}>Strategic Advisors</h2>
    <p className="text-lg text-muted-token max-w-2xl mx-auto">
              Industry leaders and executives guiding our strategic vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
    {advisors.map((advisor, index) => (
      <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-elevate-token">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                    <div className="flex-1">
          <h3 className="text-xl font-bold text-base-token mb-1">{advisor.name}</h3>
          <p className="font-semibold text-sm" style={{ color: 'rgb(var(--brand-primary))' }}>{advisor.role}</p>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {advisor.expertise}
                      </Badge>
                    </div>
                  </div>
      <p className="text-muted-token text-sm mb-4">
                    {advisor.bio}
                  </p>
                  <div className="flex justify-start">
                    <Button variant="ghost" size="sm" className="p-2">
                      <Linkedin className="w-4 h-4" />
                    </Button>
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
    <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(var(--brand-primary))' }}>Our Values</h2>
    <p className="text-lg text-muted-token max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
      <Card key={index} className="border-2 transition-colors duration-300 bg-elevate-token" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                <CardHeader>
      <CardTitle className="text-xl font-bold text-center" style={{ color: 'rgb(var(--brand-primary))' }}>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
      <p className="text-base-token text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
  <section className="py-16 bg-surface-token">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(var(--brand-primary))' }}>Our Technology Stack</h2>
    <p className="text-lg text-muted-token max-w-2xl mx-auto">
              Cutting-edge technologies that power our AI solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
        <Badge key={index} variant="outline" className="px-4 py-2 text-sm transition-colors duration-200" style={{ borderColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--brand-primary))' }}>
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
    <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(var(--brand-primary))' }}>Our Locations</h2>
    <p className="text-lg text-muted-token max-w-2xl mx-auto">
              Find us in key innovation hubs across the United States
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {offices.map((office, index) => (
      <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-elevate-token">
                <CardContent className="p-6 text-center">
      <MapPin className="w-8 h-8 mx-auto mb-4" style={{ color: 'rgb(var(--brand-primary))' }} />
      <h3 className="text-xl font-bold text-base-token mb-2">{office.city}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {office.type}
                  </Badge>
      <p className="text-muted-token text-sm">
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
  <section className="py-16 gradient-hero text-inverse-token">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
    <p className="text-xl text-inverse-token/80 max-w-2xl mx-auto mb-8">
              Ready to transform your retail business with AI? Let's start the conversation.
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex items-center space-x-3">
      <Mail className="w-6 h-6" style={{ color: 'rgba(255,255,255,0.8)' }} />
              <span className="text-lg">hello@unabandon.ai</span>
            </div>
            <div className="flex items-center space-x-3">
      <Phone className="w-6 h-6" style={{ color: 'rgba(255,255,255,0.8)' }} />
              <span className="text-lg">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
  <section className="py-16 bg-surface-token">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold mb-6" style={{ color: 'rgb(var(--brand-primary))' }}>Join Our Team</h2>
    <p className="text-lg text-muted-token mb-8">
              We're always looking for talented individuals who share our passion for innovation and retail transformation. 
              Join us in building the future of retail intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button className="px-8 py-3 text-lg" style={{ backgroundColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--text-inverse))' }}>
                View Open Positions
              </Button>
      <Button variant="outline" className="px-8 py-3 text-lg" style={{ borderColor: 'rgb(var(--brand-primary))', color: 'rgb(var(--brand-primary))' }}>
                Submit Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}