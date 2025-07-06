"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  MapPin,
  Calendar,
  Users,
  Star,
  Clock,
  Mountain,
  Utensils,
  Building2,
  Car,
  Camera,
  Download,
  Share,
  CheckCircle,
  Plane,
  Hotel,
  Route,
} from "lucide-react"
import Link from "next/link"

interface TripPlan {
  overview: {
    title: string
    duration: string
    totalCost: number
    travelers: number
    destinations: string[]
  }
  itinerary: {
    day: number
    date: string
    location: string
    activities: string[]
    meals: string[]
    accommodation: {
      name: string
      type: string
      cost: number
    }
    transport: {
      type: string
      cost: number
    }
    highlights: string[]
    totalDayCost: number
  }[]
  inclusions: string[]
  exclusions: string[]
  bookingDetails: {
    hotels: { name: string; nights: number; cost: number }[]
    transport: { type: string; days: number; cost: number }[]
    tours: { name: string; cost: number }[]
    totalCost: number
  }
}

const sampleTripPlan: TripPlan = {
  overview: {
    title: "Northern Pakistan Adventure",
    duration: "7 Days / 6 Nights",
    totalCost: 185000,
    travelers: 2,
    destinations: ["Islamabad", "Hunza Valley", "Skardu", "Karimabad"],
  },
  itinerary: [
    {
      day: 1,
      date: "Day 1 - March 15, 2024",
      location: "Islamabad Arrival",
      activities: [
        "Airport pickup and hotel check-in",
        "Visit Faisal Mosque - largest mosque in Pakistan",
        "Explore Daman-e-Koh viewpoint",
        "Evening at Centaurus Mall",
      ],
      meals: ["Welcome lunch at Monal Restaurant", "Dinner at hotel"],
      accommodation: {
        name: "Serena Hotel Islamabad",
        type: "5-star luxury",
        cost: 25000,
      },
      transport: {
        type: "Airport transfer + city tour",
        cost: 8000,
      },
      highlights: ["Faisal Mosque", "City panorama", "Local cuisine"],
      totalDayCost: 35000,
    },
    {
      day: 2,
      date: "Day 2 - March 16, 2024",
      location: "Islamabad to Hunza",
      activities: [
        "Early morning departure (6 AM)",
        "Drive via Karakoram Highway",
        "Stop at Besham for lunch",
        "Arrive in Karimabad, Hunza",
        "Sunset at Rakaposhi viewpoint",
      ],
      meals: ["Breakfast at hotel", "Lunch in Besham", "Dinner in Hunza"],
      accommodation: {
        name: "Hunza Serena Inn",
        type: "Mountain resort",
        cost: 18000,
      },
      transport: {
        type: "4WD vehicle with driver",
        cost: 15000,
      },
      highlights: ["Karakoram Highway", "Mountain views", "Rakaposhi Peak"],
      totalDayCost: 38000,
    },
  ],
  inclusions: [
    "Accommodation in selected hotels",
    "All meals as mentioned in itinerary",
    "Transportation in comfortable vehicles",
    "Professional tour guide",
    "All entrance fees and permits",
    "Airport transfers",
  ],
  exclusions: [
    "International flights",
    "Personal expenses and shopping",
    "Tips and gratuities",
    "Travel insurance",
    "Any meals not mentioned",
    "Emergency expenses",
  ],
  bookingDetails: {
    hotels: [
      { name: "Serena Hotel Islamabad", nights: 1, cost: 25000 },
      { name: "Hunza Serena Inn", nights: 2, cost: 36000 },
      { name: "Skardu Inn", nights: 2, cost: 24000 },
    ],
    transport: [
      { type: "Airport transfers", days: 2, cost: 8000 },
      { type: "4WD vehicle rental", days: 6, cost: 72000 },
    ],
    tours: [
      { name: "Hunza Valley tour", cost: 15000 },
      { name: "Skardu sightseeing", cost: 12000 },
    ],
    totalCost: 185000,
  },
}

export default function MakeMyTripPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Basic Info
    destinations: [] as string[],
    startDate: "",
    endDate: "",
    travelers: "",
    budget: "",

    // Preferences
    travelStyle: "",
    accommodation: "",
    transport: "",
    interests: [] as string[],

    // Services
    includeFlights: false,
    includeHotels: true,
    includeTransport: true,
    includeTours: true,
    includeGuide: false,
    includeMeals: true,

    // Personal Details
    fullName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const [generatedPlan, setGeneratedPlan] = useState<TripPlan | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDestinationChange = (destination: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      destinations: checked ? [...prev.destinations, destination] : prev.destinations.filter((d) => d !== destination),
    }))
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const generateTripPlan = async () => {
    setIsGenerating(true)
    // Simulate plan generation
    setTimeout(() => {
      setGeneratedPlan(sampleTripPlan)
      setIsGenerating(false)
      setCurrentStep(5)
    }, 3000)
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

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
              <Link href="/make-my-trip" className="text-sm font-medium text-green-600">
                Make My Trip
              </Link>
              <Link href="/ai-planner" className="text-sm font-medium hover:text-green-600">
                AI Planner
              </Link>
              <Link href="/quote" className="text-sm font-medium hover:text-green-600">
                Get Quote
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
          <div className="flex items-center justify-center mb-4">
            <Route className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Make My Trip</h1>
          </div>
          <p className="text-xl mb-8">Create your complete Pakistan travel plan in just a few steps</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    step <= currentStep ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                </div>
                {step < 5 && <div className={`w-16 h-1 mx-2 ${step < currentStep ? "bg-green-600" : "bg-gray-200"}`} />}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">
              {currentStep === 1 && "Step 1: Choose Destinations & Dates"}
              {currentStep === 2 && "Step 2: Travel Preferences"}
              {currentStep === 3 && "Step 3: Select Services"}
              {currentStep === 4 && "Step 4: Personal Details"}
              {currentStep === 5 && "Step 5: Your Complete Trip Plan"}
            </h2>
          </div>
        </div>

        {/* Step 1: Destinations & Dates */}
        {currentStep === 1 && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-green-600" />
                Where do you want to go?
              </CardTitle>
              <CardDescription>Select your destinations and travel dates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">Select Destinations (Choose multiple)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Northern Areas (Hunza, Skardu)",
                    "Lahore",
                    "Karachi",
                    "Islamabad",
                    "Peshawar",
                    "Multan",
                    "Quetta",
                    "Swat Valley",
                  ].map((destination) => (
                    <div key={destination} className="flex items-center space-x-2">
                      <Checkbox
                        id={destination}
                        checked={formData.destinations.includes(destination)}
                        onCheckedChange={(checked) => handleDestinationChange(destination, checked as boolean)}
                      />
                      <label htmlFor={destination} className="text-sm cursor-pointer">
                        {destination}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Start Date</label>
                  <Input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, startDate: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">End Date</label>
                  <Input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, endDate: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Travelers</label>
                  <Select
                    value={formData.travelers}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, travelers: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select travelers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Person</SelectItem>
                      <SelectItem value="2">2 People</SelectItem>
                      <SelectItem value="3-4">3-4 People</SelectItem>
                      <SelectItem value="5-8">5-8 People</SelectItem>
                      <SelectItem value="9+">9+ People</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget Range (Per Person)</label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget">₨50,000 - ₨100,000 (Budget)</SelectItem>
                    <SelectItem value="mid">₨100,000 - ₨200,000 (Mid-range)</SelectItem>
                    <SelectItem value="premium">₨200,000 - ₨400,000 (Premium)</SelectItem>
                    <SelectItem value="luxury">₨400,000+ (Luxury)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={nextStep}
                  disabled={formData.destinations.length === 0 || !formData.startDate || !formData.travelers}
                >
                  Next Step
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Travel Preferences */}
        {currentStep === 2 && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-6 w-6 mr-2 text-blue-600" />
                Travel Preferences
              </CardTitle>
              <CardDescription>Tell us about your travel style and interests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Travel Style</label>
                  <Select
                    value={formData.travelStyle}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, travelStyle: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select travel style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="adventure">Adventure & Trekking</SelectItem>
                      <SelectItem value="cultural">Cultural & Heritage</SelectItem>
                      <SelectItem value="food">Food & Cuisine Focus</SelectItem>
                      <SelectItem value="luxury">Luxury & Comfort</SelectItem>
                      <SelectItem value="budget">Budget Friendly</SelectItem>
                      <SelectItem value="family">Family Friendly</SelectItem>
                      <SelectItem value="photography">Photography Focus</SelectItem>
                      <SelectItem value="relaxation">Relaxation & Leisure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Accommodation</label>
                  <Select
                    value={formData.accommodation}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, accommodation: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select accommodation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="luxury">5-Star Luxury Hotels</SelectItem>
                      <SelectItem value="premium">4-Star Premium Hotels</SelectItem>
                      <SelectItem value="comfort">3-Star Comfort Hotels</SelectItem>
                      <SelectItem value="budget">Budget Hotels/Guesthouses</SelectItem>
                      <SelectItem value="mixed">Mix of Different Categories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Transport</label>
                <Select
                  value={formData.transport}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, transport: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select transport preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="luxury-car">Luxury Cars (Mercedes, BMW)</SelectItem>
                    <SelectItem value="suv">SUVs (Toyota Prado, Land Cruiser)</SelectItem>
                    <SelectItem value="sedan">Comfortable Sedans</SelectItem>
                    <SelectItem value="van">Vans for Groups</SelectItem>
                    <SelectItem value="mixed">Mix Based on Route</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Interests & Activities (Select all that apply)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Mountain Trekking",
                    "Photography",
                    "Local Cuisine",
                    "Historical Sites",
                    "Shopping",
                    "Adventure Sports",
                    "Cultural Shows",
                    "Nature Walks",
                    "Boat Rides",
                    "Camping",
                    "Wildlife",
                    "Religious Sites",
                  ].map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                      />
                      <label htmlFor={interest} className="text-sm cursor-pointer">
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  Previous
                </Button>
                <Button onClick={nextStep}>Next Step</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Services */}
        {currentStep === 3 && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-purple-600" />
                Select Services
              </CardTitle>
              <CardDescription>Choose what you want included in your trip package</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    key: "includeFlights",
                    label: "Domestic Flights",
                    desc: "Internal flights within Pakistan",
                    icon: Plane,
                  },
                  { key: "includeHotels", label: "Hotel Accommodation", desc: "Booking and reservations", icon: Hotel },
                  { key: "includeTransport", label: "Ground Transport", desc: "Cars, vans, and drivers", icon: Car },
                  { key: "includeTours", label: "Guided Tours", desc: "Sightseeing and attractions", icon: Camera },
                  { key: "includeGuide", label: "Professional Guide", desc: "Local expert guides", icon: Users },
                  { key: "includeMeals", label: "Meals", desc: "Breakfast, lunch, and dinner", icon: Utensils },
                ].map((service) => (
                  <Card
                    key={service.key}
                    className={`cursor-pointer transition-colors ${
                      formData[service.key as keyof typeof formData] ? "bg-green-50 border-green-200" : ""
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id={service.key}
                          checked={formData[service.key as keyof typeof formData] as boolean}
                          onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, [service.key]: checked }))}
                        />
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <service.icon className="h-5 w-5 mr-2 text-green-600" />
                            <label htmlFor={service.key} className="font-medium cursor-pointer">
                              {service.label}
                            </label>
                          </div>
                          <p className="text-sm text-gray-600">{service.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  Previous
                </Button>
                <Button onClick={nextStep}>Next Step</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Personal Details */}
        {currentStep === 4 && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-orange-600" />
                Personal Details
              </CardTitle>
              <CardDescription>We need your contact information to create your trip plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <Input
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Special Requests & Requirements</label>
                <Textarea
                  placeholder="Any dietary restrictions, accessibility needs, special occasions, or specific requests..."
                  rows={4}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                />
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  Previous
                </Button>
                <Button
                  onClick={generateTripPlan}
                  disabled={!formData.fullName || !formData.email || !formData.phone}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Generate My Trip Plan
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 5: Generated Trip Plan */}
        {currentStep === 5 && (
          <div className="space-y-8">
            {isGenerating ? (
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-12 text-center">
                  <Route className="h-20 w-20 mx-auto mb-6 text-green-600 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-4">Creating Your Perfect Trip Plan</h3>
                  <p className="text-gray-600 mb-6">
                    Our experts are crafting a personalized itinerary based on your preferences...
                  </p>
                  <div className="space-y-2">
                    <div className="bg-gray-200 h-2 rounded animate-pulse"></div>
                    <div className="bg-gray-200 h-2 rounded animate-pulse w-3/4 mx-auto"></div>
                    <div className="bg-gray-200 h-2 rounded animate-pulse w-1/2 mx-auto"></div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              generatedPlan && (
                <div className="space-y-8">
                  {/* Trip Overview */}
                  <Card className="max-w-6xl mx-auto">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center text-2xl">
                          <CheckCircle className="h-8 w-8 mr-3 text-green-600" />
                          Your Complete Trip Plan
                        </CardTitle>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Download PDF
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share className="h-4 w-4 mr-1" />
                            Share Plan
                          </Button>
                        </div>
                      </div>
                      <CardDescription className="text-lg">
                        {generatedPlan.overview.title} - {generatedPlan.overview.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
                          <h4 className="font-semibold">Duration</h4>
                          <p className="text-sm text-gray-600">{generatedPlan.overview.duration}</p>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <h4 className="font-semibold">Travelers</h4>
                          <p className="text-sm text-gray-600">{generatedPlan.overview.travelers} People</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                          <h4 className="font-semibold">Destinations</h4>
                          <p className="text-sm text-gray-600">{generatedPlan.overview.destinations.length} Cities</p>
                        </div>
                        <div className="text-center p-4 bg-orange-50 rounded-lg">
                          <Star className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                          <h4 className="font-semibold">Total Cost</h4>
                          <p className="text-sm text-gray-600">₨{generatedPlan.overview.totalCost.toLocaleString()}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Detailed Itinerary */}
                  <div className="max-w-6xl mx-auto space-y-6">
                    <h3 className="text-2xl font-bold text-center mb-8">Detailed Day-by-Day Itinerary</h3>
                    {generatedPlan.itinerary.map((day) => (
                      <Card key={day.day}>
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <span className="flex items-center">
                              <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-lg font-bold">
                                {day.day}
                              </div>
                              {day.date} - {day.location}
                            </span>
                            <Badge variant="secondary">₨{day.totalDayCost.toLocaleString()}</Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2 flex items-center">
                                  <Clock className="h-4 w-4 mr-1 text-blue-600" />
                                  Activities
                                </h4>
                                <ul className="space-y-1">
                                  {day.activities.map((activity, index) => (
                                    <li key={index} className="text-sm text-gray-600 flex items-start">
                                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                      {activity}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-2 flex items-center">
                                  <Utensils className="h-4 w-4 mr-1 text-orange-600" />
                                  Meals
                                </h4>
                                <ul className="space-y-1">
                                  {day.meals.map((meal, index) => (
                                    <li key={index} className="text-sm text-gray-600">
                                      • {meal}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2 flex items-center">
                                  <Building2 className="h-4 w-4 mr-1 text-purple-600" />
                                  Accommodation
                                </h4>
                                <p className="text-sm text-gray-600">{day.accommodation.name}</p>
                                <p className="text-xs text-gray-500">
                                  {day.accommodation.type} - ₨{day.accommodation.cost.toLocaleString()}
                                </p>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-2 flex items-center">
                                  <Car className="h-4 w-4 mr-1 text-blue-600" />
                                  Transport
                                </h4>
                                <p className="text-sm text-gray-600">{day.transport.type}</p>
                                <p className="text-xs text-gray-500">₨{day.transport.cost.toLocaleString()}</p>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-2 flex items-center">
                                  <Star className="h-4 w-4 mr-1 text-yellow-600" />
                                  Highlights
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                  {day.highlights.map((highlight, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      {highlight}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Booking Summary */}
                  <Card className="max-w-6xl mx-auto">
                    <CardHeader>
                      <CardTitle>Booking Summary & Pricing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4">What's Included</h4>
                          <ul className="space-y-2">
                            {generatedPlan.inclusions.map((item, index) => (
                              <li key={index} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-4">What's Not Included</h4>
                          <ul className="space-y-2">
                            {generatedPlan.exclusions.map((item, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <span className="w-4 h-4 border border-gray-400 rounded mr-2"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 p-6 bg-green-50 rounded-lg">
                        <h4 className="font-semibold mb-4">Cost Breakdown</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Hotels ({generatedPlan.bookingDetails.hotels.length} nights)</span>
                            <span>
                              ₨
                              {generatedPlan.bookingDetails.hotels
                                .reduce((sum, hotel) => sum + hotel.cost, 0)
                                .toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Transport</span>
                            <span>
                              ₨
                              {generatedPlan.bookingDetails.transport
                                .reduce((sum, transport) => sum + transport.cost, 0)
                                .toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tours & Activities</span>
                            <span>
                              ₨
                              {generatedPlan.bookingDetails.tours
                                .reduce((sum, tour) => sum + tour.cost, 0)
                                .toLocaleString()}
                            </span>
                          </div>
                          <div className="border-t pt-2 flex justify-between font-bold text-lg">
                            <span>Total Cost</span>
                            <span className="text-green-600">
                              ₨{generatedPlan.bookingDetails.totalCost.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 text-center space-y-4">
                        <p className="text-gray-600">Ready to book this amazing trip?</p>
                        <div className="flex gap-4 justify-center">
                          <Button size="lg" className="bg-green-600 hover:bg-green-700">
                            Book This Trip Now
                          </Button>
                          <Button variant="outline" size="lg">
                            Customize Plan
                          </Button>
                          <Button variant="outline" size="lg" asChild>
                            <Link href="/quote">Get Detailed Quote</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  )
}
