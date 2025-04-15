//collections/Reservations.ts
import { CollectionConfig } from 'payload'

export const Reservations: CollectionConfig = {
    slug: 'reservations',
    admin: {
        useAsTitle: 'customerName',
        defaultColumns:  ['customerName', 'date', 'status', 'createdAt'],
    },
    access: {
        create: () => true, //Anyone can create a reservation
        read: ({ req: { user } }) => {
            //Only admin/editor can read reservations
            return Boolean(user?.role === 'admin' || user?.role === 'editor')
        },
        update: ({ req: { user } }) => {
            return Boolean(user?.role === 'admin' || user?.role === 'editor')
        },
        delete: ({ req: { user } }) => {
            return Boolean(user?.role === 'admin' || user?.role == 'editor')
        },
    },
    fields: [
        {
            name: 'customerName',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'text',
            required: true,
        },
        {
            name: 'phone',
            type: 'text',
            required: true,
        },
        {
            name: 'date',
            type: 'date',
            required: true,
        },
        {
            name: 'time',
            type: 'text',
            required: true,
        },
        {
            name: 'partySize',
            type: 'number',
            required: true,
            min: 1,
            max: 20,
        },
        {
            name: 'specialRequests',
            type: 'textarea',
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'pending',
            options: [
                {
                    label: 'Pending',
                    value: 'pending',
                },
                {
                    label: 'Confirmed',
                    value: 'confirmed',
                },
                {
                    label: 'Cancelled',
                    value: 'cancelled',
                },
                {
                    label: 'Completed',
                    value: 'completed',
                },
            ],
        },
    ],
    hooks: {
        afterChange: [
            async ({ doc, operation }) => {
                if (operation === 'create') {
                    // Send email notification to admin
                    // Send confirmation email to customer
                    console.log('New reservation:', doc);
                }
            },
        ],
    },
}