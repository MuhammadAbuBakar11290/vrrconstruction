
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Construction, Users, Award, Phone, CheckCircle, ArrowRight } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Building, number: '100+', label: 'Projects Completed' },
    { icon: Users, number: '50+', label: 'Expert Team Members' },
    { icon: Award, number: '25+', label: 'Years Experience' },
    { icon: CheckCircle, number: '100%', label: 'Client Satisfaction' },
  ];

  const services = [
    {
      title: 'Residential Construction',
      description: 'Custom homes built to your specifications with attention to every detail.',
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e'
    },
    {
      title: 'Commercial Building',
      description: 'Professional commercial spaces designed for modern business needs.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625'
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our expert renovation services.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'VRR Construction transformed our vision into reality. Their attention to detail and professionalism exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'Outstanding commercial construction services. They completed our office building on time and within budget.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Developer',
      content: 'I\'ve worked with many contractors, but VRR Construction stands out for their quality and reliability.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1431576901776-e539bd916ba2)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Building Your Dreams Into Reality
          </h1>
          <p className={`text-xl sm:text-2xl mb-8 text-gray-200 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          VRR Construction professional service provider with over 10 years of experience. Quality craftsmanship, on-time delivery, and exceptional customer service.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}>
            <Button size="lg" className="gradient-construction text-white hover:opacity-90 px-8 py-3">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in hover-lift">
                <stat.icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                25+ Years of Excellence in Construction
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                VRR Construction has been at the forefront of the construction industry, delivering 
                exceptional results that stand the test of time. Our commitment to quality, 
                innovation, and customer satisfaction has made us a trusted partner for 
                residential and commercial projects.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Licensed and Insured Professionals
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Eco-Friendly Construction Practices
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  24/7 Project Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Warranty on All Work
                </li>
              </ul>
              <Link to="/about">
                <Button className="gradient-construction text-white hover:opacity-90">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace"
                alt="Construction team at work"
                className="rounded-lg shadow-2xl w-full h-96 object-cover hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Construction Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From residential homes to commercial buildings, we provide comprehensive 
              construction solutions tailored to your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift animate-slide-up border-0 shadow-lg">
                <CardHeader className="p-0">
                  <img
                    src={`${service.image}?w=400&h=250&fit=crop`}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Quote CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Get Your Free Construction Quote Today
            </h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Ready to turn your construction dreams into reality? Our expert team is here to provide 
              you with a detailed, no-obligation quote tailored to your specific project needs.
            </p>
            <div className="flex justify-center animate-bounce-in">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 px-12 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Free Quote Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-orange-200 mt-6">
              ✓ Free consultation ✓ Detailed estimate ✓ No hidden fees ✓ Expert advice
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients 
              have to say about working with VRR Construction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover-lift animate-bounce-in">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-primary rounded-full mr-1"></div>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-construction text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl mb-8 text-orange-100 animate-slide-up">
            Get in touch with our expert team today for a free consultation and quote. 
            Let's bring your vision to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white text-primary hover:text-primary px-8 py-3">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
