// app/(main)/about/page.tsx
import { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';
import OurStory from '@/components/about/OurStory';
import MeetTheChef from '@/components/about/MeetTheChef';
import OurValues from '@/components/about/OurValues';
import Gallery from '@/components/about/Gallery';
import Testimonials from '@/components/about/Testimonials';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'About Us - Odyssey By Sely',
  description: 'Learn about our culinary journey, philosophy, and the team behind Odyssey By Sely.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Our Story"
        subtitle="Discover the passion and philosophy behind Odyssey By Sely"
      />

      <div className="mt-16 space-y-16">
        {/* Our Story Section */}
        <section>
          <Card className="overflow-hidden">
            <OurStory />
          </Card>
        </section>

        {/* Meet the Chef Section */}
        <section>
          <SectionHeading>Meet the Chef</SectionHeading>
          <Card className="mt-8">
            <MeetTheChef />
          </Card>
        </section>

        {/* Our Values Section */}
        <section>
          <SectionHeading>Our Philosophy</SectionHeading>
          <div className="mt-8">
            <OurValues />
          </div>
        </section>

        {/* Gallery Section */}
        {/* <section>
          <SectionHeading>Gallery</SectionHeading>
          <div className="mt-8">
            <Gallery />
          </div>
        </section> */} {/* Commented out for now */}

        {/* Testimonials Section */}
        <section>
          <SectionHeading>What Our Guests Say</SectionHeading>
          <div className="mt-8">
            <Testimonials />
          </div>
        </section>
      </div>
    </div>
  );
}