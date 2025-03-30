// app/(main)/contact/page.tsx
import { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import HoursInfo from '@/components/contact/HoursInfo';
import SocialLinks from '@/components/contact/SocialLinks';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Contact - Odyssey By Sely',
  description: 'Get in touch with us for reservations, inquiries, or feedback.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions or feedback."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <Card>
          <h2 className="text-2xl font-serif font-bold text-greek-white">Send Us a Message</h2>
          <ContactForm />
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <h2 className="text-2xl font-serif font-bold text-greek-white">Contact Information</h2>
            <ContactInfo />
          </Card>

          <Card>
            <h2 className="text-2xl font-serif font-bold text-greek-white">Hours</h2>
            <HoursInfo />
          </Card>

          <Card>
            <h2 className="text-2xl font-serif font-bold text-greek-white">Follow Us</h2>
            <SocialLinks />
          </Card>
        </div>
      </div>
    </div>
  );
}