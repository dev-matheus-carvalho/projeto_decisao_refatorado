import { Router } from 'express';
import {
  atualizarEmail,
  criarEmail,
  exluirEmail,
  listarEmails,
} from '../controllers/EmailController';
import { EmailMiddleware } from '../middlewares/EmailMiddleware';

const router = Router();

router.get('/:id', listarEmails);
router.post('/', EmailMiddleware, criarEmail);
router.put('/:id', EmailMiddleware, atualizarEmail);
router.delete('/:id', exluirEmail);

export { router };
