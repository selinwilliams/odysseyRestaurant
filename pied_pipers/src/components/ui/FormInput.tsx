// components/ui/FormInput.tsx
import { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  id: string;
  isTextarea?: boolean;
  rows?: number;
}

export default function FormInput({ 
  label, 
  id, 
  isTextarea = false, 
  rows = 6, 
  ...props 
}: FormInputProps) {
  // Base class for all inputs
  const baseClassName = "mt-1 block w-full rounded-md border-greek-white/20 bg-black/30 text-greek-white focus:border-greek-gold focus:ring-greek-gold focus:ring-opacity-50";
  
  // Additional class for date inputs
  const className = props.type === 'date' 
    ? `${baseClassName} date-input-greek` 
    : baseClassName;
  
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-greek-white">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          rows={rows}
          className={baseClassName}
          {...props as InputHTMLAttributes<HTMLTextAreaElement>}
        />
      ) : (
        <input
          id={id}
          className={className}
          {...props as InputHTMLAttributes<HTMLInputElement>}
        />
      )}
    </div>
  );
}