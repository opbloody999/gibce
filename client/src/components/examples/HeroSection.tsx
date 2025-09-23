import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  const handleApplyClick = () => {
    console.log('Apply Now button clicked');
  };

  return <HeroSection onApplyClick={handleApplyClick} />;
}