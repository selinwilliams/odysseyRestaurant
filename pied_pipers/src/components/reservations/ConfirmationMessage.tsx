// components/reservations/ConfirmationMessage.tsx
interface ConfirmationMessageProps {
    type: 'success' | 'error';
    message: string;
  }
  
  export default function ConfirmationMessage({ type, message }: ConfirmationMessageProps) {
    const bgColor = type === 'success' ? 'bg-green-900/20' : 'bg-red-900/20';
    const textColor = type === 'success' ? 'text-green-400' : 'text-red-400';
    const borderColor = type === 'success' ? 'border-green-700' : 'border-red-700';
    
    return (
      <div className={`p-4 rounded-md ${bgColor} ${textColor} border ${borderColor} text-center`}>
        {message}
      </div>
    );
  }