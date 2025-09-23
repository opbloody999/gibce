import ContactSection from '../ContactSection';

export default function ContactSectionExample() {
  const handleSubmit = (data: any) => {
    console.log('Contact form submitted:', data);
  };

  return <ContactSection onSubmit={handleSubmit} />;
}