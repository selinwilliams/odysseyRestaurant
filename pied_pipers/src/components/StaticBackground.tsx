// components/StaticBackground.tsx
interface StaticBackgroundProps {
    imageUrl: string;
    blur?: boolean;
  }
  
  export default function StaticBackground({ imageUrl, blur = false }: StaticBackgroundProps) {
    return (
      <div className="fixed inset-0 w-full h-full -z-10">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: blur ? 'blur(4px)' : 'none',
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
    );
  }