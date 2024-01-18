import { Router } from 'express';
import {
  atualizarEmail,
  buscarEmailDeUmCliente,
  criarEmail,
  exluirEmail,
  listarEmails,
} from '../controllers/EmailController';
import { EmailMiddleware } from '../middlewares/EmailMiddleware';

const router = Router();

router.get('/buscaremail/:id', buscarEmailDeUmCliente);
router.get('/:id', listarEmails);
router.post('/', EmailMiddleware, criarEmail);
router.put('/:id', EmailMiddleware, atualizarEmail);
router.delete('/:id', exluirEmail);

export { router };
