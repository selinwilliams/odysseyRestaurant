// components/about/Gallery.tsx
import Image from 'next/image';

export default function Gallery() {
  const images = [
    { src: "/images/gallery/dish1.jpg", alt: "Signature seafood dish" },
    { src: "/images/gallery/interior1.jpg", alt: "Restaurant interior" },
    { src: "/images/gallery/dish2.jpg", alt: "Mediterranean appetizer" },
    { src: "/images/gallery/staff1.jpg", alt: "Our culinary team" },
    { src: "/images/gallery/dish3.jpg", alt: "Dessert platter" },
    { src: "/images/gallery/event1.jpg", alt: "Private event" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative h-64 rounded-lg overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}