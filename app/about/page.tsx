"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cross, Users, Heart, BookOpen, Mail, Phone } from "lucide-react"

export default function AboutPage() {
  useEffect(() => {
    // GSAP animations
    if (typeof window !== "undefined" && window.gsap) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      // Hero section animation
      gsap.fromTo(".about-hero", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 })

      // History section animation
      gsap.fromTo(
        ".history-content",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".history-section",
            start: "top 70%",
          },
        },
      )

      // Leadership cards animation
      gsap.fromTo(
        ".leadership-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".leadership-section",
            start: "top 80%",
          },
        },
      )

      // Faith pillars animation
      gsap.fromTo(
        ".faith-pillar",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".faith-section",
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-stone-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-hero text-center space-y-6">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <Cross className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900">About MGOCSM</h1>
            <p className="text-xl md:text-2xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Rooted in ancient Orthodox traditions, we are a vibrant community of believers dedicated to preserving our
              sacred heritage while nurturing spiritual growth in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Church History Section */}
      <section className="history-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="history-content space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900">
                Our <span className="text-yellow-600">Sacred Heritage</span>
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-stone-600 leading-relaxed">
                  The Malankara Orthodox Syrian Church traces its origins to the apostolic mission of St. Thomas the
                  Apostle, who brought Christianity to India in 52 AD. Our church represents one of the oldest Christian
                  communities in the world, maintaining an unbroken chain of apostolic succession.
                </p>

                <p className="text-lg text-stone-600 leading-relaxed">
                  Throughout centuries of challenges and triumphs, we have preserved the rich liturgical traditions,
                  theological depth, and spiritual practices that define Orthodox Christianity. Our community stands as
                  a testament to the enduring power of faith and the importance of maintaining our sacred heritage.
                </p>

                <p className="text-lg text-stone-600 leading-relaxed">
                  Today, we continue this legacy by fostering a community where ancient wisdom meets contemporary needs,
                  where traditional worship inspires modern discipleship, and where the timeless message of Christ's
                  love transforms lives.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">52 AD</div>
                  <div className="text-stone-600">Founded by St. Thomas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">1900+</div>
                  <div className="text-stone-600">Years of Heritage</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl p-8 shadow-2xl">
                <div className="w-full h-full bg-stone-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                      <BookOpen className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">Ancient Faith</h3>
                    <p className="text-stone-600">Preserving apostolic traditions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Our <span className="text-yellow-600">Leadership</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Meet the dedicated servants who guide our community in faith, worship, and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Senior Pastor */}
            <Card className="leadership-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">FR</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">Fr. Thomas Mathew</h3>
                  <Badge variant="secondary" className="mt-2">
                    Senior Pastor
                  </Badge>
                </div>
                <p className="text-stone-600 text-sm">
                  Leading our congregation with wisdom and compassion for over 15 years, Fr. Thomas brings deep
                  theological knowledge and pastoral care to our community.
                </p>
                <div className="flex justify-center space-x-3 pt-2">
                  <Mail className="w-4 h-4 text-yellow-600" />
                  <Phone className="w-4 h-4 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            {/* Associate Pastor */}
            <Card className="leadership-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-stone-400 to-stone-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">FR</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">Fr. John Abraham</h3>
                  <Badge variant="secondary" className="mt-2">
                    Associate Pastor
                  </Badge>
                </div>
                <p className="text-stone-600 text-sm">
                  Specializing in youth ministry and community outreach, Fr. John connects our ancient faith with
                  contemporary life and service.
                </p>
                <div className="flex justify-center space-x-3 pt-2">
                  <Mail className="w-4 h-4 text-yellow-600" />
                  <Phone className="w-4 h-4 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            {/* Church Secretary */}
            <Card className="leadership-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">MS</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">Mary Samuel</h3>
                  <Badge variant="secondary" className="mt-2">
                    Church Secretary
                  </Badge>
                </div>
                <p className="text-stone-600 text-sm">
                  Coordinating church activities and maintaining our community connections, Mary ensures smooth
                  operations and warm hospitality for all.
                </p>
                <div className="flex justify-center space-x-3 pt-2">
                  <Mail className="w-4 h-4 text-yellow-600" />
                  <Phone className="w-4 h-4 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            {/* Youth Director */}
            <Card className="leadership-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">DG</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">David George</h3>
                  <Badge variant="secondary" className="mt-2">
                    Youth Director
                  </Badge>
                </div>
                <p className="text-stone-600 text-sm">
                  Inspiring the next generation through dynamic programs, Bible study, and service opportunities that
                  build strong Christian character.
                </p>
                <div className="flex justify-center space-x-3 pt-2">
                  <Mail className="w-4 h-4 text-yellow-600" />
                  <Phone className="w-4 h-4 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            {/* Music Director */}
            <Card className="leadership-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">SJ</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">Sarah Joseph</h3>
                  <Badge variant="secondary" className="mt-2">
                    Music Director
                  </Badge>
                </div>
                <p className="text-stone-600 text-sm">
                  Leading our worship through traditional Orthodox chants and contemporary Christian music that lifts
                  hearts and souls to God.
                </p>
                <div className="flex justify-center space-x-3 pt-2">
                  <Mail className="w-4 h-4 text-yellow-600" />
                  <Phone className="w-4 h-4 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            {/* Community Outreach */}
            <Card className="leadership-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">RP</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">Rachel Philip</h3>
                  <Badge variant="secondary" className="mt-2">
                    Outreach Coordinator
                  </Badge>
                </div>
                <p className="text-stone-600 text-sm">
                  Organizing community service projects and charitable initiatives that demonstrate Christ's love
                  through practical action and care.
                </p>
                <div className="flex justify-center space-x-3 pt-2">
                  <Mail className="w-4 h-4 text-yellow-600" />
                  <Phone className="w-4 h-4 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faith Pillars Section */}
      <section className="faith-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Pillars of Our <span className="text-yellow-600">Faith</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              The foundational beliefs that guide our worship, community life, and spiritual journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="faith-pillar text-center space-y-4">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Cross className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Holy Trinity</h3>
              <p className="text-stone-600">
                We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.
              </p>
            </div>

            <div className="faith-pillar text-center space-y-4">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Sacred Scripture</h3>
              <p className="text-stone-600">
                The Holy Bible as the inspired Word of God, interpreted through Orthodox tradition and teaching.
              </p>
            </div>

            <div className="faith-pillar text-center space-y-4">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Sacraments</h3>
              <p className="text-stone-600">
                Seven holy sacraments that convey God's grace and mark important moments in our spiritual journey.
              </p>
            </div>

            <div className="faith-pillar text-center space-y-4">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Community</h3>
              <p className="text-stone-600">
                The church as the body of Christ, united in worship, fellowship, and service to God and neighbor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-stone-800 to-stone-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
          <blockquote className="text-xl md:text-2xl text-stone-200 leading-relaxed italic">
            "To preserve and proclaim the Orthodox faith, nurture spiritual growth through worship and fellowship, and
            serve our community with Christ's love, while maintaining our rich heritage for future generations."
          </blockquote>
          <div className="mt-8 pt-8 border-t border-stone-700">
            <p className="text-stone-300">
              Guided by the Holy Spirit and rooted in apostolic tradition, we strive to be a beacon of hope and faith in
              our community.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
