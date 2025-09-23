import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/GIBCE_campus_building_facade_88e7b5be.png';

interface HeroSectionProps {
  onApplyClick: () => void;
}

export default function HeroSection({ onApplyClick }: HeroSectionProps) {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      data-testid="section-hero"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Government Institute of Business & Commercial Education
        </h1>
        <p className="text-xl sm:text-2xl mb-4 font-medium">
          GIBCE, Khairpur Mir's
        </p>
        <p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Empowering students with quality education in Information Technology, Commerce, and Office Administration. 
          Join us in shaping your future with professional excellence.
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-md shadow-lg transform hover:scale-105 transition-all duration-300"
          onClick={onApplyClick}
          data-testid="button-apply-now"
        >
          Apply Now
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}