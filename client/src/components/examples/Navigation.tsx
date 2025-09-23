import Navigation from '../Navigation';

export default function NavigationExample() {
  const handleNavigate = (section: string) => {
    console.log(`Navigating to ${section}`);
  };

  return (
    <div className="h-20 bg-gray-100">
      <Navigation onNavigate={handleNavigate} activeSection="home" />
    </div>
  );
}