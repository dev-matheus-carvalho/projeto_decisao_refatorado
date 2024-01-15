import { Router } from 'express';
import {
  atualizarRepresentante,
  buscarRepresentantePorID,
  criarRepresentante,
  deletarRepresentante,
  deletarRepresentanteDoCliente,
  listarRepresentantes,
} from '../controllers/RepresentanteController';
import {
  createRepresentanteMiddleware,
  updateRepresentanteMiddleware,
} from '../middlewares/RepresentanteMiddleware';

const router = Router();

router.get('/', listarRepresentantes);
router.get('/:id', buscarRepresentantePorID);
router.post('/', createRepresentanteMiddleware, criarRepresentante);
router.post('/:idRepresentante', deletarRepresentanteDoCliente);
router.put('/:id', updateRepresentanteMiddleware, atualizarRepresentante);
router.delete('/:idRepresentante', deletarRepresentante);

export { router };
