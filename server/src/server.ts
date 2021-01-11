import express from 'express';
import morgan from 'morgan';
import { connect } from 'mongoose';
import { resolve } from 'path';
import cors from 'cors';
import { PORT, MONGO_URI } from './config/env';
import routes from './routes';

const app = express();

connect(MONGO_URI, { useNewUrlParser: true });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files', express.static(resolve(__dirname, '..', 'tmp', 'uploads')));

app.use(routes);

app.listen(PORT, () => {
  console.log(`> Server Running at ${PORT}`);
});
