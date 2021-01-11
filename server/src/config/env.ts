import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: '../../.env' });

export const {
  PORT, MONGO_URI, BUCKET_NAME, APP_URL, STORAGE_TYPE,
}: any = process.env;
