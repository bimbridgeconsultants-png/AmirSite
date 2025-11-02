'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  Building2, Boxes, Network, GraduationCap, Users, 
  Layers, Eye, Database, GitBranch, BookOpen, 
  Server, LayoutGrid, FileText, Smartphone, Settings,
  ArrowRight
} from 'lucide-react'

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState({})
  const [activeTab, setActiveTab] = useState('core')

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

  const serviceTabs = [
    { id: 'core', label: 'Core BIM Services' },
    { id: 'visualization', label: 'Visualization & Reality' },
    { id: 'coordination', label: 'Coordination & Data' },
    { id: 'consulting', label: 'Consulting & Training' },
    { id: 'manpower', label: 'Manpower Outsourcing' }
  ]

  const coreServices = [
    {
      icon: Building2,
      title: 'Architectural BIM',
      description: 'Transform designs with precision, efficiency, and collaboration. Deliver intelligent 3D models, smart documentation, accurate quantity take-offs, stunning visualizations, and seamless coordination.'
    },
    {
      icon: Layers,
      title: 'Structural BIM',
      description: 'Accurate 3D modelling, detailing, and documentation of all structural elements including precast, rebar, and concrete. Bar bending schedules and quantity take-offs for enhanced integrity.'
    },
    {
      icon: Network,
      title: 'MEP BIM',
      description: 'Create digital models and integrate data to design, plan, and manage building systems efficiently. Includes modeling, design development, schedules, and coordination.'
    },
    {
      icon: LayoutGrid,
      title: 'Interior Design BIM',
      description: '3D interior modeling, material libraries, smart documentation, lighting simulation, and high-quality visualizations for faster approvals and impactful spaces.'
    },
    {
      icon: FileText,
      title: 'CAD to BIM Conversion',
      description: 'Convert CAD drawings, sketches, or PDFs into intelligent BIM models (LOD 200-500) with full parametric capabilities and detailed information.'
    },
    {
      icon: Boxes,
      title: 'As-Built BIM',
      description: 'Digital representation of actual building state after construction, capturing accurate data for maintenance, facility management, and operational use with point cloud modeling.'
    }
  ]

  const visualizationServices = [
    {
      icon: Eye,
      title: '3D Rendering & Visualization',
      description: 'Photorealistic renderings that bring your designs to life with stunning detail and accuracy for presentations and marketing.'
    },
    {
      icon: Smartphone,
      title: 'Walkthroughs & Flythroughs',
      description: 'Immersive animated tours through your projects, allowing stakeholders to experience spaces before construction begins.'
    },
    {
      icon: Layers,
      title: 'Virtual Reality (VR)',
      description: 'Fully immersive VR experiences that enable clients to walk through and interact with designs in a virtual environment.'
    },
    {
      icon: Network,
      title: 'Augmented Reality (AR)',
      description: 'Overlay BIM models onto real-world environments for on-site visualization and validation of designs.'
    }
  ]

  const coordinationServices = [
    {
      icon: GitBranch,
      title: 'Clash Detection & Resolution',
      description: 'Identify and resolve conflicts between architectural, structural, and MEP systems before construction to prevent costly rework.'
    },
    {
      icon: Network,
      title: 'Interdisciplinary Coordination',
      description: 'Seamless integration of all building systems ensuring smooth collaboration between all project stakeholders.'
    },
    {
      icon: Database,
      title: 'BIM Object Library',
      description: 'Standardized, data-rich digital components for architectural, structural, and MEP elements that streamline design and documentation.'
    },
    {
      icon: Server,
      title: 'Asset Data Management',
      description: 'Organized collection and maintenance of digital information for facility management, COBie integration, and asset tagging.'
    }
  ]

  const consultingServices = [
    {
      icon: GraduationCap,
      title: 'BIM Implementation',
      description: 'Comprehensive BIM implementation planning, documentation setup, standards development, and workflow optimization for your organization.'
    },
    {
      icon: Server,
      title: 'Common Data Environment (CDE)',
      description: 'CDE advisory, implementation, and training with AI and customization integrations for efficient collaboration across project lifecycle.'
    },
    {
      icon: BookOpen,
      title: 'BIM Training & Workshops',
      description: 'Software training, smart BIM workflow training with AI & ML, and design-to-construction digital project delivery training.'
    },
    {
      icon: Settings,
      title: 'Specialized Consultancy',
      description: 'Expert guidance on developer and authority criteria, project-specific BIM strategies, and compliance requirements.'
    }
  ]

  const manpowerServices = [
    {
      icon: Users,
      title: 'Architectural Modelers',
      description: 'Skilled professionals experienced in creating detailed architectural BIM models with precision and efficiency.'
    },
    {
      icon: Users,
      title: 'MEP Modelers',
      description: 'Expert MEP modelers who ensure accurate representation of all mechanical, electrical, and plumbing systems.'
    },
    {
      icon: Users,
      title: 'Structural Modelers',
      description: 'Specialized structural modeling experts proficient in steel, concrete, and precast detailing.'
    },
    {
      icon: Users,
      title: 'BIM Coordinators',
      description: 'Experienced coordinators who manage clash detection, interdisciplinary coordination, and project workflows.'
    },
    {
      icon: Users,
      title: 'In-House BIM Manager',
      description: 'Dedicated BIM managers to oversee your projects, establish standards, and ensure quality delivery.'
    }
  ]

  const getActiveServices = () => {
    switch(activeTab) {
      case 'core': return coreServices
      case 'visualization': return visualizationServices
      case 'coordination': return coordinationServices
      case 'consulting': return consultingServices
      case 'manpower': return manpowerServices
      default: return coreServices
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
              Comprehensive BIM Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              From modeling to implementation, we deliver end-to-end BIM solutions tailored to your project needs
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="py-6 bg-background border-b sticky top-16 z-40">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap gap-2 justify-center">
      {serviceTabs.map((tab) => (
        <Button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          variant={activeTab === tab.id ? 'default' : 'outline'}
          className={`
            rounded-full transition-all duration-200
            text-sm sm:text-base
            px-2.5 sm:px-4 py-1 sm:py-2
            ${activeTab === tab.id 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'border border-gray-300 text-gray-700 hover:bg-gray-100'}
          `}
        >
          {tab.icon && (
            <tab.icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
          )}
          <span className="max-sm:text-xs">{tab.label}</span>
        </Button>
      ))}
    </div>
  </div>
</section>




      {/* Services Grid */}
      <section id="section-services" className={`py-20 bg-slate-50 dark:bg-slate-900 transition-all duration-1000 ${isVisible['section-services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              {serviceTabs.find(t => t.id === activeTab)?.label}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {activeTab === 'core' && 'Essential BIM modeling and documentation services for all building disciplines'}
              {activeTab === 'visualization' && 'Bring your designs to life with immersive visualization technologies'}
              {activeTab === 'coordination' && 'Ensure seamless integration and data management across all systems'}
              {activeTab === 'consulting' && 'Expert guidance and training to maximize your BIM capabilities'}
              {activeTab === 'manpower' && 'Skilled BIM professionals to augment your project teams'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getActiveServices().map((service, index) => {
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
        </div>
      </section>

      {/* Process Section */}
      <section id="section-process" className={`py-20 bg-background transition-all duration-1000 ${isVisible['section-process'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to delivering exceptional BIM services
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understand your project requirements and goals' },
              { step: '02', title: 'Planning', desc: 'Develop customized BIM strategy and workflows' },
              { step: '03', title: 'Execution', desc: 'Deliver high-quality BIM services with precision' },
              { step: '04', title: 'Support', desc: 'Provide ongoing assistance and project optimization' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="section-tech" className={`py-20 bg-slate-50 dark:bg-slate-900 transition-all duration-1000 ${isVisible['section-tech'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Cutting-Edge Technology</h2>
            <p className="text-xl text-muted-foreground mb-12">
              We leverage the latest BIM software and integrate AI and ML technologies to deliver smart, efficient workflows
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Autodesk Revit', 'Navisworks', 'BIM 360', 'AI & ML Integration'].map((tech, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <p className="font-semibold text-foreground">{tech}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss which services are right for your project
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg group">
              Contact Us Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}