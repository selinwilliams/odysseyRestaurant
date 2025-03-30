import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center text-greek-white bg-transparent">
      {/* Welcome Message */}
      <div className="text-center z-30">
      <h1 className="mb-16 flex flex-col items-center">
            <span className="font-sans text-6xl font-light tracking-wide text-greek-gray md:text-7xl">
              Odyssey
            </span>
            <span className="font-serif mt-3 text-xl tracking-[0.2em] text-greek-gray">
              by Sely
            </span>
          </h1>
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-2xl text-greek-white/80 mb-8 leading-relaxed tracking-wide font-light">
            A refined sanctuary of gastronomy where contemporary French cuisine meets artistic innovation
          </p>
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-[1px] bg-greek-gold/30"></div>
            <div className="mx-4 text-greek-gold/70 font-serif italic text-sm tracking-widest">★</div>
            <div className="w-16 h-[1px] bg-greek-gold/30"></div>
          </div>
          <p className="font-serif text-xl text-greek-white/80 leading-relaxed tracking-wider font-light">
            Experience the epitome of fine dining in an atmosphere of understated elegance
          </p>
        
          <div className="mt-16 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12 justify-center">
            <Link
              href="/reservations"
              className="group relative px-10 py-4 overflow-hidden"
            >
              <div className="absolute inset-0 bg-greek-white opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 font-serif text-greek-gray text-sm tracking-[0.3em] uppercase">
                Reserve Your Table
              </span>
            </Link>
            <Link
              href="/menu"
              className="group relative px-10 py-4 overflow-hidden"
            >
              <div className="absolute inset-0 border border-greek-white/80 group-hover:border-greek-white transition-colors duration-300"></div>
              <span className="relative z-10 font-serif text-greek-white text-sm tracking-[0.3em] uppercase">
                Discover Our Menu
              </span>
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="font-serif text-greek-white">
            <p className="text-sm tracking-[0.2em] mb-2">OPENING HOURS</p>
            <p className="text-sm">Tuesday - Sunday | 6:00 PM - 11:00 PM</p>
            <p className="text-sm italic text-greek-white">Closed Mondays</p>
          </div>
        </div>
      </div>
    </div>
  );
}