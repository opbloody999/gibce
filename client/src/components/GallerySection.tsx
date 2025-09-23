import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';
import labImg1 from '@assets/generated_images/labImg1.jpg';
import labImg2 from '@assets/generated_images/labImg2.jpg';
import labImg3 from '@assets/generated_images/labImg3.jpg';
import labImg4 from '@assets/generated_images/labImg4.jpg';
import labImg5 from '@assets/generated_images/labImg5.jpg';
import graduationImage from '@assets/generated_images/Graduation_ceremony_celebration_ac4c2f50.png';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      src: labImg1,
      alt: 'Computer Lab 1',
      title: 'Computer Lab 1',
      category: 'Facilities'
    },
    {
      id: '2',
      src: labImg2,
      alt: 'Computer Lab 2',
      title: 'Computer Lab 2',
      category: 'Facilities'
    },
    {
      id: '3',
      src: labImg3,
      alt: 'Computer Lab 3',
      title: 'Computer Lab 3',
      category: 'Facilities'
    },
    {
      id: '4',
      src: graduationImage,
      alt: 'Graduation Ceremony',
      title: 'Graduation Day',
      category: 'Events'
    },
    {
      id: '5',
      src: labImg4,
      alt: 'Computer Lab 4',
      title: 'Computer Lab 4',
      category: 'Facilities'
    },
    {
      id: '6',
      src: labImg5,
      alt: 'Computer Lab 5',
      title: 'Computer Lab 5',
      category: 'Facilities'
    }
  ];

  const openImage = (image: GalleryImage) => {
    console.log('Opening image modal:', image.title);
    setSelectedImage(image);
  };

  const closeImage = () => {
    console.log('Closing image modal');
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-muted/30" data-testid="section-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our campus, facilities, and student life through these images capturing 
            the vibrant educational environment at GIBCE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card 
              key={image.id}
              className="overflow-hidden cursor-pointer hover-elevate transition-all duration-300 group"
              onClick={() => openImage(image)}
              data-testid={`img-gallery-${image.id}`}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Removed popup text overlay */}
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for image preview */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
            onClick={closeImage}
            data-testid="modal-image-preview"
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeImage}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                data-testid="button-close-modal"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              {/* Removed modal popup text */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
