import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Users,
  Star,
  Phone,
  Mail,
  Mountain,
  Utensils,
  Building,
  Car,
  Route,
  Sparkles,
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600">PakTrips</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#tours" className="text-sm font-medium hover:text-green-600 transition-colors">
                Tours
              </Link>
              <Link href="#hotels" className="text-sm font-medium hover:text-green-600 transition-colors">
                Hotels
              </Link>
              <Link href="#transport" className="text-sm font-medium hover:text-green-600 transition-colors">
                Transport
              </Link>
              <Link href="/make-my-trip" className="text-sm font-medium hover:text-green-600 transition-colors">
                Make My Trip
              </Link>
              <Link href="/ai-planner" className="text-sm font-medium hover:text-green-600 transition-colors">
                AI Planner
              </Link>
              <Link href="/quote" className="text-sm font-medium hover:text-green-600 transition-colors">
                Get Quote
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Clean Hero Section with Natural Pakistan Landscape */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pakistan-landscape-banner.jpg"
            alt="Beautiful Pakistan Mountains and Lakes"
            fill
            className="object-cover"
            priority
          />
          {/* Clean gradient overlay - no bubbles or geometric shapes */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/70 to-blue-600/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="backdrop-blur-sm bg-black/20 rounded-3xl p-8 md:p-12 border border-white/20">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-2xl">Discover Beautiful Pakistan</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg text-white/95">
              From the majestic mountains of the North to vibrant cities and delicious cuisine - explore Pakistan like
              never before with our curated tours and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Where do you want to go?"
                className="bg-white/90 text-black backdrop-blur border-2 border-white/50 focus:border-green-400 transition-all"
              />
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Search Tours
              </Button>
            </div>
          </div>
        </div>

        {/* Simple scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Main Services - Updated with 3 main sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Plan Your Perfect Pakistan Trip</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our three main services to create your ideal Pakistan adventure
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Make My Trip */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-green-200">
              <CardHeader className="pb-4">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Route className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl mb-2">Make My Trip</CardTitle>
                <CardDescription className="text-sm">
                  Complete trip planning with step-by-step customization. Get detailed itineraries, bookings, and
                  everything organized.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Step-by-step trip builder</li>
                  <li>• Detailed day-by-day itinerary</li>
                  <li>• Hotel & transport bookings</li>
                  <li>• Complete cost breakdown</li>
                </ul>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/make-my-trip">Start Planning</Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Planner */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-200">
              <CardHeader className="pb-4">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-xl mb-2">AI Trip Planner</CardTitle>
                <CardDescription className="text-sm">
                  Let artificial intelligence create personalized itineraries based on your preferences and interests.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• AI-powered recommendations</li>
                  <li>• Instant itinerary generation</li>
                  <li>• Smart activity suggestions</li>
                  <li>• Personalized experiences</li>
                </ul>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/ai-planner">Try AI Planner</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Get Quote */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200">
              <CardHeader className="pb-4">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">Get Custom Quote</CardTitle>
                <CardDescription className="text-sm">
                  Share your requirements and get a detailed, personalized quote from our travel experts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Expert consultation</li>
                  <li>• Detailed pricing breakdown</li>
                  <li>• Custom recommendations</li>
                  <li>• 24-hour response time</li>
                </ul>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/quote">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>North Trips</CardTitle>
                <CardDescription>Explore Hunza, Skardu, Gilgit and more</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>City Tours</CardTitle>
                <CardDescription>Discover Lahore, Karachi, Islamabad</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Utensils className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Food Tours</CardTitle>
                <CardDescription>Taste authentic Pakistani cuisine</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Building className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Hotels</CardTitle>
                <CardDescription>Comfortable stays nationwide</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* North Pakistan Tour */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <Image src="/images/hunza-valley.jpg" alt="Hunza Valley" fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-green-600">Best Seller</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Hunza Valley Adventure
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">4.9</span>
                  </div>
                </CardTitle>
                <CardDescription>7-day journey through Hunza, Attabad Lake, and Karimabad</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />7 Days
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    Max 12
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">₨85,000</span>
                  <Button size="sm" className="hover:bg-green-700">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Lahore Food Tour */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <Image src="/images/lahore-food.jpg" alt="Lahore Food" fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-orange-600">Food Tour</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Lahore Food Safari
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">4.8</span>
                  </div>
                </CardTitle>
                <CardDescription>Taste the best street food and traditional dishes in Lahore</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />1 Day
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    Max 8
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">₨8,500</span>
                  <Button size="sm" className="hover:bg-green-700">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Skardu Adventure */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <Image src="/images/skardu-mountains.jpg" alt="Skardu Mountains" fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-blue-600">Adventure</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Skardu & K2 Base Camp
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">4.7</span>
                  </div>
                </CardTitle>
                <CardDescription>Ultimate trekking experience to K2 Base Camp via Skardu</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    14 Days
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    Max 6
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">₨180,000</span>
                  <Button size="sm" className="hover:bg-green-700">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="hover:bg-green-50 bg-transparent">
              View All Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section id="hotels" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <Image src="/images/islamabad-hotel.jpg" alt="Luxury Hotel Islamabad" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Serena Hotel Islamabad</CardTitle>
                <CardDescription>5-star luxury in the capital</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">₨25,000/night</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">4.8</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <Image src="/images/lahore-hotel.jpg" alt="Hotel Lahore" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Pearl Continental Lahore</CardTitle>
                <CardDescription>Premium comfort in historic Lahore</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">₨18,000/night</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">4.6</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <Image src="/images/mountain-lodge.jpg" alt="Mountain Lodge" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Hunza Serena Inn</CardTitle>
                <CardDescription>Mountain retreat with stunning views</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">₨15,000/night</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section id="transport" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Transport Rental</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Economy Cars</CardTitle>
                <CardDescription>Perfect for city tours</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600">₨5,000/day</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Car className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>SUVs</CardTitle>
                <CardDescription>Ideal for mountain trips</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600">₨12,000/day</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Car className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Vans</CardTitle>
                <CardDescription>Group travel solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600">₨15,000/day</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Car className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Luxury Cars</CardTitle>
                <CardDescription>Premium comfort</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600">₨20,000/day</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose PakTrips?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Our local guides know Pakistan inside out, ensuring authentic experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Value</h3>
              <p className="text-gray-600">Competitive prices with no hidden costs. Quality service guaranteed.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for a worry-free travel experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Ready to explore Pakistan? Contact us to plan your perfect trip or get answers to your questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-green-400" />
                  <span>+92 300 1234567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-green-400" />
                  <span>info@paktrips.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-green-400" />
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white" />
                  <Input placeholder="Your Email" className="bg-gray-700 border-gray-600 text-white" />
                  <Input placeholder="Subject" className="bg-gray-700 border-gray-600 text-white" />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400"
                  />
                  <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">PakTrips</span>
              </div>
              <p className="text-gray-400">Your trusted partner for exploring the beauty of Pakistan.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tours
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Hotels
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Transport
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Destinations</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Northern Areas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Lahore
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Karachi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Islamabad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PakTrips. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
