import { CollectionConfig } from 'payload/types';
import { sendContactNotification } from '../utilities/mailer';

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'subject', 'createdAt', 'status'],
  },
  access: {
    create: () => true, // Anyone can submit the form
    read: ({ req: { user } }) => Boolean(user), // Only admin can read submissions
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Handled', value: 'handled' },
        { label: 'Important', value: 'important' },
        { label: 'Spam', value: 'spam' },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          try {
            await sendContactNotification(doc);
          } catch (error) {
            console.error('Failed to send email notification:', error);
          }
        }
      },
    ],
  },
};