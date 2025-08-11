"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Cross, Music, BookOpen, Heart, ChevronLeft, ChevronRight } from "lucide-react"

export default function ServicesPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  useEffect(() => {
    // GSAP animations
    if (typeof window !== "undefined" && window.gsap) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      // Hero section animation
      gsap.fromTo(".services-hero", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 })

      // Service cards animation
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".services-section",
            start: "top 80%",
          },
        },
      )

      // Calendar animation
      gsap.fromTo(
        ".calendar-section",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".calendar-section",
            start: "top 70%",
          },
        },
      )

      // Special events animation
      gsap.fromTo(
        ".event-card",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".events-section",
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  // Sample events data
  const upcomingEvents = [
    {
      date: "2024-12-15",
      title: "Christmas Carol Service",
      time: "7:00 PM",
      type: "Special Service",
      description: "Join us for a beautiful evening of traditional Christmas carols and readings.",
    },
    {
      date: "2024-12-22",
      title: "Christmas Eve Service",
      time: "11:00 PM",
      type: "Holy Service",
      description: "Celebrate the birth of our Lord with midnight liturgy and communion.",
    },
    {
      date: "2024-12-25",
      title: "Christmas Day Service",
      time: "10:00 AM",
      type: "Festival",
      description: "Christmas morning celebration with special prayers and fellowship.",
    },
    {
      date: "2024-12-31",
      title: "New Year's Eve Prayer",
      time: "11:30 PM",
      type: "Prayer Service",
      description: "Welcome the new year with thanksgiving prayers and blessings.",
    },
    {
      date: "2025-01-06",
      title: "Epiphany Celebration",
      time: "10:00 AM",
      type: "Festival",
      description: "Commemorate the baptism of Jesus with special liturgy and water blessing.",
    },
    {
      date: "2025-01-12",
      title: "Youth Fellowship Meeting",
      time: "6:00 PM",
      type: "Fellowship",
      description: "Monthly gathering for young adults with discussion, prayer, and community.",
    },
  ]

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const navigateMonth = (direction: number) => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + direction)
      return newDate
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-stone-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="services-hero text-center space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900">
              Worship <span className="text-yellow-600">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Join us in sacred worship, fellowship, and spiritual growth through our traditional Orthodox liturgy and
              community gatherings
            </p>
          </div>
        </div>
      </section>

      {/* Regular Services Section */}
      <section className="services-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Regular <span className="text-yellow-600">Services</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Experience the beauty of Orthodox worship through our weekly services and special celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sunday Divine Liturgy */}
            <Card className="service-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cross className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="font-serif text-xl text-stone-900">Sunday Divine Liturgy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">10:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">Every Sunday</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">Main Sanctuary</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Our primary worship service featuring traditional Orthodox liturgy, communion, and community prayer.
                  All are welcome to join us in this sacred celebration.
                </p>
                <Badge variant="secondary" className="w-full justify-center">
                  Holy Communion Available
                </Badge>
              </CardContent>
            </Card>

            {/* Wednesday Evening Prayer */}
            <Card className="service-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="font-serif text-xl text-stone-900">Evening Prayer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">7:00 PM - 8:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">Every Wednesday</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">Chapel</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  A peaceful midweek service of prayer, scripture reading, and reflection. Perfect for spiritual renewal
                  and community connection.
                </p>
                <Badge variant="outline" className="w-full justify-center">
                  Contemplative Service
                </Badge>
              </CardContent>
            </Card>

            {/* Friday Bible Study */}
            <Card className="service-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="font-serif text-xl text-stone-900">Bible Study</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">7:30 PM - 9:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">Every Friday</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">Fellowship Hall</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Interactive study of Orthodox theology and scripture with discussion, questions, and practical
                  application for daily life.
                </p>
                <Badge variant="outline" className="w-full justify-center">
                  All Levels Welcome
                </Badge>
              </CardContent>
            </Card>

            {/* Saturday Vespers */}
            <Card className="service-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="font-serif text-xl text-stone-900">Saturday Vespers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">6:00 PM - 7:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">Every Saturday</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">Main Sanctuary</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Traditional evening prayer service with beautiful Orthodox chanting and preparation for Sunday
                  worship.
                </p>
                <Badge variant="outline" className="w-full justify-center">
                  Chanted Service
                </Badge>
              </CardContent>
            </Card>

            {/* Youth Fellowship */}
            <Card className="service-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="font-serif text-xl text-stone-900">Youth Fellowship</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">6:00 PM - 8:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">Second Saturday</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">Youth Center</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Dynamic gathering for teens and young adults with games, discussion, service projects, and spiritual
                  growth activities.
                </p>
                <Badge variant="secondary" className="w-full justify-center">
                  Ages 13-25
                </Badge>
              </CardContent>
            </Card>

            {/* Monthly Community Meal */}
            <Card className="service-card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="font-serif text-xl text-stone-900">Community Meal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">12:30 PM - 2:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">First Sunday</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-600" />
                  <span className="text-stone-700">Fellowship Hall</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Shared meal following Sunday service fostering community bonds and welcoming newcomers to our church
                  family.
                </p>
                <Badge variant="secondary" className="w-full justify-center">
                  Free for All
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Calendar Section */}
      <section className="calendar-section py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Events <span className="text-yellow-600">Calendar</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Stay connected with upcoming special services, celebrations, and community events
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Calendar Widget */}
            <div className="lg:col-span-1">
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" onClick={() => navigateMonth(-1)} className="hover:bg-yellow-50">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <CardTitle className="font-serif text-xl text-stone-900">
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => navigateMonth(1)} className="hover:bg-yellow-50">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="p-2 font-semibold text-stone-600">
                        {day}
                      </div>
                    ))}
                    {/* Calendar days would be generated here */}
                    {Array.from({ length: 35 }, (_, i) => (
                      <div
                        key={i}
                        className={`p-2 text-stone-700 hover:bg-yellow-50 rounded cursor-pointer ${
                          i === 14 ? "bg-yellow-500 text-white" : ""
                        }`}
                      >
                        {i < 31 ? i + 1 : ""}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Events */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card
                    key={index}
                    className="event-card bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border-0"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-yellow-600" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-serif text-lg font-bold text-stone-900">{event.title}</h4>
                              <div className="flex items-center space-x-4 mt-2 text-sm text-stone-600">
                                <span className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {new Date(event.date).toLocaleDateString()}
                                </span>
                                <span className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {event.time}
                                </span>
                              </div>
                            </div>
                            <Badge variant="outline" className="ml-4">
                              {event.type}
                            </Badge>
                          </div>
                          <p className="text-stone-600 mt-3 leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-8">
            Plan Your <span className="text-yellow-600">Visit</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Location</h3>
              <p className="text-stone-600">
                123 Church Street
                <br />
                City, State 12345
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Service Times</h3>
              <p className="text-stone-600">
                Sunday: 10:00 AM
                <br />
                Wednesday: 7:00 PM
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">What to Expect</h3>
              <p className="text-stone-600">
                Warm welcome
                <br />
                Traditional worship
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-stone-600 leading-relaxed">
              Whether you're visiting for the first time or returning after time away, we welcome you with open hearts.
              Our services blend ancient Orthodox traditions with contemporary relevance.
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Contact Us for More Information
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
