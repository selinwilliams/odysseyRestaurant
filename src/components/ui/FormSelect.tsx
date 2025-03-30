// components/ui/FormSelect.tsx
import { SelectHTMLAttributes } from 'react';

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: { value: string; label: string }[];
}

export default function FormSelect({ label, id, options, ...props }: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-greek-white">
        {label}
      </label>
      <select
        id={id}
        className="select-greek mt-1 block w-full"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}