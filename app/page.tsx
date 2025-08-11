"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, BookOpen, Heart, ArrowRight, Play } from "lucide-react"

export default function HomePage() {
  useEffect(() => {
    // GSAP animations
    if (typeof window !== "undefined" && window.gsap) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      // Hero animations
      gsap.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 })

      gsap.fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.6 })

      gsap.fromTo(".hero-buttons", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.9 })

      // Feature cards animation
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 80%",
          },
        },
      )

      // Welcome section animation
      gsap.fromTo(
        ".welcome-content",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".welcome-section",
            start: "top 70%",
          },
        },
      )
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen bg-gradient-to-br from-stone-50 via-yellow-50 to-amber-50 flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-stone-400 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-yellow-400 rounded-full"></div>
        </div>

        <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
          <h1 className="hero-title font-serif text-5xl md:text-7xl font-bold text-stone-900 leading-tight">
            Welcome to
            <span className="block text-yellow-600">MGOCSM</span>
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            Malankara Orthodox Syrian Church - A sacred community rooted in ancient traditions, fostering spiritual
            growth, worship, and fellowship in Christ
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Our Community
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-stone-700 text-stone-700 hover:bg-stone-700 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-transparent"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Services
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-stone-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="welcome-content space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900">
                A Place of <span className="text-yellow-600">Sacred Worship</span>
              </h2>

              <p className="text-lg text-stone-600 leading-relaxed">
                For generations, our church has been a beacon of Orthodox faith, preserving the rich traditions of the
                Malankara Orthodox Syrian Church while nurturing a vibrant community of believers seeking spiritual
                growth and divine connection.
              </p>

              <p className="text-lg text-stone-600 leading-relaxed">
                We invite you to experience the beauty of our liturgical worship, the warmth of our fellowship, and the
                depth of our ancient faith traditions that continue to guide and inspire our community today.
              </p>

              <Button className="bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Learn About Our Faith
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl p-8 shadow-2xl">
                <div className="w-full h-full bg-stone-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">Faith • Community • Service</h3>
                    <p className="text-stone-600">United in Christ's love</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Experience Our <span className="text-yellow-600">Community</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover the many ways to connect, grow, and serve within our church family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="feature-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">Worship Services</h3>
                <p className="text-stone-600">
                  Join us for traditional Orthodox liturgy and contemporary worship experiences
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">Community Groups</h3>
                <p className="text-stone-600">
                  Connect with fellow believers through small groups and fellowship activities
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">Faith Study</h3>
                <p className="text-stone-600">
                  Deepen your understanding through Orthodox theology and scripture study
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">Service & Outreach</h3>
                <p className="text-stone-600">
                  Make a difference in our community through various service opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-amber-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Begin Your Spiritual Journey</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Whether you're seeking spiritual growth, community connection, or a deeper understanding of Orthodox faith,
            we welcome you with open hearts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
            >
              Plan Your Visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 text-lg font-semibold rounded-lg bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
