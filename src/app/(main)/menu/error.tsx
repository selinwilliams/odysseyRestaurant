// app/(main)/menu/error.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-serif font-bold text-greek-white mb-4">
          Something went wrong
        </h2>
        <p className="text-greek-white/80 mb-8">
          We couldn't load the menu items. Please try again or contact us if the problem persists.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 bg-greek-blue text-greek-white rounded-md hover:bg-greek-gold transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-greek-white/30 text-greek-white rounded-md hover:bg-black/30 transition-colors"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}