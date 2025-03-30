import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="font-accent text-3xl italic text-greek-white">
          Odyssey
          <span className="font-serif text-xl not-italic font-normal text-greek-gold/60 ml-1">
            by Sely
          </span>
        </Link>

        {/* Navigation Menu */}
        <nav className="flex space-x-6">
          <Link
            href="/"
            className="font-serif text-sm tracking-widest text-[#e8e4dc]/80 hover:text-[#e8e4dc] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="font-serif text-sm tracking-widest text-[#e8e4dc]/80 hover:text-[#e8e4dc] transition-colors"
          >
            Menu
          </Link>
          <Link
            href="/reservations"
            className="font-serif text-sm tracking-widest text-[#e8e4dc]/80 hover:text-[#e8e4dc] transition-colors"
          >
            Reservations
          </Link>
          <Link
            href="/about"
            className="font-serif text-sm tracking-widest text-[#e8e4dc]/80 hover:text-[#e8e4dc] transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-serif text-sm tracking-widest text-[#e8e4dc]/80 hover:text-[#e8e4dc] transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
