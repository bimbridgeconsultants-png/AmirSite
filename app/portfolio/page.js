'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Building2, CheckCircle, ArrowRight } from 'lucide-react'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState({})

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

  const projects = [
    {
      name: 'Dilip Buildcon',
      category: 'Infrastructure EPC',
      description: 'A leading infrastructure company aimed to streamline their EPC project workflows using Autodesk Build. The focus was on-site collaboration, project tracking, and issue management.',
      outcomes: [
        'Enhanced communication and coordination among project teams using site collaboration tools',
        'Faster issue identification and resolution',
        'Seamless resource management with on-site deployment ensuring smooth implementation',
        'Continuous support throughout project lifecycle'
      ],
      image: 'https://images.unsplash.com/photo-1665255956252-9ba1ac05749d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb258ZW58MHx8fGJsdWV8MTc2MTI0MDg2OXww&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Al Maktoum International Airport (DWC)',
      category: 'Major Infrastructure',
      description: 'Major international airport project in Dubai requiring comprehensive BIM services for design coordination, clash detection, and construction documentation across multiple building systems.',
      outcomes: [
        'Full BIM coordination across architectural, structural, and MEP disciplines',
        'Early clash detection preventing costly construction delays',
        'Detailed construction documentation supporting seamless execution',
        'Collaboration with international design and construction teams'
      ],
      image: 'https://images.unsplash.com/photo-1618234821751-a23a37e49673?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb258ZW58MHx8fGJsdWV8MTc2MTI0MDg2OXww&ixlib=rb-4.1.0&q=85',
      note: 'Project undertaken under Archcorp Creative Technologies'
    },
    {
      name: 'EMAAR SOUTH',
      category: 'Large-Scale Development',
      description: 'Comprehensive BIM services for EMAAR SOUTH, a major mixed-use development project requiring integrated BIM modeling, visualization, and coordination services for residential, commercial, and infrastructure components.',
      outcomes: [
        'Integrated BIM models supporting master planning and phased development',
        'Advanced visualization for stakeholder presentations and approvals',
        'Quantity take-offs and cost estimation support',
        'Facility management data preparation for long-term asset management'
      ],
      image: 'https://images.unsplash.com/photo-1650630718105-497674381f3c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb258ZW58MHx8fGJsdWV8MTc2MTI0MDg2OXww&ixlib=rb-4.1.0&q=85',
      note: 'Project undertaken under Archcorp Creative Technologies'
    },
    {
      name: 'Wasl Gate By LMD',
      category: 'Commercial Development',
      description: 'Advanced BIM coordination and documentation services for Wasl Gate, providing detailed modeling, clash resolution, and construction documentation to support efficient project delivery.',
      outcomes: [
        'Precise BIM modeling across all building disciplines',
        'Comprehensive clash detection and resolution workflow',
        'High-quality construction documentation packages',
        'On-time delivery supporting construction milestones'
      ],
      image: 'https://images.unsplash.com/photo-1636907312269-d1facecaf8a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHwzRCUyMG1vZGVsaW5nfGVufDB8fHxibHVlfDE3NjEyNDA4Nzd8MA&ixlib=rb-4.1.0&q=85',
      note: 'Project undertaken under Archcorp Creative Technologies'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHw0fHxCSU0lMjBidWlsZGluZyUyMGluZm9ybWF0aW9uJTIwbW9kZWxpbmd8ZW58MHx8fGJsdWV8MTc2MTI0MDg2Mnww&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Delivering excellence across major infrastructure and construction projects in the UAE and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="section-projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div 
              key={index} 
              id={`section-project-${index}`}
              className={`transition-all duration-1000 ${isVisible[`section-project-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <Card className="overflow-hidden border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className={`relative h-[300px] sm:h-[350px] md:h-auto min-h-[400px] ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <img 
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`p-6 sm:p-8 md:p-10 lg:p-12 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} flex flex-col justify-center`}>
                    <div className="flex items-start gap-2 sm:gap-3 mb-4">
                      <Building2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-foreground break-words">
                          {project.name}
                        </h3>
                        {project.note && (
                          <p className="text-xs sm:text-sm text-muted-foreground italic mb-3 sm:mb-4">
                            {project.note}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-base sm:text-lg text-muted-foreground mb-5 sm:mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2.5 sm:space-y-3">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                        Key Outcomes:
                      </h4>
                      {project.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                          <span className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="section-stats" className={`py-20 bg-slate-50 dark:bg-slate-900 transition-all duration-1000 ${isVisible['section-stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Project Success Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence reflected in numbers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 100, suffix: '+', label: 'Projects Completed', duration: 1500 },
              { value: 100, suffix: '%', label: 'On-Time Delivery', duration: 1500 },
              { value: 95, suffix: '%', label: 'Client Retention', duration: 1500 },
              { value: 15, suffix: '+', label: 'Years of Experience', duration: 1500 }
            ].map((stat, index) => (
              <AnimatedCounter
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                duration={stat.duration}
                delay={index * 150}
                className="group"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section id="section-testimonial" className={`py-20 bg-background transition-all duration-1000 ${isVisible['section-testimonial'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-blue-500">
            <CardContent className="p-12 text-center">
              <div className="text-6xl text-blue-600 mb-6">"</div>
              <p className="text-2xl text-muted-foreground italic mb-8">
                Many of our clients come back to us for new projects. This shows that they trust our work and appreciate our professionalism. We always focus on what our clients need, and our team is dedicated to doing their best on every project.
              </p>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6" />
              <p className="text-lg font-semibold text-foreground">Bimbridge Values</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your Success Story
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to experience the same level of excellence and commitment?
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg group">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}