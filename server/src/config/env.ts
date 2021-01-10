import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: '../../.env' });

export const {
  PORT
}: any = process.env;