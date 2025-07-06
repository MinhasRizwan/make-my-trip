"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Users, Mail, CheckCircle, Clock, Star, Mountain } from "lucide-react"
import Link from "next/link"

interface QuoteFormData {
  personalInfo: {
    fullName: string
    email: string
    phone: string
    country: string
  }
  tripDetails: {
    destination: string[]
    startDate: string
    duration: string
    travelers: string
    travelStyle: string
    budget: string
  }
  services: {
    tours: boolean
    hotels: boolean
    transport: boolean
    food: boolean
    guide: boolean
    photography: boolean
  }
  requirements: string
}

export default function QuotePage() {
  const [formData, setFormData] = useState<QuoteFormData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
    },
    tripDetails: {
      destination: [],
      startDate: "",
      duration: "",
      travelers: "",
      travelStyle: "",
      budget: "",
    },
    services: {
      tours: false,
      hotels: false,
      transport: false,
      food: false,
      guide: false,
      photography: false,
    },
    requirements: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handlePersonalInfoChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }))
  }

  const handleTripDetailsChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      tripDetails: { ...prev.tripDetails, [field]: value },
    }))
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: { ...prev.services, [service]: checked },
    }))
  }

  const handleDestinationChange = (destination: string, checked: boolean) => {
    setFormData((prev) => {
      const currentDestinations = prev.tripDetails.destination
      if (checked) {
        return {
          ...prev,
          tripDetails: {
            ...prev.tripDetails,
            destination: [...currentDestinations, destination],
          },
        }
      } else {
        return {
          ...prev,
          tripDetails: {
            ...prev.tripDetails,
            destination: currentDestinations.filter((d) => d !== destination),
          },
        }
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
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
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Quote Request Submitted!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your interest in exploring Pakistan with us. We've received your quote request and our
              travel experts are already working on creating a personalized proposal for you.
            </p>

            <Card className="text-left mb-8">
              <CardHeader>
                <CardTitle>What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Review & Analysis</h4>
                    <p className="text-sm text-gray-600">Our experts review your requirements and preferences</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Custom Proposal</h4>
                    <p className="text-sm text-gray-600">We create a detailed itinerary and pricing proposal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Personal Consultation</h4>
                    <p className="text-sm text-gray-600">We'll call you within 24 hours to discuss details</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Response Time</h3>
                  <p className="text-sm text-gray-600">Within 24 hours</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Expert Service</h3>
                  <p className="text-sm text-gray-600">Personalized consultation</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link href="/">Return Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/tours">Browse Tours</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
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
              <Link href="/quote" className="text-sm font-medium text-green-600">
                Get Quote
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Custom Quote</h1>
          <p className="text-xl mb-8">Tell us your dream trip and we'll create a personalized proposal</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 mr-2 text-blue-600" />
                  Personal Information
                </CardTitle>
                <CardDescription>Let us know how to reach you</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.personalInfo.fullName}
                    onChange={(e) => handlePersonalInfoChange("fullName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.personalInfo.email}
                    onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input
                    placeholder="+92 300 1234567"
                    value={formData.personalInfo.phone}
                    onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Country</label>
                  <Input
                    placeholder="Your country"
                    value={formData.personalInfo.country}
                    onChange={(e) => handlePersonalInfoChange("country", e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Trip Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-green-600" />
                  Trip Details
                </CardTitle>
                <CardDescription>Tell us about your ideal Pakistan adventure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3">Destinations (Select all that interest you)</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "Northern Areas (Hunza, Skardu)",
                      "Lahore",
                      "Karachi",
                      "Islamabad",
                      "Peshawar",
                      "Multan",
                      "Faisalabad",
                      "Quetta",
                    ].map((destination) => (
                      <div key={destination} className="flex items-center space-x-2">
                        <Checkbox
                          id={destination}
                          checked={formData.tripDetails.destination.includes(destination)}
                          onCheckedChange={(checked) => handleDestinationChange(destination, checked as boolean)}
                        />
                        <label htmlFor={destination} className="text-sm">
                          {destination}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Start Date</label>
                    <Input
                      type="date"
                      value={formData.tripDetails.startDate}
                      onChange={(e) => handleTripDetailsChange("startDate", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Trip Duration</label>
                    <Select
                      value={formData.tripDetails.duration}
                      onValueChange={(value) => handleTripDetailsChange("duration", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3">1-3 Days</SelectItem>
                        <SelectItem value="4-7">4-7 Days</SelectItem>
                        <SelectItem value="8-14">1-2 Weeks</SelectItem>
                        <SelectItem value="15-21">2-3 Weeks</SelectItem>
                        <SelectItem value="22+">3+ Weeks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Travelers</label>
                    <Select
                      value={formData.tripDetails.travelers}
                      onValueChange={(value) => handleTripDetailsChange("travelers", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select travelers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3-5">3-5 People</SelectItem>
                        <SelectItem value="6-10">6-10 People</SelectItem>
                        <SelectItem value="10+">10+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Travel Style</label>
                    <Select
                      value={formData.tripDetails.travelStyle}
                      onValueChange={(value) => handleTripDetailsChange("travelStyle", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="luxury">Luxury & Premium</SelectItem>
                        <SelectItem value="comfort">Comfort & Mid-range</SelectItem>
                        <SelectItem value="budget">Budget Friendly</SelectItem>
                        <SelectItem value="adventure">Adventure & Trekking</SelectItem>
                        <SelectItem value="cultural">Cultural & Heritage</SelectItem>
                        <SelectItem value="family">Family Friendly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range (Per Person)</label>
                    <Select
                      value={formData.tripDetails.budget}
                      onValueChange={(value) => handleTripDetailsChange("budget", value)}
                    >
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
              </CardContent>
            </Card>

            {/* Services Required */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2 text-purple-600" />
                  Services Required
                </CardTitle>
                <CardDescription>Select the services you need for your trip</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { key: "tours", label: "Tours & Sightseeing", desc: "Guided tours and attractions" },
                    { key: "hotels", label: "Hotel Accommodation", desc: "Booking and reservations" },
                    { key: "transport", label: "Transport Rental", desc: "Cars, vans, and drivers" },
                    { key: "food", label: "Food Tours", desc: "Culinary experiences" },
                    { key: "guide", label: "Tour Guide", desc: "Professional local guides" },
                    { key: "photography", label: "Photography Service", desc: "Professional trip photography" },
                  ].map((service) => (
                    <Card
                      key={service.key}
                      className={`cursor-pointer transition-colors ${formData.services[service.key as keyof typeof formData.services] ? "bg-green-50 border-green-200" : ""}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id={service.key}
                            checked={formData.services[service.key as keyof typeof formData.services]}
                            onCheckedChange={(checked) => handleServiceChange(service.key, checked as boolean)}
                          />
                          <div>
                            <label htmlFor={service.key} className="font-medium cursor-pointer">
                              {service.label}
                            </label>
                            <p className="text-xs text-gray-600 mt-1">{service.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Requirements</CardTitle>
                <CardDescription>Any special requests, dietary restrictions, or specific preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Tell us about any special requirements: dietary restrictions, accessibility needs, specific places you want to visit, activities you want to avoid, accommodation preferences, etc."
                  rows={5}
                  value={formData.requirements}
                  onChange={(e) => setFormData((prev) => ({ ...prev, requirements: e.target.value }))}
                />
              </CardContent>
            </Card>

            {/* Submit Button */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Ready to Get Your Quote?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our travel experts will review your requirements and send you a detailed, personalized quote within 24
                  hours.
                </p>
                <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Clock className="h-5 w-5 mr-2 animate-spin" />
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5 mr-2" />
                      Get My Custom Quote
                    </>
                  )}
                </Button>
                <p className="text-xs text-gray-500 mt-2">* We'll respond within 24 hours with a detailed proposal</p>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  )
}
