"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Users, Star, Filter, Mountain, Utensils, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const tours = [
  {
    id: 1,
    title: "Hunza Valley Adventure",
    description: "7-day journey through Hunza, Attabad Lake, and Karimabad",
    price: 85000,
    duration: "7 Days",
    maxPeople: 12,
    rating: 4.9,
    category: "North Trips",
    image: "/images/hunza-valley.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Lahore Food Safari",
    description: "Taste the best street food and traditional dishes in Lahore",
    price: 8500,
    duration: "1 Day",
    maxPeople: 8,
    rating: 4.8,
    category: "Food Tours",
    image: "/images/lahore-food.jpg",
    badge: "Food Tour",
  },
  {
    id: 3,
    title: "Skardu & K2 Base Camp",
    description: "Ultimate trekking experience to K2 Base Camp via Skardu",
    price: 180000,
    duration: "14 Days",
    maxPeople: 6,
    rating: 4.7,
    category: "North Trips",
    image: "/images/skardu-mountains.jpg",
    badge: "Adventure",
  },
  {
    id: 4,
    title: "Karachi City Explorer",
    description: "Discover the vibrant culture and history of Karachi",
    price: 12000,
    duration: "2 Days",
    maxPeople: 15,
    rating: 4.5,
    category: "City Tours",
    image: "/images/karachi-city.jpg",
    badge: "Cultural",
  },
  {
    id: 5,
    title: "Islamabad Heritage Walk",
    description: "Explore the modern capital and nearby historical sites",
    price: 6500,
    duration: "1 Day",
    maxPeople: 20,
    rating: 4.6,
    category: "City Tours",
    image: "/images/islamabad-heritage.jpg",
    badge: "Heritage",
  },
  {
    id: 6,
    title: "Peshawar Food Journey",
    description: "Authentic Peshawari cuisine and cultural experience",
    price: 9500,
    duration: "1 Day",
    maxPeople: 10,
    rating: 4.7,
    category: "Food Tours",
    image: "/images/peshawar-food.jpg",
    badge: "Authentic",
  },
]

export default function ToursPage() {
  const [filteredTours, setFilteredTours] = useState(tours)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    if (category === "All") {
      setFilteredTours(tours)
    } else {
      setFilteredTours(tours.filter((tour) => tour.category === category))
    }
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    const filtered = tours.filter(
      (tour) =>
        tour.title.toLowerCase().includes(term.toLowerCase()) ||
        tour.description.toLowerCase().includes(term.toLowerCase()),
    )
    setFilteredTours(filtered)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600">PakTrips</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-green-600">
                Home
              </Link>
              <Link href="/tours" className="text-sm font-medium text-green-600">
                Tours
              </Link>
              <Link href="/hotels" className="text-sm font-medium hover:text-green-600">
                Hotels
              </Link>
              <Link href="/transport" className="text-sm font-medium hover:text-green-600">
                Transport
              </Link>
            </nav>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Pakistan Tours</h1>
          <p className="text-xl mb-8">Discover amazing destinations across Pakistan</p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <Select value={selectedCategory} onValueChange={handleCategoryFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  <SelectItem value="North Trips">North Trips</SelectItem>
                  <SelectItem value="City Tours">City Tours</SelectItem>
                  <SelectItem value="Food Tours">Food Tours</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Search tours..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-64"
              />
              <Button variant="outline">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-green-600">{tour.badge}</Badge>
                  <div className="absolute top-4 right-4">
                    {tour.category === "North Trips" && <Mountain className="h-6 w-6 text-white" />}
                    {tour.category === "City Tours" && <Building2 className="h-6 w-6 text-white" />}
                    {tour.category === "Food Tours" && <Utensils className="h-6 w-6 text-white" />}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {tour.title}
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{tour.rating}</span>
                    </div>
                  </CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      Max {tour.maxPeople}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">₨{tour.price.toLocaleString()}</span>
                    <Button size="sm">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tours found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
