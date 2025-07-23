
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Building,
  Users,
  Calendar,
  MessageSquare,
  Plus,
  Minus
} from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      description: 'Call us during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@vrrconstruction.com', 'quotes@vrrconstruction.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['123 Construction Avenue', 'Suite 200, City, State 12345'],
      description: 'Visit our office for consultations'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 7:00 AM - 6:00 PM', 'Sat: 8:00 AM - 4:00 PM'],
      description: 'Emergency services available 24/7'
    }
  ];

  const officeLocations = [
    {
      name: 'Main Office',
      address: '123 Construction Avenue, Suite 200',
      city: 'Downtown, State 12345',
      phone: '+1 (555) 123-4567',
      services: ['General Contracting', 'Project Management', 'Consulting']
    },
    {
      name: 'North Branch',
      address: '456 Industrial Blvd',
      city: 'North City, State 12346',
      phone: '+1 (555) 123-4568',
      services: ['Commercial Construction', 'Industrial Projects']
    },
    {
      name: 'South Branch',
      address: '789 Residential Way',
      city: 'South City, State 12347',
      phone: '+1 (555) 123-4569',
      services: ['Residential Construction', 'Renovations']
    }
  ];

  const faqs = [
    {
      question: 'How do I get a project quote?',
      answer: 'Fill out our contact form with project details, or call us directly. We provide free consultations and detailed quotes within 48 hours.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve the entire metropolitan area and surrounding regions. For projects outside our standard service area, please contact us to discuss options.'
    },
    {
      question: 'Do you handle permits and approvals?',
      answer: 'Yes, we manage all necessary permits, inspections, and regulatory approvals as part of our comprehensive project management services.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Timelines vary by project size and complexity. Residential projects typically take 3-12 months, while commercial projects can range from 6-24 months.'
    }
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
            Get In Touch
          </h1>
          <p className={`text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Ready to start your construction project? Contact our expert team for a free consultation 
            and personalized quote tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-0 animate-slide-in-left">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <MessageSquare className="h-6 w-6 mr-3 text-primary" />
                    Request a Quote
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed response.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Company name (optional)"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select onValueChange={(value) => handleSelectChange('projectType', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential Construction</SelectItem>
                            <SelectItem value="commercial">Commercial Building</SelectItem>
                            <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
                            <SelectItem value="consulting">Consulting Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-50k">Under $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                            <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                            <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                            <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Preferred Timeline</Label>
                      <Select onValueChange={(value) => handleSelectChange('timeline', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="When would you like to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-12-months">6-12 months</SelectItem>
                          <SelectItem value="planning">Still planning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1 min-h-[120px]"
                        placeholder="Please describe your project in detail, including size, location, special requirements, and any other relevant information..."
                      />
                    </div>

                    <Button type="submit" className="w-full gradient-construction text-white hover:opacity-90 py-3">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>

                    <div className="text-sm text-gray-500 text-center">
                      * Required fields. We respect your privacy and will never share your information.
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in-right">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-lift border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 mb-1">{detail}</p>
                        ))}
                        <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Emergency Contact */}
              <Card className="bg-primary text-white hover-lift border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">24/7 Emergency Services</h3>
                      <p className="text-orange-100 mb-2">+1 (555) 911-BUILD</p>
                      <p className="text-sm text-orange-100">
                        For construction emergencies, safety issues, or urgent project concerns.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Office Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit one of our convenient locations or schedule an on-site consultation for your project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <Card key={index} className="hover-lift animate-bounce-in border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Building className="h-5 w-5 mr-2 text-primary" />
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">{location.address}</p>
                        <p className="text-gray-700">{location.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-primary mr-2" />
                      <p className="text-gray-700">{location.phone}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Services Available:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {location.services.map((service, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-primary mr-2" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our construction services and process.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover-lift animate-slide-up border-0 shadow-lg">
                <CardContent className="p-6">
                  <div 
                    className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-all duration-200 group"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">{faq.question}</h3>
                    <div className="ml-4 p-2 rounded-full hover:bg-primary/10 transition-colors duration-200">
                      <div className={`transform transition-all duration-400 ease-out ${
                        expandedFAQ === index 
                          ? 'rotate-180 scale-110' 
                          : 'rotate-0 scale-100 hover:scale-105'
                      }`}>
                        {expandedFAQ === index ? (
                          <Minus className="h-5 w-5 text-primary transition-all duration-300 ease-in-out animate-icon-spin" />
                        ) : (
                          <Plus className="h-5 w-5 text-primary transition-all duration-300 ease-in-out group-hover:text-primary/80" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedFAQ === index 
                      ? 'max-h-96 opacity-100 mt-4 mb-2' 
                      : 'max-h-0 opacity-0 mt-0 mb-0'
                  }`}>
                    <div className={`px-3 pb-3 border-l-4 border-primary/20 ml-3 ${
                      expandedFAQ === index ? 'animate-faq-content' : ''
                    }`}>
                      <p className="text-gray-600 leading-relaxed pl-4">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <Button className="gradient-construction text-white hover:opacity-90">
              <Phone className="mr-2 h-4 w-4" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">
            Find Us On The Map
          </h2>
          <p className="text-lg text-gray-300 mb-12 animate-slide-up">
            Our main office is conveniently located in the heart of the construction district, 
            with easy access to major highways and project sites.
          </p>
          <div className="bg-gray-800 rounded-lg p-8 animate-bounce-in">
            {!showMap ? (
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-xl font-semibold mb-2">Interactive Map</p>
                  <p className="text-gray-400">
                    123 Construction Avenue, Suite 200<br />
                    Downtown, State 12345
                  </p>
                  <Button 
                    className="mt-4 gradient-construction text-white hover:opacity-90"
                    onClick={toggleMap}
                  >
                    {showMap ? 'Hide Map' : 'Get Directions'}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Our Location</h3>
                  <Button 
                    variant="outline"
                    onClick={toggleMap}
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Hide Map
                  </Button>
                </div>
                <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2819098619283!2d-74.00597488459394!3d40.71427797933049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e8b9e4d%3A0x6a1c9f4b8e4b9e4d!2s123%20Construction%20Ave%2C%20New%20York%2C%20NY%2010013!5e0!3m2!1sen!2sus!4v1635724800000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VRR Construction Office Location"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Address
                    </h4>
                    <p className="text-gray-300">
                      123 Construction Avenue, Suite 200<br />
                      Downtown, State 12345
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact
                    </h4>
                    <p className="text-gray-300">
                      Phone: +1 (555) 123-4567<br />
                      Email: info@vrrconstruction.com
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button 
                    className="gradient-construction text-white hover:opacity-90"
                    onClick={() => window.open('https://maps.google.com/maps?q=123+Construction+Avenue+Suite+200+Downtown+State+12345', '_blank')}
                  >
                    Open in Google Maps
                  </Button>
                  <Button 
                    variant="outline"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                    onClick={() => window.open('https://www.apple.com/maps/', '_blank')}
                  >
                    Open in Apple Maps
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
