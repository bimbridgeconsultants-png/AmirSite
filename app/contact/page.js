'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, Globe, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

// EmailJS Configuration - Replace these with your actual values
const EMAILJS_SERVICE_ID = 'service_lnmkfda'
const EMAILJS_TEMPLATE_ID = 'template_1wavrz8'
const EMAILJS_PUBLIC_KEY = 'KZv3qFH9b90bfV39Q'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Load EmailJS script dynamically if not already loaded
      if (!window.emailjs) {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
        script.async = true
        document.head.appendChild(script)
        
        await new Promise((resolve, reject) => {
          script.onload = resolve
          script.onerror = reject
        })
        
        // Initialize EmailJS
        window.emailjs.init(EMAILJS_PUBLIC_KEY)
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        message: formData.message,
        to_name: 'B Square Global Team'
      }

      // Send email using EmailJS
      const response = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      if (response.status === 200) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.' 
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHwzRCUyMG1vZGVsaW5nfGVufDB8fHxibHVlfDE3NjEyNDA4Nzd8MA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Let's discuss how we can help transform your construction projects with our BIM expertise
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-2 hover:border-blue-500 transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
                  
                  {status.message && (
                    <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                      status.type === 'success' 
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300' 
                        : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                    }`}>
                      {status.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      )}
                      <p>{status.message}</p>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 50 123 4567"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project requirements..."
                        className="w-full min-h-[150px]"
                      />
                    </div>

                    <Button 
                      onClick={handleSubmit}
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700 group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Reach out to us directly through any of the following channels. Our team is ready to assist you with your BIM needs.
                </p>
              </div>

              <div className="space-y-6">
                {/* <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">Email</h3>
                        <p className="text-muted-foreground mb-1">
                          <a href="mailto:Bhavin.s@bsquareglobalfze.com" className="hover:text-blue-600 transition-colors">
                            Bhavin.s@bsquareglobalfze.com
                          </a>
                        </p>
                        <p className="text-muted-foreground">
                          <a href="mailto:Mohan.b@bsquareglobalfze.com" className="hover:text-blue-600 transition-colors">
                            Mohan.b@bsquareglobalfze.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}

                <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">Phone</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:+971563045152" className="hover:text-blue-600 transition-colors">
                            +919545031601
                          </a>
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">+971589931660</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">Website</h3>
                        <p className="text-muted-foreground">
                          <a href="http://www.bsquareglobalfze.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                            www.bimbridge.in
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">Location</h3>
                        <p className="text-muted-foreground">
                        Location India,UAE,Saudi Arabia
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Serving clients across the UAE and beyond</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Business Hours */}
              <Card className="bg-gradient-to-br from-blue-900 to-slate-900 text-white border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-200">
                    <div className="flex justify-between">
                      <span>Sunday - Thursday</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday - Saturday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}