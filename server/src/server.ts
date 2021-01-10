import express from 'express';
import { PORT } from './config/env';

const app = express();

app.listen(PORT, () => {
  console.log(`> Server Running at ${PORT}`);
});