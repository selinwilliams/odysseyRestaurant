// components/about/MeetTheChef.tsx
import Image from 'next/image';

export default function MeetTheChef() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="order-2 md:order-1 flex flex-col justify-center">
        <h3 className="text-2xl font-serif font-bold text-greek-white mb-4">Chef Sely Antoniadis</h3>
        <p className="text-greek-white/80 mb-4">
          Chef Sely's culinary journey began in her grandmother's kitchen in Thessaloniki, Greece, where she learned the importance of fresh ingredients and traditional techniques. After formal training at Le Cordon Bleu in Paris, she worked in Michelin-starred restaurants across Europe before bringing her unique vision to San Francisco.
        </p>
        <p className="text-greek-white/80 mb-4">
          "My cooking philosophy is simple: respect the ingredients, honor tradition, but don't be afraid to innovate. Every dish should tell a story and create a memory."
        </p>
        <p className="text-greek-white/80">
          When not in the kitchen, Chef Sely can be found at local farmers' markets searching for seasonal inspiration or teaching cooking classes to share her passion for Mediterranean cuisine.
        </p>
      </div>
      <div className="order-1 md:order-2 relative h-full min-h-[300px]">
        <Image
          src="/images/chef-portrait.jpg"
          alt="Chef Sely Antoniadis"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}