// collections/Media.ts
import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: ({ req: { user } }) => {
      return Boolean(user?.role === 'admin' || user?.role === 'editor');
    },
    update: ({ req: { user } }) => {
      return Boolean(user?.role === 'admin' || user?.role === 'editor');
    },
    delete: ({ req: { user } }) => {
      return Boolean(user?.role === 'admin' || user?.role === 'editor');
    },
  },
  upload: {
    // You can keep just the essential settings
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'center',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'center',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}