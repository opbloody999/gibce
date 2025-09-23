import Footer from '../Footer';

export default function FooterExample() {
  const handleNavigate = (section: string) => {
    console.log(`Navigating to ${section}`);
  };

  return <Footer onNavigate={handleNavigate} />;
}