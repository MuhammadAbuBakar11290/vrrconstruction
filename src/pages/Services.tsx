
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building, 
  Construction, 
  Users, 
  Wrench, 
  Home, 
  Building2, 
  Hammer, 
  PaintBucket,
  CheckCircle,
  Clock,
  Shield,
  DollarSign,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 'residential',
      title: 'Residential Construction',
      icon: Home,
      description: 'Custom homes built to your exact specifications',
      fullDescription: 'From luxury custom homes to affordable housing solutions, we bring your residential dreams to life with meticulous attention to detail and superior craftsmanship.',
      features: [
        'Custom Home Design & Build',
        'Single & Multi-Family Homes',
        'Luxury Estate Construction',
        'Affordable Housing Solutions',
        'Energy-Efficient Building',
        'Smart Home Integration'
      ],
      projects: [
        { name: 'Luxury Estate - Oakwood Hills', size: '6,500 sq ft', duration: '12 months' },
        { name: 'Modern Family Home - Pine Valley', size: '3,200 sq ft', duration: '8 months' },
        { name: 'Eco-Friendly Townhomes', size: '24 units', duration: '15 months' }
      ],
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop'
    },
    {
      id: 'commercial',
      title: 'Commercial Construction',
      icon: Building2,
      description: 'Professional spaces designed for modern business',
      fullDescription: 'We specialize in creating functional, efficient commercial spaces that enhance productivity and reflect your brand identity.',
      features: [
        'Office Buildings & Complexes',
        'Retail & Shopping Centers',
        'Warehouses & Industrial',
        'Healthcare Facilities',
        'Educational Buildings',
        'Hospitality & Entertainment'
      ],
      projects: [
        { name: 'Tech Campus - Innovation Park', size: '150,000 sq ft', duration: '18 months' },
        { name: 'Medical Center Expansion', size: '45,000 sq ft', duration: '14 months' },
        { name: 'Retail Plaza Development', size: '75,000 sq ft', duration: '10 months' }
      ],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop'
    },
    {
      id: 'renovation',
      title: 'Renovation & Remodeling',
      icon: Hammer,
      description: 'Transform existing spaces with expert renovation',
      fullDescription: 'Whether updating a single room or completely transforming your property, our renovation experts deliver exceptional results that exceed expectations.',
      features: [
        'Kitchen & Bathroom Remodeling',
        'Whole House Renovations',
        'Commercial Space Updates',
        'Historic Building Restoration',
        'Accessibility Modifications',
        'Energy Efficiency Upgrades'
      ],
      projects: [
        { name: 'Victorian Home Restoration', size: '4,800 sq ft', duration: '9 months' },
        { name: 'Office Building Modernization', size: '25,000 sq ft', duration: '6 months' },
        { name: 'Historic Theater Renovation', size: '12,000 sq ft', duration: '14 months' }
      ],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop'
    },
    {
      id: 'management',
      title: 'Project Management',
      icon: Users,
      description: 'Comprehensive project oversight and coordination',
      fullDescription: 'Our experienced project managers ensure your construction project is completed on time, within budget, and to the highest quality standards.',
      features: [
        'Complete Project Planning',
        'Budget Management & Control',
        'Timeline Coordination',
        'Quality Assurance',
        'Vendor & Subcontractor Management',
        'Progress Reporting & Communication'
      ],
      projects: [
        { name: 'Multi-Phase Development', size: '500,000 sq ft', duration: '24 months' },
        { name: 'Campus Expansion Project', size: '200,000 sq ft', duration: '20 months' },
        { name: 'Mixed-Use Development', size: '350,000 sq ft', duration: '22 months' }
      ],
      image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=600&h=400&fit=crop'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'We meet to discuss your vision, requirements, and budget to understand your project goals.',
      icon: Users
    },
    {
      step: 2,
      title: 'Design & Planning',
      description: 'Our team creates detailed plans and designs that bring your vision to life.',
      icon: PaintBucket
    },
    {
      step: 3,
      title: 'Permits & Approvals',
      description: 'We handle all necessary permits and regulatory approvals for your project.',
      icon: Shield
    },
    {
      step: 4,
      title: 'Construction Phase',
      description: 'Professional execution with regular updates and quality control throughout.',
      icon: Construction
    },
    {
      step: 5,
      title: 'Final Inspection',
      description: 'Thorough quality inspection and walkthrough to ensure everything meets our standards.',
      icon: CheckCircle
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We pride ourselves on completing projects on schedule without compromising quality.'
    },
    {
      icon: DollarSign,
      title: 'Budget Control',
      description: 'Transparent pricing and careful budget management to avoid cost overruns.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control measures ensure superior craftsmanship in every project.'
    },
    {
      icon: CheckCircle,
      title: 'Complete Satisfaction',
      description: 'We stand behind our work with comprehensive warranties and ongoing support.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Our Construction Services
          </h1>
          <p className={`text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Comprehensive construction solutions tailored to meet your unique needs, 
            from concept to completion with unmatched quality and reliability.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From residential homes to commercial complexes, we deliver exceptional 
              construction services across all sectors.
            </p>
          </div>
          <Tabs defaultValue="residential" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="flex items-center gap-2">
                  <service.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="animate-slide-in-left">
                    <div className="flex items-center mb-4">
                      <service.icon className="h-8 w-8 text-primary mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{service.fullDescription}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="gradient-construction text-white hover:opacity-90">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="animate-slide-in-right">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-2xl w-full hover-lift"
                    />
                    <div className="mt-8 space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">Recent Projects</h4>
                      {service.projects.map((project, index) => (
                        <Card key={index} className="hover-lift border-l-4 border-l-primary">
                          <CardContent className="p-4">
                            <h5 className="font-semibold text-gray-900 mb-1">{project.name}</h5>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">{project.size}</Badge>
                              <Badge variant="outline">{project.duration}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Construction Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven process that ensures quality results, clear communication, 
              and timely completion of every project.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center animate-bounce-in">
                  <div className="relative mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <step.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-primary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose VRR Construction?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver more than just construction services - we provide peace of mind 
              through our commitment to excellence and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-lift animate-slide-up border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Service Areas & Specializations
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We serve clients across the region with specialized expertise in various construction sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover-lift animate-bounce-in">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Geographic Coverage</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Metropolitan Area</li>
                  <li>• Suburban Communities</li>
                  <li>• Rural Developments</li>
                  <li>• Multi-State Projects</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 hover-lift animate-bounce-in">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Specialized Services</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Green Building & LEED</li>
                  <li>• Historic Restoration</li>
                  <li>• Seismic Retrofitting</li>
                  <li>• Accessibility Compliance</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 hover-lift animate-bounce-in">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Industry Expertise</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Healthcare & Medical</li>
                  <li>• Educational Facilities</li>
                  <li>• Hospitality & Retail</li>
                  <li>• Industrial & Manufacturing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-construction text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-orange-100 animate-slide-up">
            Contact our expert team today to discuss your construction needs and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-200 px-8 py-3">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-gray-200 hover:text-primary px-8 py-3">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
