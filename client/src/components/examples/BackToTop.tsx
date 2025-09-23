import BackToTop from '../BackToTop';

export default function BackToTopExample() {
  return (
    <div className="h-screen bg-gray-100 p-8">
      <p className="text-center text-gray-600">Scroll down to see the Back to Top button</p>
      <div className="h-[200vh]"></div>
      <BackToTop />
    </div>
  );
}