import { Router, Request, Response } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import RequestFile from './@types/requestFile.d.ts';

import Post from './models/Post';

const routes = Router();

routes.get('/posts', async (req: Request, res: Response) => {
  const posts = await Post.find();

  return res.json(posts);
});

routes.post('/posts', multer(multerConfig).single('file'), async (req: RequestFile, res: Response) => {
  const {
    originalname: name, size, key, location: url = '',
  } = req.file;

  const post = await Post.create({
    name,
    size,
    key,
    url,
  });

  return res.json(post);
});

routes.delete('/posts/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const post = await Post.findById(id);

  await post!.remove();

  return res.send();
});

export default routes;
