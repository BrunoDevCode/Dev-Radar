import {Router, Request, Response} from 'express';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    console.log("> Homepage");
})

export default routes;