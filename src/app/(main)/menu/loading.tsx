// app/(main)/menu/loading.tsx
export default function Loading() {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center">
          <div className="h-12 w-48 bg-greek-white/10 animate-pulse rounded-md mb-4"></div>
          <div className="h-4 w-96 bg-greek-white/10 animate-pulse rounded-md mb-16"></div>
          
          <div className="flex justify-center gap-4 mb-12 w-full">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 w-24 bg-greek-white/10 animate-pulse rounded-md"></div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-black/30 rounded-lg overflow-hidden h-96 animate-pulse">
                <div className="h-56 bg-greek-white/10"></div>
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <div className="h-6 w-32 bg-greek-white/10 rounded-md"></div>
                    <div className="h-6 w-16 bg-greek-white/10 rounded-md"></div>
                  </div>
                  <div className="h-20 bg-greek-white/10 rounded-md mb-4"></div>
                  <div className="h-4 bg-greek-white/10 rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }