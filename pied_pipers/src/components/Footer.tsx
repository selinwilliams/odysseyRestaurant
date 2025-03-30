import Link from 'next/link';


export default function Footer() {
    return (
      <footer className="bg-white bg-opacity-90 backdrop-blur-sm text-gray-700 py-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="/" className="hover:text-blue-800 transition-colors">
              Home
            </Link>
            <Link href="/menu" className="hover:text-blue-800 transition-colors">
              Menu
            </Link>
            <Link href="/about" className="hover:text-blue-800 transition-colors">
              About
            </Link>
            <Link href="/reservations" className="hover:text-blue-800 transition-colors">
              Reservations
            </Link>
          </div>
          <p className="text-sm">&copy; 2023 Pied Pipers. All rights reserved.</p>
        </div>
      </footer>
    );
  }