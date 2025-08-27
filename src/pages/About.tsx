
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Award, Shield, Target, Heart, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize safety in every aspect of our work, ensuring all projects meet the highest safety standards.'
    },
    {
      icon: Target,
      title: 'Quality Excellence',
      description: 'Our commitment to quality craftsmanship ensures every project exceeds expectations and stands the test of time.'
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'We build lasting relationships with our clients through transparency, communication, and exceptional service.'
    },
    {
      icon: Award,
      title: 'Professional Integrity',
      description: 'We conduct business with honesty, reliability, and accountability in all our professional relationships.'
    }
  ];

  const team = [
    {
      name: 'Abdul Rahman',
      role: 'Founder & CEO',
      experience: '25+ Years',
      image: 'Rehman.jpg',
      specialties: ['Project Management', 'Commercial Construction', 'Team Leadership']
    },
    {
      name: 'Reyna Madrenal',
      role: 'Head of Operations',
      experience: '18+ Years',
      image: 'reyna.jpg',
      specialties: ['Operations Management', 'Quality Control', 'Client Relations']
    },
    {
      name: 'Muhammad Irfan',
      role: 'Chief Architect',
      experience: '20+ Years',
      image: 'irfan.jpg',
      specialties: ['Architectural Design', 'Sustainable Building', 'Innovation']
    },
    {
      name: 'Shafiq-Ur-Rehman',
      role: 'Project Site Engineer',
      experience: '12+ Years',
      image: 'chand.jpg',
      specialties: ['Residential Projects', 'Budget Management', 'Client Communication']
    }
  ];

  const milestones = [
    { year: '1999', event: 'VRR Construction Founded', description: 'Started as a small family business with big dreams' },
    { year: '2005', event: 'First Major Commercial Project', description: 'Completed our first large-scale commercial building' },
    { year: '2010', event: 'Expanded to Residential Market', description: 'Began offering custom home construction services' },
    { year: '2015', event: '100+ Projects Milestone', description: 'Celebrated completing over 100 successful projects' },
    { year: '2020', event: 'Green Building Certification', description: 'Became certified in sustainable construction practices' },
    { year: '2024', event: '10 Years of Excellence', description: 'Celebrating 25 years of building dreams into reality' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            About VRR Construction
          </h1>
          <p className={`text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          From past 10 years VRR Is providing services in different domains including electrical solution , interior designings, AC Services and Installation TMB Fire Integrate System, Stair-Case Pressurization 
          System and Also VRV systems.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story & Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From zero to hero, VRR Construction is the story of Founder Mr. Abdul Rehman, who began as an ordinary technician, built the child company RR Construction, and grew it into today’s flagship—VRR Construction. Established in 2015, we’ve delivered countless projects with the same grit and craftsmanship that sparked our journey.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our services span Residential Construction with Smart Home integration and Complete Electrical Solutions, specializing in: AC & VRV systems; Electrical solutions with Fire Integration and staircase pressurization; and Interior Designing. What started small now stands as a trusted, full-service partner committed to quality, safety, and on-time delivery.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=600&h=500&fit=crop"
                alt="Construction site overview"
                className="rounded-lg shadow-2xl w-full hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift animate-bounce-in border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-gray-600">
              Discover the key milestones that have shaped VRR Construction over the years.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-center mb-8 animate-slide-up">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="hover-lift border-0 shadow-lg">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-2">{milestone.year}</Badge>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our experienced professionals bring decades of combined expertise to every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover-lift animate-bounce-in">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.experience}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-primary text-primary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 animate-fade-in">
            Certifications & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-bounce-in">
              <Award className="h-16 w-16 mx-auto mb-4 text-orange-200" />
              <h3 className="text-lg font-semibold mb-2">Licensed Contractor</h3>
              <p className="text-orange-100">Fully licensed and bonded in all service areas</p>
            </div>
            <div className="animate-bounce-in">
              <Shield className="h-16 w-16 mx-auto mb-4 text-orange-200" />
              <h3 className="text-lg font-semibold mb-2">Safety Certified</h3>
              <p className="text-orange-100">OSHA compliant with excellent safety record</p>
            </div>
            <div className="animate-bounce-in">
              <Building className="h-16 w-16 mx-auto mb-4 text-orange-200" />
              <h3 className="text-lg font-semibold mb-2">Green Building</h3>
              <p className="text-orange-100">Certified in sustainable construction practices</p>
            </div>
            <div className="animate-bounce-in">
              <CheckCircle className="h-16 w-16 mx-auto mb-4 text-orange-200" />
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-orange-100">ISO 9001 certified quality management</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
