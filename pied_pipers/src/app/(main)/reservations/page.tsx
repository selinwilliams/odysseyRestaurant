// app/(main)/reservations/page.tsx
import { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';
import ReservationForm from '@/components/reservations/ReservationForm';
import PolicyInfo from '@/components/reservations/PolicyInfo';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Reservations - Odyssey By Sely',
  description: 'Book a table at Odyssey By Sely for an unforgettable dining experience.',
};

export default function ReservationsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Make a Reservation"
        subtitle="Reserve your table for an unforgettable Mediterranean dining experience"
      />

      <div className="mt-16 max-w-3xl mx-auto">
        <Card className="p-8 md:p-12">
          <p className="text-center mb-8 font-serif text-xl text-greek-white/90 leading-relaxed">
            Please fill out the form below to make a reservation.<br />
            We will contact you shortly to confirm your booking.
          </p>
          
          <ReservationForm />
          
          <div className="mt-8 pt-8 border-t border-greek-white/10">
            <PolicyInfo />
          </div>
        </Card>
      </div>
    </div>
  );
}