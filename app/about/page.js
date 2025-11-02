'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Target, Users, Heart, CheckCircle, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import AnimatedCounter from '@/components/AnimatedCounter'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState({ 'section-overview': true })

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

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      document.querySelectorAll('[id^="section-"]').forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver high-quality results that exceed expectations, on time and within budget'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to understand their needs and deliver tailored solutions'
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'Building long-term relationships through professionalism and consistent quality'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology including AI and ML in our BIM workflows'
    }
  ]

  const achievements = [
    { value: 20, suffix: '+', label: 'Years of BIM Expertise', duration: 1500 },
    { value: 500, suffix: '+', label: 'Successful Projects', duration: 2000 },
    { value: 50, suffix: '+', label: 'Skilled Professionals', duration: 1200 },
    { value: 95, suffix: '%', label: 'Client Retention Rate', duration: 1800 }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1618234821751-a23a37e49673?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb258ZW58MHx8fGJsdWV8MTc2MTI0MDg2OXww&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              About B Square Global
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Your trusted BIM partner with two decades of expertise in transforming construction projects across the UAE
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section id="section-overview" className={`py-20 bg-background transition-all duration-1000 ${isVisible['section-overview'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1636907312269-d1facecaf8a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHwzRCUyMG1vZGVsaW5nfGVufDB8fHxibHVlfDE3NjEyNDA4Nzd8MA&ixlib=rb-4.1.0&q=85"
                alt="B Square Global Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-6">
                B Square Global is a leading BIM consulting and services company founded by Bijal Shah, bringing over 20 years of expertise in BIM technology and construction management. We specialize in helping architects, engineers, and builders deliver successful projects through innovative Building Information Modeling solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our team works closely with clients across the UAE and beyond, providing comprehensive BIM services that streamline workflows, enhance collaboration, and ensure project success from design to construction and facility management.
              </p>
              <div className="space-y-3">
                {[
                  'Expert team with decades of combined experience',
                  'Proven track record across major infrastructure projects',
                  'Cutting-edge technology including AI and ML integration',
                  'Commitment to client success and satisfaction'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="section-vision" className={`py-20 bg-slate-50 dark:bg-slate-900 transition-all duration-1000 ${isVisible['section-vision'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To make building projects easier and more successful with our BIM services. We want to give each client the best solutions for their needs, using our skilled and experienced team to drive innovation and excellence in the construction industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To transform construction projects through cutting-edge BIM technology and exceptional service delivery. We are committed to delivering high-quality results on time and within budget, while building lasting partnerships with our clients through trust and professionalism.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="section-values" className={`py-20 bg-background transition-all duration-1000 ${isVisible['section-values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-500">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="section-achievements" className={`py-20 bg-gradient-to-r from-blue-900 to-slate-900 transition-all duration-1000 ${isVisible['section-achievements'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedCounter
                key={index}
                value={achievement.value}
                suffix={achievement.suffix}
                label={achievement.label}
                duration={achievement.duration}
                delay={index * 200}
                className="group"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="section-founder" className={`py-20 bg-background transition-all duration-1000 ${isVisible['section-founder'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Led by industry experts with decades of experience
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
  <Card className="flex-1 border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
    <CardContent className="p-6 md:p-8">
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-blue-600 to-slate-700 rounded-full flex items-center justify-center mb-6">
          <Users className="w-12 h-12 md:w-16 md:h-16 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 text-foreground">Amir Khan</h3>
          <p className="text-md text-blue-600 mb-2">Founder & BIM Consultant</p>
          <p className="text-md text-muted-foreground mb-4">BIMbridge Consultants</p>
          <p className="text-md text-muted-foreground mb-4">B.E. Architectural Engineering | M.Tech Construction Engineering & Management</p>
          <p className="text-sm text-muted-foreground mb-4">
            With over 10 years of experience in the AEC industry, I founded BIMbridge Consultants with a vision to bridge the gap between design, construction, and technology through the power of Building Information Modeling (BIM).
          </p>
          <p className="text-sm text-muted-foreground">
            We are committed to transforming how projects are planned and delivered—empowering firms with smart, data-driven BIM solutions.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>

  <Card className="flex-1 border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
    <CardContent className="p-6 md:p-8">
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-blue-600 to-slate-700 rounded-full flex items-center justify-center mb-6">
          <Users className="w-12 h-12 md:w-16 md:h-16 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 text-foreground">Rupali Raut</h3>
          <p className="text-md text-blue-600 mb-4">Co-Founder & BIM Specialist</p>
          <p className="text-md text-muted-foreground mb-4">BIMbridge Consultants, Dubai</p>
          <p className="text-sm text-muted-foreground mb-4">
            With over 8 years of experience in the AEC industry, Rupali has contributed to prestigious projects including Al Marjan Island and iconic developments by Emaar Properties.
          </p>
          <p className="text-sm text-muted-foreground">
            She specializes in Building Information Modeling (BIM) and digital design workflows, combining technical expertise with a passion for innovation.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can benefit your next project
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

