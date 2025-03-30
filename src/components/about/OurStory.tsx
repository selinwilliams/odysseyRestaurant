// components/about/OurStory.tsx
import Image from 'next/image';

export default function OurStory() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative h-full min-h-[400px]">
        <Image
          src="https://storage.sbtl.dev/spookyspot/restaurant-exterior.jpg"
          alt="Odyssey By Sely restaurant exterior"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-serif font-bold text-greek-white mb-4">A Culinary Journey</h3>
        <p className="text-greek-white/80 mb-4">
          Founded in 2018, Odyssey By Sely began as a dream to bring authentic Mediterranean flavors with a modern French twist to San Francisco. Our founder, Chef Sely, spent years traveling throughout Greece, Italy, and the South of France, collecting recipes and techniques from local chefs and families.
        </p>
        <p className="text-greek-white/80 mb-4">
          What started as a small pop-up restaurant quickly gained a devoted following, allowing us to open our permanent location in the heart of the city. Today, we continue to honor the traditions of Mediterranean cuisine while innovating with seasonal, locally-sourced ingredients.
        </p>
        <p className="text-greek-white/80">
          Every dish tells a story of our journey, and we invite you to be part of this continuing odyssey of flavors, community, and celebration.
        </p>
      </div>
    </div>
  );
}