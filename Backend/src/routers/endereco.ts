import { Router } from 'express';
import {
  atualizarEndereco,
  criarEndereco,
  exluirEndereco,
  listarEnderecoById,
  listarEnderecos,
} from '../controllers/EnderecoController';
import { EnderecoMiddleware } from '../middlewares/EnderecoMiddleware';

const router = Router();

router.get('/buscarendereco/:id', listarEnderecoById);
router.get('/:id', listarEnderecos);
router.post('/', EnderecoMiddleware, criarEndereco);
router.put('/:id', EnderecoMiddleware, atualizarEndereco);
router.delete('/:id', exluirEndereco);

export { router };
