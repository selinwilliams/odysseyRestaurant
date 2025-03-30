// payload.config.ts
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { MenuItems } from './collections/MenuItems'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Reservations } from './collections/Reservations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Admin Panel',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },
  collections: [Users, Media, Categories, MenuItems, ContactSubmissions, Reservations],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URL || '',
  }),
  sharp,
  upload: {
    limits: {
      fileSize: 10000000, // 10MB
    },
    // Use local filesystem for development
    staticDir: path.resolve(dirname, '../media'),
    staticURL: '/media',
  },
  plugins: [payloadCloudPlugin()],
  
  // Add CORS configuration
  cors:['http://localhost:3000'],

  // Keep the onInit for debugging but remove endpoints
  onInit: async (payload) => {
    console.log('Payload initialized');
    
    try {
      const users = await payload.find({
        collection: 'users',
        limit: 10,
      });
      
      console.log(`Found ${users.totalDocs} users in the database`);
      if (users.totalDocs === 0) {
        console.log('⚠️ No users found. You may need to create an admin user.');
      }
    } catch (error) {
      console.error('Error checking users:', error.message);
    }
  },
})