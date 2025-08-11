"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Cross,
  Users,
  Calendar,
  Download,
  Play,
  Clock,
  ChevronRight,
  Scroll,
  Heart,
  Lightbulb,
  GraduationCap,
} from "lucide-react"

export default function FaithStudyPage() {
  const [activeStudy, setActiveStudy] = useState("foundations")

  useEffect(() => {
    // GSAP animations
    if (typeof window !== "undefined" && window.gsap) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      // Hero section animation
      gsap.fromTo(".faith-hero", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 })

      // Study cards animation
      gsap.fromTo(
        ".study-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".studies-section",
            start: "top 80%",
          },
        },
      )

      // Resources animation
      gsap.fromTo(
        ".resource-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".resources-section",
            start: "top 80%",
          },
        },
      )

      // Timeline animation
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".timeline-section",
            start: "top 80%",
          },
        },
      )
    }
  }, [])

  const studyPrograms = [
    {
      id: "foundations",
      title: "Foundations of Orthodox Faith",
      level: "Beginner",
      duration: "8 weeks",
      sessions: 8,
      description: "An introduction to the core beliefs, practices, and history of the Orthodox Church.",
      topics: [
        "The Holy Trinity",
        "Scripture and Tradition",
        "The Seven Sacraments",
        "Orthodox Worship",
        "Icons and Symbolism",
        "Prayer and Fasting",
        "Church Calendar",
        "Saints and Martyrs",
      ],
    },
    {
      id: "theology",
      title: "Orthodox Theology Deep Dive",
      level: "Intermediate",
      duration: "12 weeks",
      sessions: 12,
      description: "Advanced study of Orthodox theological concepts and their practical applications.",
      topics: [
        "Patristic Theology",
        "Christology",
        "Pneumatology",
        "Ecclesiology",
        "Eschatology",
        "Theosis (Deification)",
        "Liturgical Theology",
        "Comparative Theology",
        "Modern Orthodox Thought",
        "Ecumenical Councils",
        "Monastic Tradition",
        "Orthodox Ethics",
      ],
    },
    {
      id: "history",
      title: "Church History & Tradition",
      level: "All Levels",
      duration: "10 weeks",
      sessions: 10,
      description: "Journey through 2000 years of Orthodox Church history and development.",
      topics: [
        "Apostolic Era",
        "Early Church Fathers",
        "Ecumenical Councils",
        "Byzantine Empire",
        "Great Schism",
        "Orthodox Missions",
        "Modern Challenges",
        "Orthodox Diaspora",
        "Contemporary Issues",
        "Future of Orthodoxy",
      ],
    },
  ]

  const resources = [
    {
      category: "Essential Readings",
      items: [
        { title: "The Orthodox Church", author: "Timothy Ware", type: "book" },
        { title: "The Orthodox Way", author: "Kallistos Ware", type: "book" },
        { title: "For the Life of the World", author: "Alexander Schmemann", type: "book" },
        { title: "The Mystical Theology of the Eastern Church", author: "Vladimir Lossky", type: "book" },
      ],
    },
    {
      category: "Study Guides",
      items: [
        { title: "Orthodox Faith Study Guide", author: "MGOCSM", type: "pdf" },
        { title: "Liturgy Companion", author: "Parish Team", type: "pdf" },
        { title: "Prayer Book Guide", author: "Fr. Thomas", type: "pdf" },
        { title: "Fasting Calendar Explained", author: "Church Council", type: "pdf" },
      ],
    },
    {
      category: "Audio Resources",
      items: [
        { title: "Orthodox Theology Lectures", author: "Various Speakers", type: "audio" },
        { title: "Patristic Readings", author: "Fr. John", type: "audio" },
        { title: "Liturgical Music Guide", author: "Sarah Joseph", type: "audio" },
        { title: "Saints' Lives Podcast", author: "MGOCSM", type: "audio" },
      ],
    },
  ]

  const churchHistory = [
    { year: "52 AD", event: "St. Thomas arrives in India", description: "Foundation of Indian Christianity" },
    { year: "325 AD", event: "Council of Nicaea", description: "First Ecumenical Council" },
    { year: "451 AD", event: "Council of Chalcedon", description: "Definition of Christ's nature" },
    { year: "1054 AD", event: "Great Schism", description: "East-West Church division" },
    { year: "1665 AD", event: "Malankara Church Formation", description: "Independent Orthodox Church" },
    { year: "1912 AD", event: "Catholicate Established", description: "Autonomous church status" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-stone-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="faith-hero text-center space-y-6">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900">
              Orthodox Faith <span className="text-yellow-600">Study</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Deepen your understanding of Orthodox Christianity through structured study programs, theological
              resources, and guided learning experiences
            </p>
          </div>
        </div>
      </section>

      {/* Study Programs Section */}
      <section className="studies-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Study <span className="text-yellow-600">Programs</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Choose from our structured learning paths designed for different levels of Orthodox knowledge
            </p>
          </div>

          <Tabs value={activeStudy} onValueChange={setActiveStudy} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 bg-stone-100">
              {studyPrograms.map((program) => (
                <TabsTrigger
                  key={program.id}
                  value={program.id}
                  className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white font-semibold"
                >
                  {program.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {studyPrograms.map((program) => (
              <TabsContent key={program.id} value={program.id}>
                <Card className="study-card bg-white shadow-xl border-0">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center space-x-4 mb-6">
                          <Badge className="bg-yellow-500 text-white">{program.level}</Badge>
                          <Badge variant="outline">{program.duration}</Badge>
                          <Badge variant="outline">{program.sessions} Sessions</Badge>
                        </div>
                        <h3 className="font-serif text-3xl font-bold text-stone-900 mb-4">{program.title}</h3>
                        <p className="text-stone-600 text-lg leading-relaxed mb-8">{program.description}</p>
                        <div className="flex space-x-4">
                          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                            <GraduationCap className="w-4 h-4 mr-2" />
                            Enroll Now
                          </Button>
                          <Button variant="outline" className="border-stone-300 bg-transparent">
                            <Download className="w-4 h-4 mr-2" />
                            Download Syllabus
                          </Button>
                        </div>
                      </div>
                      <div className="bg-stone-50 p-8 lg:p-12">
                        <h4 className="font-serif text-xl font-bold text-stone-900 mb-6">Course Topics</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {program.topics.map((topic, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-xs font-bold text-yellow-600">{index + 1}</span>
                              </div>
                              <span className="text-stone-700">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Study <span className="text-yellow-600">Resources</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Access our comprehensive library of Orthodox theological resources and study materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-stone-900 flex items-center">
                    {categoryIndex === 0 && <BookOpen className="w-5 h-5 mr-2 text-yellow-600" />}
                    {categoryIndex === 1 && <Scroll className="w-5 h-5 mr-2 text-yellow-600" />}
                    {categoryIndex === 2 && <Play className="w-5 h-5 mr-2 text-yellow-600" />}
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="resource-item flex items-start space-x-3 p-3 hover:bg-stone-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.type === "book" && <BookOpen className="w-4 h-4 text-yellow-600" />}
                        {item.type === "pdf" && <Download className="w-4 h-4 text-yellow-600" />}
                        {item.type === "audio" && <Play className="w-4 h-4 text-yellow-600" />}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-stone-900 text-sm">{item.title}</h4>
                        <p className="text-stone-600 text-xs">{item.author}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-stone-400" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Church History Timeline */}
      <section className="timeline-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Our <span className="text-yellow-600">Heritage</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Trace the rich history of Orthodox Christianity from apostolic times to the present
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-200"></div>

            <div className="space-y-12">
              {churchHistory.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="bg-white shadow-lg border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className="bg-yellow-500 text-white font-bold">{item.year}</Badge>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">{item.event}</h3>
                        <p className="text-stone-600 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <Cross className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Study Groups Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Join a <span className="text-yellow-600">Study Group</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Learn together with fellow believers in our guided study groups and discussion circles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">Adult Study Group</h3>
                <p className="text-stone-600 text-sm">
                  Weekly discussions on Orthodox theology and contemporary faith issues
                </p>
                <div className="text-sm text-stone-500">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>Thursdays 7:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>90 minutes</span>
                  </div>
                </div>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white w-full">Join Group</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">Women's Circle</h3>
                <p className="text-stone-600 text-sm">Exploring Orthodox spirituality and the lives of female saints</p>
                <div className="text-sm text-stone-500">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>Saturdays 10:00 AM</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>2 hours</span>
                  </div>
                </div>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white w-full">Join Group</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900">Young Adults</h3>
                <p className="text-stone-600 text-sm">Faith discussions for young professionals and college students</p>
                <div className="text-sm text-stone-500">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>Sundays 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>75 minutes</span>
                  </div>
                </div>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white w-full">Join Group</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-stone-800 to-stone-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">Begin Your Journey</h2>
          <p className="text-xl text-stone-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're new to Orthodox Christianity or seeking to deepen your understanding, our study programs
            provide a supportive environment for spiritual growth and learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg font-semibold">
              <GraduationCap className="w-5 h-5 mr-2" />
              Start Learning Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              Contact Study Coordinator
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
