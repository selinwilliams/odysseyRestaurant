import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { MenuItems } from './collections/MenuItems'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Reservations } from './collections/Reservations'

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Odyssey Admin',
    },
  },
  collections: [Users, Media, Categories, MenuItems, ContactSubmissions, Reservations],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URL || '',
    connectOptions: {
      retryWrites: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    },
  }),
  sharp,
  
  // Updated upload configuration for v3
  upload: {
    limits: {
      fileSize: 10000000, // 10MB
    },
  },
  
  // New storage configuration for v3
  storage: {
    filesystem: {
      directory: path.resolve(__dirname, '../media'),
      staticURL: '/media',
    },
  },
  
  // Set the server URL from environment variable
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'https://odyssey.mareon.dev',
  
  // Configure CORS to allow requests from your domain
  cors: [
    'https://odyssey.mareon.dev',
    'http://localhost:3000',
    'http://localhost:3001',
  ],

  // Add debug logging
  debug: process.env.NODE_ENV !== 'production',
  
  // Add initialization logging
  onInit: async (payload) => {
    console.log('Payload initialized with:');
    console.log('- serverURL:', process.env.PAYLOAD_PUBLIC_SERVER_URL || 'https://odyssey.mareon.dev');
    console.log('- NODE_ENV:', process.env.NODE_ENV);
    console.log('- MONGODB_URL:', process.env.MONGODB_URL ? '[SET]' : '[NOT SET]');
    console.log('- PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? '[SET]' : '[NOT SET]');
    
    try {
      const users = await payload.find({
        collection: 'users',
        limit: 10,
      });
      
      console.log(`Found ${users.totalDocs} users in the database`);
    } catch (error) {
      console.error('Error checking users:', error);
    }
  },
})