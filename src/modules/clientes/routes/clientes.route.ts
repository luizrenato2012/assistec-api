import { Router } from 'express';
import ClientesController from '../controllers/ClientesController';
import validaBody from './validations';

const clientesRouter = Router();
const clientesController = new ClientesController();

clientesRouter.get('/', clientesController.index);

clientesRouter.get('/:id', clientesController.show);

clientesRouter.post('/', validaBody(), clientesController.create);

clientesRouter.put('/:id', validaBody(), clientesController.update);

clientesRouter.delete('/:id', clientesController.delete);

export default clientesRouter;
