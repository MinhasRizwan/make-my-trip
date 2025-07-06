"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Calendar, Users, Star, Clock, Mountain, Utensils, Sparkles, Download, Share, Car } from "lucide-react"
import Link from "next/link"

interface ItineraryDay {
  day: number
  title: string
  activities: string[]
  meals: string[]
  accommodation: string
  transport: string
  highlights: string[]
}

const sampleItinerary: ItineraryDay[] = [
  {
    day: 1,
    title: "Arrival in Islamabad",
    activities: [
      "Arrive at Islamabad International Airport",
      "Check-in at Serena Hotel Islamabad",
      "Visit Faisal Mosque - largest mosque in Pakistan",
      "Explore Daman-e-Koh viewpoint for city panorama",
      "Evening at Centaurus Mall for shopping and dining",
    ],
    meals: ["Welcome lunch at Monal Restaurant", "Dinner at hotel"],
    accommodation: "Serena Hotel Islamabad (5-star)",
    transport: "Airport pickup in luxury sedan",
    highlights: ["Faisal Mosque", "City Views", "Local Cuisine"],
  },
  {
    day: 2,
    title: "Islamabad to Hunza Valley",
    activities: [
      "Early morning departure to Hunza (8-hour scenic drive)",
      "Stop at Besham for lunch and rest",
      "Drive through Karakoram Highway - world's highest paved road",
      "Arrive in Karimabad, Hunza",
      "Check-in at Hunza Serena Inn",
      "Sunset view of Rakaposhi Peak",
    ],
    meals: ["Breakfast at hotel", "Lunch in Besham", "Traditional Hunza dinner"],
    accommodation: "Hunza Serena Inn (Mountain Resort)",
    transport: "4WD vehicle with experienced driver",
    highlights: ["Karakoram Highway", "Mountain Views", "Rakaposhi Peak"],
  },
  {
    day: 3,
    title: "Explore Hunza Valley",
    activities: [
      "Visit Baltit Fort - 700-year-old historical fort",
      "Explore Karimabad Bazaar for local handicrafts",
      "Hike to Eagle's Nest viewpoint",
      "Visit Altit Fort and village",
      "Boat ride on Attabad Lake",
      "Photography session at sunset point",
    ],
    meals: ["Traditional Hunza breakfast", "Picnic lunch by Attabad Lake", "BBQ dinner under stars"],
    accommodation: "Hunza Serena Inn",
    transport: "Local jeep for sightseeing",
    highlights: ["Baltit Fort", "Attabad Lake", "Eagle's Nest", "Local Culture"],
  },
]

export default function AITripPlannerPage() {
  const [formData, setFormData] = useState({
    destination: "",
    duration: "",
    travelStyle: "",
    budget: "",
    travelers: "",
    interests: "",
  })
  const [generatedItinerary, setGeneratedItinerary] = useState<ItineraryDay[] | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const generateItinerary = async () => {
    setIsGenerating(true)
    // Simulate AI processing
    setTimeout(() => {
      setGeneratedItinerary(sampleItinerary)
      setIsGenerating(false)
    }, 3000)
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
              <Link href="/ai-planner" className="text-sm font-medium text-green-600">
                AI Planner
              </Link>
            </nav>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">AI Trip Planner</h1>
          </div>
          <p className="text-xl mb-8">Let artificial intelligence create your perfect Pakistan adventure</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Trip Planning Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="h-6 w-6 mr-2 text-purple-600" />
                  Plan Your Trip
                </CardTitle>
                <CardDescription>
                  Tell us your preferences and our AI will create a personalized itinerary
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Where do you want to go?</label>
                  <Input
                    placeholder="e.g., Northern Areas, Lahore, Karachi, or multiple cities"
                    value={formData.destination}
                    onChange={(e) => handleInputChange("destination", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Trip Duration</label>
                    <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-days">3 Days</SelectItem>
                        <SelectItem value="5-days">5 Days</SelectItem>
                        <SelectItem value="7-days">1 Week</SelectItem>
                        <SelectItem value="10-days">10 Days</SelectItem>
                        <SelectItem value="14-days">2 Weeks</SelectItem>
                        <SelectItem value="21-days">3 Weeks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Travelers</label>
                    <Select value={formData.travelers} onValueChange={(value) => handleInputChange("travelers", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select travelers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solo">Solo Traveler</SelectItem>
                        <SelectItem value="couple">Couple (2 people)</SelectItem>
                        <SelectItem value="family">Family (3-5 people)</SelectItem>
                        <SelectItem value="group">Group (6+ people)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Travel Style</label>
                    <Select
                      value={formData.travelStyle}
                      onValueChange={(value) => handleInputChange("travelStyle", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="adventure">Adventure & Trekking</SelectItem>
                        <SelectItem value="cultural">Cultural & Heritage</SelectItem>
                        <SelectItem value="food">Food & Cuisine</SelectItem>
                        <SelectItem value="luxury">Luxury & Comfort</SelectItem>
                        <SelectItem value="budget">Budget Friendly</SelectItem>
                        <SelectItem value="family">Family Friendly</SelectItem>
                        <SelectItem value="photography">Photography Focus</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">₨50,000 - ₨100,000</SelectItem>
                        <SelectItem value="mid">₨100,000 - ₨200,000</SelectItem>
                        <SelectItem value="premium">₨200,000 - ₨400,000</SelectItem>
                        <SelectItem value="luxury">₨400,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Special Interests & Preferences</label>
                  <Textarea
                    placeholder="Tell us about your interests: photography, trekking, historical sites, local cuisine, shopping, nightlife, etc. Also mention any dietary restrictions or accessibility needs."
                    rows={4}
                    value={formData.interests}
                    onChange={(e) => handleInputChange("interests", e.target.value)}
                  />
                </div>

                <Button
                  onClick={generateItinerary}
                  disabled={isGenerating || !formData.destination || !formData.duration}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="h-5 w-5 mr-2 animate-spin" />
                      Generating Your Perfect Trip...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5 mr-2" />
                      Generate AI Itinerary
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Generated Itinerary */}
          <div>
            {isGenerating && (
              <Card>
                <CardContent className="p-8 text-center">
                  <Sparkles className="h-16 w-16 mx-auto mb-4 text-purple-600 animate-pulse" />
                  <h3 className="text-xl font-semibold mb-2">Creating Your Perfect Trip</h3>
                  <p className="text-gray-600">
                    Our AI is analyzing thousands of destinations, activities, and experiences to craft your ideal
                    Pakistan adventure...
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="bg-gray-200 h-2 rounded animate-pulse"></div>
                    <div className="bg-gray-200 h-2 rounded animate-pulse w-3/4"></div>
                    <div className="bg-gray-200 h-2 rounded animate-pulse w-1/2"></div>
                  </div>
                </CardContent>
              </Card>
            )}

            {generatedItinerary && !isGenerating && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Calendar className="h-6 w-6 mr-2 text-green-600" />
                        Your AI-Generated Itinerary
                      </span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download PDF
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>Personalized 3-day adventure in Northern Pakistan</CardDescription>
                  </CardHeader>
                </Card>

                {generatedItinerary.map((day) => (
                  <Card key={day.day}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                          {day.day}
                        </div>
                        Day {day.day}: {day.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-blue-600" />
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                        <div>
                          <h4 className="font-semibold mb-2 mt-3 flex items-center">
                            <Mountain className="h-4 w-4 mr-1 text-purple-600" />
                            Accommodation
                          </h4>
                          <p className="text-sm text-gray-600">{day.accommodation}</p>

                          <h4 className="font-semibold mb-2 mt-3 flex items-center">
                            <Car className="h-4 w-4 mr-1 text-blue-600" />
                            Transport
                          </h4>
                          <p className="text-sm text-gray-600">{day.transport}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-600" />
                          Day Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {day.highlights.map((highlight, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 text-green-800">Ready to Book This Trip?</h3>
                    <p className="text-sm text-green-700 mb-4">
                      This AI-generated itinerary is customized for your preferences. Our travel experts can help you
                      book all components and make adjustments.
                    </p>
                    <div className="flex gap-3">
                      <Button className="bg-green-600 hover:bg-green-700">Book This Itinerary</Button>
                      <Button variant="outline">Customize Further</Button>
                      <Button variant="outline">Get Quote</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {!generatedItinerary && !isGenerating && (
              <Card>
                <CardContent className="p-8 text-center">
                  <Sparkles className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold mb-2">Ready to Plan?</h3>
                  <p className="text-gray-600">
                    Fill out the form on the left to generate your personalized Pakistan itinerary using AI.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use Our AI Trip Planner?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Smart Recommendations</CardTitle>
                <CardDescription>
                  AI analyzes thousands of destinations, reviews, and travel patterns to suggest the best experiences
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Instant Planning</CardTitle>
                <CardDescription>
                  Get a complete itinerary in minutes instead of hours of research and planning
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Personalized Experience</CardTitle>
                <CardDescription>
                  Every itinerary is tailored to your interests, budget, and travel style
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
