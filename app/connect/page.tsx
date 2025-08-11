"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Users,
  Heart,
  Send,
  MessageCircle,
  WaypointsIcon as Directions,
  Facebook,
  Instagram,
  Youtube,
  Globe,
} from "lucide-react"

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  useEffect(() => {
    // GSAP animations
    if (typeof window !== "undefined" && window.gsap) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      // Hero section animation
      gsap.fromTo(".connect-hero", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 })

      // Contact cards animation
      gsap.fromTo(
        ".contact-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 80%",
          },
        },
      )

      // Form animation
      gsap.fromTo(
        ".contact-form",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".form-section",
            start: "top 70%",
          },
        },
      )

      // Map animation
      gsap.fromTo(
        ".map-section",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".form-section",
            start: "top 70%",
          },
        },
      )

      // Ways to connect animation
      gsap.fromTo(
        ".connect-option",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".ways-section",
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Church Street", "City, State 12345", "United States"],
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Main Office: +1 (555) 123-4567", "Emergency: +1 (555) 123-4568", "Available 24/7"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@mgocsm.org", "pastor@mgocsm.org", "We respond within 24 hours"],
      action: "Send Email",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: After Service"],
      action: "Plan Visit",
    },
  ]

  const waysToConnect = [
    {
      icon: Users,
      title: "Join a Ministry",
      description: "Get involved in our various ministries and service opportunities",
      options: ["Choir Ministry", "Youth Group", "Community Outreach", "Bible Study Groups"],
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Participate in our regular services and special celebrations",
      options: ["Sunday Services", "Bible Study", "Fellowship Meals", "Special Events"],
    },
    {
      icon: Heart,
      title: "Volunteer",
      description: "Share your talents and time to serve our community",
      options: ["Teaching", "Music", "Hospitality", "Maintenance"],
    },
    {
      icon: MessageCircle,
      title: "Stay Connected",
      description: "Follow us on social media and join our newsletter",
      options: ["Facebook", "Instagram", "YouTube", "Newsletter"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-stone-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="connect-hero text-center space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900">
              Connect With <span className="text-yellow-600">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you're seeking spiritual guidance, want to join our community, or have
              questions about our faith, we're here to help
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Get In <span className="text-yellow-600">Touch</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Multiple ways to reach us and connect with our church community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="contact-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <info.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-stone-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white w-full">{info.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="form-section py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="contact-form">
              <Card className="bg-white shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-stone-900 flex items-center">
                    <Send className="w-6 h-6 mr-3 text-yellow-600" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                          className="border-stone-300 focus:border-yellow-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          className="border-stone-300 focus:border-yellow-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="border-stone-300 focus:border-yellow-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => handleInputChange("inquiryType", value)}
                        >
                          <SelectTrigger className="border-stone-300 focus:border-yellow-500">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Information</SelectItem>
                            <SelectItem value="membership">Church Membership</SelectItem>
                            <SelectItem value="baptism">Baptism</SelectItem>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="funeral">Funeral Services</SelectItem>
                            <SelectItem value="counseling">Pastoral Counseling</SelectItem>
                            <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                            <SelectItem value="prayer">Prayer Request</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief subject of your message"
                        required
                        className="border-stone-300 focus:border-yellow-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please share your message, questions, or prayer requests..."
                        rows={6}
                        required
                        className="border-stone-300 focus:border-yellow-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 text-lg font-semibold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>

                  <div className="text-center pt-4 border-t border-stone-200">
                    <p className="text-stone-600 text-sm">
                      We typically respond within 24 hours. For urgent matters, please call us directly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map and Location Info */}
            <div className="map-section space-y-8">
              <Card className="bg-white shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-stone-900 flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-yellow-600" />
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Map Placeholder */}
                  <div className="aspect-video bg-stone-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-amber-100"></div>
                    <div className="relative z-10 text-center space-y-4">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-stone-900">MGOCSM Church</h3>
                        <p className="text-stone-600">123 Church Street, City, State 12345</p>
                      </div>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                        <Directions className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>

                  {/* Location Details */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-stone-900">Address</h4>
                        <p className="text-stone-600 text-sm">
                          123 Church Street
                          <br />
                          City, State 12345
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-stone-900">Service Times</h4>
                        <p className="text-stone-600 text-sm">
                          Sunday Divine Liturgy: 10:00 AM
                          <br />
                          Wednesday Evening Prayer: 7:00 PM
                          <br />
                          Saturday Vespers: 6:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-stone-900">Parking & Accessibility</h4>
                        <p className="text-stone-600 text-sm">
                          Free parking available
                          <br />
                          Wheelchair accessible
                          <br />
                          Family-friendly facilities
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-stone-900 flex items-center">
                    <Globe className="w-6 h-6 mr-3 text-yellow-600" />
                    Follow Us Online
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-stone-600">Stay connected with our community through social media</p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2 border-stone-300 hover:bg-blue-50 bg-transparent"
                    >
                      <Facebook className="w-5 h-5 text-blue-600" />
                      <span>Facebook</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2 border-stone-300 hover:bg-pink-50 bg-transparent"
                    >
                      <Instagram className="w-5 h-5 text-pink-600" />
                      <span>Instagram</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2 border-stone-300 hover:bg-red-50 bg-transparent"
                    >
                      <Youtube className="w-5 h-5 text-red-600" />
                      <span>YouTube</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2 border-stone-300 hover:bg-yellow-50 bg-transparent"
                    >
                      <Mail className="w-5 h-5 text-yellow-600" />
                      <span>Newsletter</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Connect */}
      <section className="ways-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Ways to <span className="text-yellow-600">Connect</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover the many opportunities to get involved and build meaningful relationships in our church family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {waysToConnect.map((way, index) => (
              <Card
                key={index}
                className="connect-option bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <way.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">{way.title}</h3>
                      <p className="text-stone-600 mb-4">{way.description}</p>
                      <div className="space-y-2">
                        {way.options.map((option, optionIndex) => (
                          <div key={optionIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <span className="text-stone-700 text-sm">{option}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white">Learn More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-stone-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-2xl font-bold text-white mb-4">Need Immediate Pastoral Care?</h3>
          <p className="text-stone-300 mb-6">
            For urgent pastoral needs, emergencies, or crisis situations, our clergy are available 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Emergency Line: (555) 123-4568
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-800 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              pastor@mgocsm.org
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
