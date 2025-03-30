// components/reservations/PolicyInfo.tsx
export default function PolicyInfo() {
    return (
      <div className="text-greek-white/70 text-sm space-y-3">
        <h3 className="text-greek-white text-lg font-serif font-medium mb-2">Reservation Policies</h3>
        
        <p>
          <strong className="text-greek-white">Confirmation:</strong> Your reservation will be confirmed via email or phone within 24 hours.
        </p>
        
        <p>
          <strong className="text-greek-white">Cancellation:</strong> We kindly request 24 hours notice for cancellations. For parties of 6 or more, 48 hours notice is required.
        </p>
        
        <p>
          <strong className="text-greek-white">Late Arrivals:</strong> We hold reservations for 15 minutes past the reserved time. Please call if you're running late.
        </p>
        
        <p>
          <strong className="text-greek-white">Large Parties:</strong> For groups of 9 or more, please contact us directly at (415) 555-1234 or email reservations@odysseybysely.com.
        </p>
      </div>
    );
  }