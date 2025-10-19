import { Client, Account, Databases, Storage } from 'appwrite';

// Initialize Appwrite Client
const client = new Client();

// Configure Appwrite
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || '');

// Export services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export { client };

// Collection and bucket IDs (you'll need to create these in Appwrite console)
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID || '';
export const RECORDINGS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_RECORDINGS_COLLECTION_ID || '';
export const SONGS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_SONGS_COLLECTION_ID || '';
export const STORAGE_BUCKET_ID = import.meta.env.VITE_APPWRITE_STORAGE_BUCKET_ID || '';

