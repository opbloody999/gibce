import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CoursesSection from '@/components/CoursesSection';
import FacultySection from '@/components/FacultySection';
import GallerySection from '@/components/GallerySection';
import DownloadsSection from '@/components/DownloadsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  // Initialize loading state
  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle intersection observer for active section tracking
  useEffect(() => {
    const sections = ['home', 'about', 'courses', 'faculty', 'gallery', 'downloads', 'contact'];
    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [isLoading]);

  // Handle smooth scrolling to sections
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = sectionId === 'home' ? 0 : 80; // Account for fixed navigation
      const top = element.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  const handleApplyClick = () => {
    toast({
      title: "Application Process",
      description: "Please download the admission form from the Downloads section and submit it to our office.",
    });
    handleNavigate('downloads');
  };

  const handleCourseSelect = (courseId: string) => {
    console.log(`Selected course: ${courseId}`);
    toast({
      title: "Course Information",
      description: `You selected ${courseId.toUpperCase()}. Check the Downloads section for detailed syllabus.`,
    });
  };

  const handleDownload = (itemId: string) => {
    console.log(`Downloading: ${itemId}`);
    toast({
      title: "Download Started",
      description: `Downloading ${itemId}... Please check your downloads folder.`,
    });
  };

  const handleContactSubmit = (data: any) => {
    console.log('Contact form submitted:', data);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={handleNavigate} activeSection={activeSection} />

      <main>
        <section id="home">
          <HeroSection onApplyClick={handleApplyClick} />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="courses">
          <CoursesSection onCourseSelect={handleCourseSelect} />
        </section>

        <section id="faculty">
          <FacultySection />
        </section>

        <section id="gallery">
          <GallerySection />
        </section>

        <section id="downloads">
          <DownloadsSection onDownload={handleDownload} />
        </section>

        <section id="contact">
          <ContactSection onSubmit={handleContactSubmit} />
        </section>
      </main>

      <Footer onNavigate={handleNavigate} />
      <BackToTop />
    </div>
  );
}