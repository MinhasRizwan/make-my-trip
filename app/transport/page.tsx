"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Users, Star, Filter, Mountain, Car, Fuel, Shield, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const vehicles = [
  {
    id: 1,
    name: "Toyota Corolla",
    description: "Comfortable sedan perfect for city tours and short trips",
    price: 5000,
    category: "Economy",
    capacity: 4,
    transmission: "Manual",
    fuel: "Petrol",
    image: "/images/economy-car.jpg",
    features: ["AC", "Music System", "GPS"],
    rating: 4.5,
    badge: "Popular",
  },
  {
    id: 2,
    name: "Toyota Prado",
    description: "Luxury SUV ideal for mountain trips and rough terrain",
    price: 12000,
    category: "SUV",
    capacity: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    image: "/images/suv-mountain.jpg",
    features: ["4WD", "AC", "GPS", "Premium Sound"],
    rating: 4.8,
    badge: "4WD",
  },
  {
    id: 3,
    name: "Hiace Van",
    description: "Spacious van perfect for group travel and family trips",
    price: 15000,
    category: "Van",
    capacity: 12,
    transmission: "Manual",
    fuel: "Diesel",
    image: "/images/van-transport.jpg",
    features: ["AC", "Large Storage", "Comfortable Seats"],
    rating: 4.3,
    badge: "Group Travel",
  },
  {
    id: 4,
    name: "Honda City",
    description: "Modern sedan with excellent fuel efficiency",
    price: 4500,
    category: "Economy",
    capacity: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    image: "/images/economy-car.jpg",
    features: ["AC", "Fuel Efficient", "Bluetooth"],
    rating: 4.4,
    badge: "Fuel Efficient",
  },
  {
    id: 5,
    name: "Mercedes S-Class",
    description: "Ultimate luxury experience with premium comfort",
    price: 25000,
    category: "Luxury",
    capacity: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    image: "/images/luxury-car.jpg",
    features: ["Premium Interior", "Massage Seats", "Premium Sound", "WiFi"],
    rating: 4.9,
    badge: "Luxury",
  },
  {
    id: 6,
    name: "Suzuki APV",
    description: "Compact van suitable for small groups and luggage",
    price: 8000,
    category: "Mini Van",
    capacity: 8,
    transmission: "Manual",
    fuel: "Petrol",
    image: "/images/van-transport.jpg",
    features: ["AC", "Sliding Doors", "Good Storage"],
    rating: 4.2,
    badge: "Compact",
  },
]

export default function TransportPage() {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCapacity, setSelectedCapacity] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    filterVehicles(category, selectedCapacity, searchTerm)
  }

  const handleCapacityFilter = (capacity: string) => {
    setSelectedCapacity(capacity)
    filterVehicles(selectedCategory, capacity, searchTerm)
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterVehicles(selectedCategory, selectedCapacity, term)
  }

  const filterVehicles = (category: string, capacity: string, search: string) => {
    let filtered = vehicles

    if (category !== "All") {
      filtered = filtered.filter((vehicle) => vehicle.category === category)
    }

    if (capacity !== "All") {
      const capacityNum = Number.parseInt(capacity)
      if (capacity === "1-4") {
        filtered = filtered.filter((vehicle) => vehicle.capacity <= 4)
      } else if (capacity === "5-8") {
        filtered = filtered.filter((vehicle) => vehicle.capacity >= 5 && vehicle.capacity <= 8)
      } else if (capacity === "9+") {
        filtered = filtered.filter((vehicle) => vehicle.capacity >= 9)
      }
    }

    if (search) {
      filtered = filtered.filter(
        (vehicle) =>
          vehicle.name.toLowerCase().includes(search.toLowerCase()) ||
          vehicle.description.toLowerCase().includes(search.toLowerCase()),
      )
    }

    setFilteredVehicles(filtered)
  }

  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case "4WD":
        return <Mountain className="h-4 w-4" />
      case "AC":
        return <Clock className="h-4 w-4" />
      case "GPS":
        return <MapPin className="h-4 w-4" />
      case "Fuel Efficient":
        return <Fuel className="h-4 w-4" />
      default:
        return <Shield className="h-4 w-4" />
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
              <Link href="/hotels" className="text-sm font-medium hover:text-green-600">
                Hotels
              </Link>
              <Link href="/transport" className="text-sm font-medium text-green-600">
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
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rent Your Perfect Ride</h1>
          <p className="text-xl mb-8">Reliable transport solutions across Pakistan</p>
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
                  <SelectValue placeholder="Vehicle Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Types</SelectItem>
                  <SelectItem value="Economy">Economy</SelectItem>
                  <SelectItem value="SUV">SUV</SelectItem>
                  <SelectItem value="Van">Van</SelectItem>
                  <SelectItem value="Mini Van">Mini Van</SelectItem>
                  <SelectItem value="Luxury">Luxury</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedCapacity} onValueChange={handleCapacityFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Capacity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Capacities</SelectItem>
                  <SelectItem value="1-4">1-4 People</SelectItem>
                  <SelectItem value="5-8">5-8 People</SelectItem>
                  <SelectItem value="9+">9+ People</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-64"
              />
              <Button variant="outline">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-orange-600">{vehicle.badge}</Badge>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">{vehicle.rating}</span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {vehicle.name}
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      {vehicle.capacity}
                    </div>
                  </CardTitle>
                  <CardDescription>{vehicle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Car className="h-4 w-4" />
                      {vehicle.transmission}
                    </div>
                    <div className="flex items-center gap-1">
                      <Fuel className="h-4 w-4" />
                      {vehicle.fuel}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded">
                        {getFeatureIcon(feature)}
                        {feature}
                      </div>
                    ))}
                    {vehicle.features.length > 3 && (
                      <span className="text-xs text-gray-500">+{vehicle.features.length - 3} more</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-green-600">₨{vehicle.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-600">/day</span>
                    </div>
                    <Button size="sm">Rent Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No vehicles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Vehicle</h3>
              <p className="text-gray-600">Select the perfect vehicle for your trip from our wide range of options.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Online</h3>
              <p className="text-gray-600">Complete your booking with our secure online payment system.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Pick Up</h3>
              <p className="text-gray-600">Collect your vehicle from our convenient pickup locations.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy Trip</h3>
              <p className="text-gray-600">Hit the road and enjoy your journey across beautiful Pakistan.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
