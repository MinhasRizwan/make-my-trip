"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Star, Filter, Mountain, Wifi, Car, Utensils, Dumbbell } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const hotels = [
  {
    id: 1,
    name: "Serena Hotel Islamabad",
    description: "5-star luxury in the capital with world-class amenities",
    price: 25000,
    location: "Islamabad",
    rating: 4.8,
    category: "Luxury",
    image: "/images/islamabad-hotel.jpg",
    amenities: ["WiFi", "Parking", "Restaurant", "Gym", "Spa"],
    badge: "5 Star",
  },
  {
    id: 2,
    name: "Pearl Continental Lahore",
    description: "Premium comfort in historic Lahore with traditional hospitality",
    price: 18000,
    location: "Lahore",
    rating: 4.6,
    category: "Premium",
    image: "/images/lahore-hotel.jpg",
    amenities: ["WiFi", "Parking", "Restaurant", "Pool"],
    badge: "4 Star",
  },
  {
    id: 3,
    name: "Hunza Serena Inn",
    description: "Mountain retreat with stunning valley views",
    price: 15000,
    location: "Hunza",
    rating: 4.9,
    category: "Resort",
    image: "/images/mountain-lodge.jpg",
    amenities: ["WiFi", "Restaurant", "Mountain View", "Garden"],
    badge: "Mountain View",
  },
  {
    id: 4,
    name: "Movenpick Hotel Karachi",
    description: "Modern business hotel in the heart of Karachi",
    price: 22000,
    location: "Karachi",
    rating: 4.5,
    category: "Business",
    image: "/images/karachi-city.jpg",
    amenities: ["WiFi", "Parking", "Restaurant", "Business Center"],
    badge: "Business",
  },
  {
    id: 5,
    name: "Skardu Inn",
    description: "Comfortable accommodation for mountain adventurers",
    price: 8000,
    location: "Skardu",
    rating: 4.3,
    category: "Budget",
    image: "/images/skardu-mountains.jpg",
    amenities: ["WiFi", "Restaurant", "Mountain View"],
    badge: "Budget Friendly",
  },
  {
    id: 6,
    name: "Avari Hotel Lahore",
    description: "Elegant hotel with traditional Pakistani architecture",
    price: 20000,
    location: "Lahore",
    rating: 4.7,
    category: "Heritage",
    image: "/images/lahore-hotel.jpg",
    amenities: ["WiFi", "Parking", "Restaurant", "Heritage Design"],
    badge: "Heritage",
  },
]

export default function HotelsPage() {
  const [filteredHotels, setFilteredHotels] = useState(hotels)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    filterHotels(category, selectedLocation, searchTerm)
  }

  const handleLocationFilter = (location: string) => {
    setSelectedLocation(location)
    filterHotels(selectedCategory, location, searchTerm)
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterHotels(selectedCategory, selectedLocation, term)
  }

  const filterHotels = (category: string, location: string, search: string) => {
    let filtered = hotels

    if (category !== "All") {
      filtered = filtered.filter((hotel) => hotel.category === category)
    }

    if (location !== "All") {
      filtered = filtered.filter((hotel) => hotel.location === location)
    }

    if (search) {
      filtered = filtered.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(search.toLowerCase()) ||
          hotel.description.toLowerCase().includes(search.toLowerCase()),
      )
    }

    setFilteredHotels(filtered)
  }

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "WiFi":
        return <Wifi className="h-4 w-4" />
      case "Parking":
        return <Car className="h-4 w-4" />
      case "Restaurant":
        return <Utensils className="h-4 w-4" />
      case "Gym":
        return <Dumbbell className="h-4 w-4" />
      case "Mountain View":
        return <Mountain className="h-4 w-4" />
      default:
        return <MapPin className="h-4 w-4" />
    }
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
              <Link href="/tours" className="text-sm font-medium hover:text-green-600">
                Tours
              </Link>
              <Link href="/hotels" className="text-sm font-medium text-green-600">
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Perfect Hotels</h1>
          <p className="text-xl mb-8">Comfortable stays across Pakistan</p>
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
                  <SelectValue placeholder="Hotel Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Types</SelectItem>
                  <SelectItem value="Luxury">Luxury</SelectItem>
                  <SelectItem value="Premium">Premium</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Resort">Resort</SelectItem>
                  <SelectItem value="Budget">Budget</SelectItem>
                  <SelectItem value="Heritage">Heritage</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={handleLocationFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Cities</SelectItem>
                  <SelectItem value="Islamabad">Islamabad</SelectItem>
                  <SelectItem value="Lahore">Lahore</SelectItem>
                  <SelectItem value="Karachi">Karachi</SelectItem>
                  <SelectItem value="Hunza">Hunza</SelectItem>
                  <SelectItem value="Skardu">Skardu</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Search hotels..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-64"
              />
              <Button variant="outline">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{hotel.badge}</Badge>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">{hotel.rating}</span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {hotel.name}
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {hotel.location}
                    </div>
                  </CardTitle>
                  <CardDescription>{hotel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 4).map((amenity, index) => (
                      <div key={index} className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded">
                        {getAmenityIcon(amenity)}
                        {amenity}
                      </div>
                    ))}
                    {hotel.amenities.length > 4 && (
                      <span className="text-xs text-gray-500">+{hotel.amenities.length - 4} more</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-green-600">₨{hotel.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-600">/night</span>
                    </div>
                    <Button size="sm">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredHotels.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No hotels found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
