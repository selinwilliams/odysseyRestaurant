import { CollectionConfig } from 'payload/types'

export const MenuItems: CollectionConfig = {
  slug: 'menu-items',
  admin: {
    useAsTitle: 'name',
  },

  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user?.id),
    update: ({ req: { user } }) => Boolean(user?.id),
    delete: ({ req: { user } }) => Boolean(user?.id),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'isVegetarian',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'isSpicy',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'isAvailable',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'ingredients',
      type: 'array',
      fields: [
        {
          name: 'ingredient',
          type: 'text',
        },
      ],
    },
  ],
}