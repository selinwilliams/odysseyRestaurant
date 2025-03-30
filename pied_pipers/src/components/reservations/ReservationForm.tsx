// components/reservations/ReservationForm.tsx
'use client';

import { useState } from 'react';
import FormInput from '@/components/ui/FormInput';
import FormSelect from '@/components/ui/FormSelect';
import ConfirmationMessage from './ConfirmationMessage';

// Mock function - replace with actual API call
const createReservation = async (data: any) => {
  const response = await fetch('http://localhost:3001/api/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    mode: 'cors',
    credentials: 'omit',
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create reservation')
  }
  return response.json();
};

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await createReservation({
        customerName: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        time: formData.get('time'),
        partySize: Number(formData.get('partySize')),
        specialRequests: formData.get('requests'),
        status: 'pending',
      });
      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message: 'Failed to create reservation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];

  // Generate time slots
  const timeSlots = [
    { value: '18:00', label: '6:00 PM' },
    { value: '18:30', label: '6:30 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '19:30', label: '7:30 PM' },
    { value: '20:00', label: '8:00 PM' },
    { value: '20:30', label: '8:30 PM' },
    { value: '21:00', label: '9:00 PM' },
    { value: '21:30', label: '9:30 PM' },
  ];

  // Generate party size options
  const partySizeOptions = [
    { value: '', label: 'Select party size' },
    ...Array.from({ length: 8 }, (_, i) => ({
      value: String(i + 1),
      label: `${i + 1} ${i === 0 ? 'person' : 'people'}`,
    })),
    { value: '9', label: '9+ people (please specify in special requests)' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        label="Full Name"
        id="name"
        name="name"
        type="text"
        placeholder="John Smith"
        required
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormInput
          label="Email Address"
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
        />

        <FormInput
          label="Phone Number"
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 555-5555"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormInput
          label="Date"
          id="date"
          name="date"
          type="date"
          min={today}
          required
        />

        <FormSelect
          label="Time"
          id="time"
          name="time"
          options={[
            { value: '', label: 'Select a time' },
            ...timeSlots,
          ]}
          required
        />
      </div>

      <FormSelect
        label="Party Size"
        id="partySize"
        name="partySize"
        options={partySizeOptions}
        required
      />

      <FormInput
        label="Special Requests"
        id="requests"
        name="requests"
        isTextarea
        rows={3}
        placeholder="Any dietary requirements or special occasions?"
      />

      {(error || success) && (
        <ConfirmationMessage 
          type={error ? 'error' : 'success'} 
          message={error || 'Reservation submitted successfully! We will contact you shortly to confirm your booking.'}
        />
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-greek-blue px-8 py-3 font-sans text-sm font-medium uppercase tracking-wider text-greek-white transition-colors hover:bg-greek-gold disabled:opacity-70"
      >
        {isSubmitting ? 'Submitting...' : 'Confirm Reservation'}
      </button>
    </form>
  );
}