import { Router } from 'express';
import {
  atualizarTelefone,
  buscarUmTelefone,
  criarTelefone,
  exluirTelefone,
  listarTelefones,
} from '../controllers/TelefoneController';
import { TelefoneMiddleware } from '../middlewares/TelefoneMiddleware';

const router = Router();

router.get('/:id', listarTelefones);
router.get('/buscartelefone/:id', buscarUmTelefone);
router.post('/', TelefoneMiddleware, criarTelefone);
router.put('/:id', TelefoneMiddleware, atualizarTelefone);
router.delete('/:id', exluirTelefone);

export { router };
