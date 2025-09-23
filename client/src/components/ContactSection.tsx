import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactSectionProps {
  onSubmit: (data: ContactFormData) => void;
}

export default function ContactSection({ onSubmit }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // FormSubmit will handle the form submission
    console.log('Form submitted via FormSubmit:', formData);
    onSubmit(formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Beside Govt.Comprehensive HS School Near Therhi Phattak, 66020', 'Khairpur Mir\'s, Sindh, Pakistan']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+92 312 2394824']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['gibce.khp@gmail.com']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Morning Classes: 9:00 AM - 1:30 PM', 'Evening Classes: 2:30 PM - 5:30 PM']
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://share.google/HJKzggIRXvhyNhE89', label: 'Facebook' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' }
  ];

  return (
    <section className="py-16 bg-muted/30" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or any information about our programs. 
            We're here to help you start your educational journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(social.url, '_blank')}
                      data-testid={`link-social-${social.label.toLowerCase()}`}
                    >
                      <social.icon className="w-4 h-4" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  action="https://formsubmit.co/babaraliarain804@gmail.com" 
                  method="POST" 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      data-testid="input-subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      data-testid="textarea-message"
                    />
                    
                    {/* FormSubmit configuration */}
                    <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                    <input type="hidden" name="_subject" value="New Contact Form Submission - GIBCE" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto bg-primary hover:bg-primary/90"
                    data-testid="button-submit-contact"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="mt-6">
              <CardContent className="p-0">
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1443.00123456789!2d68.764094!3d27.526313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d65b27986f4f%3A0x6c8c6d4d1adf96e6!2sGovernment%20Comprehensive%20Higher%20Secondary%20School%2C%20Khairpur%20Mirs%2C%20Sindh!5e1!3m2!1sen!2s!4v1685971258976!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GIBCE Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}