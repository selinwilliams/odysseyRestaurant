// components/ui/PageHeader.tsx
interface PageHeaderProps {
    title: string;
    subtitle?: string;
  }
  
  export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
      <div className="text-center">
        <h1 className="mb-8 flex flex-col items-center justify-center">
          <span className="font-serif text-6xl font-bold tracking-wide text-greek-white drop-shadow-sm md:text-7xl">
            {title}
          </span>
          <div className="mt-6 h-0.5 w-32 bg-greek-gold/50"></div>
        </h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-lg font-sans text-greek-white/80">
            {subtitle}
          </p>
        )}
      </div>
    );
  }