import { Router } from 'express';
import { Login } from '../controllers/LoginController';
import { LoginMiddleware } from '../middlewares/LoginMiddleware';

const router = Router();

router.post('/', LoginMiddleware, Login);

export { router };
