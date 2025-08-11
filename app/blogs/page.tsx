"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Play,
  Download,
  Calendar,
  Clock,
  User,
  Search,
  Filter,
  BookOpen,
  Headphones,
  Video,
  Heart,
  Share2,
  Eye,
} from "lucide-react"

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    // GSAP animations
    if (typeof window !== "undefined" && window.gsap) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      // Hero section animation
      gsap.fromTo(".blogs-hero", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 })

      // Featured sermon animation
      gsap.fromTo(
        ".featured-sermon",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".featured-section",
            start: "top 70%",
          },
        },
      )

      // Content cards animation
      gsap.fromTo(
        ".content-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".content-grid",
            start: "top 80%",
          },
        },
      )

      // Categories animation
      gsap.fromTo(
        ".category-filter",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".filters-section",
            start: "top 90%",
          },
        },
      )
    }
  }, [])

  // Sample content data
  const sermons = [
    {
      id: 1,
      title: "The Light of Christ in Dark Times",
      speaker: "Fr. Thomas Mathew",
      date: "2024-12-08",
      duration: "32 min",
      category: "sermon",
      type: "video",
      description: "Exploring how Christ's light guides us through life's challenges and uncertainties.",
      views: 245,
      featured: true,
    },
    {
      id: 2,
      title: "Understanding Orthodox Prayer",
      speaker: "Fr. John Abraham",
      date: "2024-12-01",
      duration: "28 min",
      category: "sermon",
      type: "audio",
      description: "A deep dive into the traditions and meaning behind Orthodox prayer practices.",
      views: 189,
      featured: false,
    },
    {
      id: 3,
      title: "Advent: Preparing Our Hearts",
      speaker: "Fr. Thomas Mathew",
      date: "2024-11-24",
      duration: "35 min",
      category: "sermon",
      type: "video",
      description: "Spiritual preparation during the Advent season and its significance in Orthodox tradition.",
      views: 312,
      featured: false,
    },
  ]

  const blogPosts = [
    {
      id: 4,
      title: "The Beauty of Orthodox Iconography",
      author: "Mary Samuel",
      date: "2024-12-05",
      readTime: "8 min read",
      category: "blog",
      type: "article",
      description:
        "Exploring the spiritual significance and artistic beauty of Orthodox icons in worship and devotion.",
      views: 156,
      featured: false,
    },
    {
      id: 5,
      title: "Fasting: A Spiritual Journey",
      author: "David George",
      date: "2024-11-28",
      readTime: "12 min read",
      category: "blog",
      type: "article",
      description: "Understanding the Orthodox approach to fasting as a path to spiritual growth and discipline.",
      views: 203,
      featured: false,
    },
    {
      id: 6,
      title: "Community Service and Faith",
      author: "Rachel Philip",
      date: "2024-11-20",
      readTime: "6 min read",
      category: "blog",
      type: "article",
      description: "How serving others strengthens our faith and builds stronger community bonds.",
      views: 178,
      featured: false,
    },
  ]

  const allContent = [...sermons, ...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const categories = [
    { id: "all", name: "All Content", count: allContent.length },
    { id: "sermon", name: "Sermons", count: sermons.length },
    { id: "blog", name: "Blog Posts", count: blogPosts.length },
  ]

  const filteredContent = allContent.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredContent = allContent.find((item) => item.featured)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-stone-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="blogs-hero text-center space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900">
              Sermons & <span className="text-yellow-600">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
              Deepen your faith through inspiring sermons, thoughtful reflections, and spiritual insights from our
              pastoral team and community leaders
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      {featuredContent && (
        <section className="featured-section py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                Featured <span className="text-yellow-600">Content</span>
              </h2>
            </div>

            <Card className="featured-sermon bg-gradient-to-r from-yellow-50 to-amber-50 shadow-xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-square bg-stone-200 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-500/20"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        {featuredContent.type === "video" ? (
                          <Video className="w-10 h-10 text-yellow-600" />
                        ) : (
                          <Headphones className="w-10 h-10 text-yellow-600" />
                        )}
                      </div>
                      <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg">
                        <Play className="w-5 h-5 mr-2" />
                        Play {featuredContent.type === "video" ? "Video" : "Audio"}
                      </Button>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="bg-yellow-500 text-white w-fit mb-4">Featured</Badge>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-4">
                      {featuredContent.title}
                    </h3>
                    <p className="text-stone-600 text-lg leading-relaxed mb-6">{featuredContent.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-stone-500 mb-6">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredContent.speaker || featuredContent.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredContent.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredContent.duration || featuredContent.readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredContent.views} views
                      </span>
                    </div>
                    <div className="flex space-x-3">
                      <Button className="bg-stone-800 hover:bg-stone-900 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" className="border-stone-300 bg-transparent">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="filters-section py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
              <Input
                type="text"
                placeholder="Search sermons and articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-stone-300 focus:border-yellow-500"
              />
            </div>
            <div className="flex space-x-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`category-filter ${
                    selectedCategory === category.id
                      ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                      : "border-stone-300 hover:bg-yellow-50"
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent
              .filter((item) => !item.featured)
              .map((item) => (
                <Card
                  key={item.id}
                  className="content-card bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 group"
                >
                  <CardHeader className="pb-4">
                    <div className="aspect-video bg-stone-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-amber-100"></div>
                      <div className="relative z-10">
                        {item.type === "video" && <Video className="w-12 h-12 text-yellow-600" />}
                        {item.type === "audio" && <Headphones className="w-12 h-12 text-yellow-600" />}
                        {item.type === "article" && <BookOpen className="w-12 h-12 text-yellow-600" />}
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <Button
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-stone-900 hover:bg-white"
                        >
                          {item.type === "article" ? "Read" : "Play"}
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {item.category === "sermon" ? "Sermon" : "Blog Post"}
                      </Badge>
                      <span className="text-xs text-stone-500 flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {item.views}
                      </span>
                    </div>
                    <CardTitle className="font-serif text-lg text-stone-900 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-4">
                      <span className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {item.speaker || item.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {item.duration || item.readTime}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white">
                        {item.type === "article" ? "Read Article" : "Listen/Watch"}
                      </Button>
                      <Button size="sm" variant="outline" className="border-stone-300 bg-transparent">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-stone-300 bg-transparent">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {filteredContent.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-stone-400" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">No content found</h3>
              <p className="text-stone-600">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-amber-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Stay Connected</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Subscribe to receive notifications about new sermons, blog posts, and spiritual insights delivered to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white border-0 text-stone-900 placeholder:text-stone-500"
            />
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-yellow-600 hover:bg-yellow-50 font-semibold whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-yellow-100 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
