 import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: 'about', label: 'About' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'courses', label: 'Courses' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
    { id: 'downloads', label: 'Downloads' },
  ];

  const courses = [
    'Diploma in Commerce (OSP/Accounts)',
    'Diploma in Information Technology',
    'Certificate in Information Technology',
    'Microsoft Office Applications'
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://share.google/HJKzggIRXvhyNhE89', label: 'Facebook' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institution Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">GIBCE</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Government Institute of Business & Commercial Education, Khairpur Mir's, 
              dedicated to providing quality technical and commercial education since 1995.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => window.open(social.url, '_blank')}
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="space-y-2">
                {/* First column */}
                <li>
                  <button onClick={() => onNavigate('about')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-footer-about">About</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('courses')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-footer-courses">Courses</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('contact')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-footer-contact">Contact</button>
                </li>
              </ul>
              <ul className="space-y-2">
                {/* Second column */}
                <li>
                  <button onClick={() => onNavigate('faculty')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-footer-faculty">Faculty</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('gallery')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-footer-gallery">Gallery</button>
                </li>
                <li>
                  <button onClick={() => onNavigate('downloads')} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-footer-downloads">Downloads</button>
                </li>
              </ul>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-sm leading-relaxed">
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm leading-relaxed">
                  Khairpur Mir's, Sindh, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +92 312 2394824
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  gibce.khp@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Government Institute of Business & Commercial Education (GIBCE). 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
