import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Settings, Truck, Smartphone, BarChart3, Shield, Zap, Clock, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">cents</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Solutions
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Operator Stories
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Resources
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Company
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Login
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Schedule Demo</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 text-balance">
                One system powering your entire laundry business
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The most integrated laundry and dry cleaning business management system in the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Schedule a Demo
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Trusted by customer reviews</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-laundromat-with-washing-machines-in-a-row.png"
                alt="Modern laundromat with washing machines"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Stores Love Cents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why 4,000+ stores love Cents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Point of Sale</h3>
                <p className="text-gray-600">
                  Process orders, sales, and payments in one system designed for the industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Machine Integration</h3>
                <p className="text-gray-600">
                  Keep everything about your machines integrated with your POS, including what's going on.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Business Management</h3>
                <p className="text-gray-600">
                  Access everything from the business manager to see the big picture and understand your business.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pickup & Delivery</h3>
                <p className="text-gray-600">
                  Connect your online with pickup and delivery, getting your customers in the app efficiently.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/smiling-woman-working-at-laundromat-counter.png" alt="Happy laundromat employee" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Built for your success</h3>
              <p className="text-lg text-gray-600 mb-8">
                Our platform is designed specifically for laundry and dry cleaning businesses, with features that help
                you streamline operations and grow your revenue.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Easy to use interface</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">24/7 customer support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Industry-specific features</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Solutions that work better together</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Our integrated platform connects every aspect of your business, so you have everything you need in one
            system.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              Business Management & POS
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              Pickup & Delivery
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              Payment Systems
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              AI Cost Cutter
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              Marketing Tools
            </Badge>
          </div>
        </div>
      </section>

      {/* Transform Operations */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Transform your operations</h2>
              <p className="text-xl text-blue-100 mb-8">
                Streamline your entire business with our comprehensive platform designed specifically for laundry and
                dry cleaning operations.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
                Learn More
              </Button>
            </div>
            <div className="relative">
              <img src="/modern-laundry-business-dashboard-on-tablet.png" alt="Business dashboard" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/team-of-laundry-business-professionals-collaborati.png" alt="Team collaboration" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Your partner in success</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're more than just software - we're your partner in innovating and growing a laundromat. That's why we
                provide an industry-leading customer support and success team dedicated to helping you reach your
                business goals.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn how we can help
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customizable Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Customizable solutions to run your business
          </h2>
          <div className="flex justify-center mb-12">
            <div className="flex bg-white rounded-lg p-1 shadow-sm">
              <Button variant="default" className="bg-blue-600 text-white">
                Self-Service
              </Button>
              <Button variant="ghost" className="text-gray-600">
                Full-Service
              </Button>
              <Button variant="ghost" className="text-gray-600">
                Pickup & Delivery
              </Button>
              <Button variant="ghost" className="text-gray-600">
                Dry Cleaning
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Self-Service</h3>
              <p className="text-lg text-gray-600 mb-8">
                The washing machine is the life source of your business. You should have access to all the information
                dashboard to making strategic decisions about your business.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Flexible payment</h4>
                      <p className="text-sm text-gray-600">Accept any form of payment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Perfect customer experience</h4>
                      <p className="text-sm text-gray-600">Increase and get a 5-star experience</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Only pay what you use</h4>
                      <p className="text-sm text-gray-600">Get the best value of your money</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Manage more with less work</h4>
                      <p className="text-sm text-gray-600">Run 5 stores from one app</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                Learn more about Self-Service →
              </Button>
            </div>
            <div>
              <img src="/modern-self-service-laundromat-with-payment-kiosks.png" alt="Self-service laundromat" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold text-blue-400">cents</span>
              <p className="mt-4 text-gray-400">
                The most integrated laundry and dry cleaning business management system.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Self-Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Full-Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pickup & Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Dry Cleaning
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cents. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
