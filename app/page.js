'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Building2, Users, Award, CheckCircle, ChevronRight } from 'lucide-react'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[id^="section-"]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: 'Core BIM Services',
      description: 'Architectural, Structural, and MEP BIM Modeling (LOD 200-500), CAD to BIM Conversion',
      icon: Building2
    },
    {
      title: 'Visualization & Reality',
      description: '3D Rendering, Walkthroughs, VR & AR experiences for immersive project visualization',
      icon: Award
    },
    {
      title: 'Coordination & Data',
      description: 'Clash Detection, Resolution, Asset Data Management, and COBie Integration',
      icon: CheckCircle
    },
    {
      title: 'Consulting & Training',
      description: 'BIM Implementation, CDE Setup, AI/ML Workflows, and comprehensive training programs',
      icon: Users
    }
  ]

  const stats = [
   
    { value: 15, suffix: '+', label: 'Years Experience', duration: 1200 },
    { value: 100, suffix: '+', label: 'Projects Delivered', duration: 2000 },
    { value: 25, suffix: '+', label: 'Expert Team', duration: 1200 },
    { value: 95, suffix: '%', label: 'Client Satisfaction', duration: 1500 }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1650630718105-497674381f3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb258ZW58MHx8fGJsdWV8MTc2MTI0MDg2OXww&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 z-1" />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              BIM That Builds Confidence<br />
              <span className="text-blue-400">and Stronger Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your construction projects with cutting-edge BIM technology and 20 years of expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group">
                  Explore Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-[#000000] hover:bg-white hover:text-slate-900 px-8 py-6 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 sm:bottom-24 left-[47%] sm:left-1/2 transform -translate-x-1/2 animate-bounce">
  <ChevronRight className="w-8 h-8 text-white rotate-90" />
</div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                duration={stat.duration}
                delay={index * 200}
                className="group"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="section-about" className={`py-20 bg-background transition-all duration-1000 ${isVisible['section-about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                The BIM Partner You Can Trust
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
              Founded by Amir Khan with over 15 years of BIM expertise in the India UAE,Saudi Arabia, Bimbridge delivers high-quality BIM services that help architects, engineers, and builders succeed.
             
              </p>
              <p className="text-lg text-muted-foreground mb-8">
              Our mission is to make building projects easier and more successful with innovative BIM solutions tailored to each client's needs.              </p>
              <Link href="/about">
                <Button className="bg-blue-600 hover:bg-blue-700 group">
                  Learn More About Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618234821751-a23a37e49673?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb258ZW58MHx8fGJsdWV8MTc2MTI0MDg2OXww&ixlib=rb-4.1.0&q=85"
                alt="B Square Global"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="section-services" className={`py-20 bg-slate-50 dark:bg-slate-900 transition-all duration-1000 ${isVisible['section-services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive BIM solutions from modeling to implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-500"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
                View All Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="section-portfolio" className={`py-20 bg-background transition-all duration-1000 ${isVisible['section-portfolio'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence across major infrastructure and construction projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { name: 'Dilip Buildcon', desc: 'Streamlined EPC project workflows with enhanced site collaboration',src:"https://images.unsplash.com/photo-1665255956252-9ba1ac05749d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb258ZW58MHx8fGJsdWV8MTc2MTI0MDg2OXww&ixlib=rb-4.1.0&q=85" },
              { name: 'Al Maktoum International Airport', desc: 'Major infrastructure BIM implementation in Dubai',src:"https://images.unsplash.com/photo-1618234821751-a23a37e49673?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3R1cmU%3D&ixlib=rb-4.1.0&q=85" },
              { name: 'EMAAR SOUTH', desc: 'Comprehensive BIM services for large-scale development',src:"https://images.unsplash.com/photo-1650630718105-497674381f3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb258ZW58MHx8fGJsdWV8MTc2MTI0MDg2OXww&ixlib=rb-4.1.0&q=85" },
              { name: 'Wasl Gate By LMD', desc: 'Advanced coordination and documentation services',src:"https://images.unsplash.com/photo-1636907312269-d1facecaf8a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHwzRCUyMG1vZGVsaW5nfGVufDB8fHxibHVlfDE3NjEyNDA4Nzd8MA&ixlib=rb-4.1.0&q=85" }
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
  <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
    <img 
      src={project.src}
      alt={project.name}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />
    
    {/* Text overlay on image */}
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 z-10">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 line-clamp-2">
        {project.name}
      </h3>
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
        {project.desc}
      </p>
    </div>
  </div>
</Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
                View Full Portfolio
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHwzRCUyMG1vZGVsaW5nfGVufDB8fHxibHVlfDE3NjEyNDA4Nzd8MA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Projects?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our BIM expertise can drive your project success
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg group">
              Get In Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}