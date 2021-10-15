import { Router } from 'express';
import ClientesController from '../controllers/ClientesController';

const clientesRouter = Router();
const clientesController = new ClientesController();

clientesRouter.get('/', clientesController.index);
clientesRouter.get('/:id', clientesController.show);
clientesRouter.post('/', clientesController.create);
clientesRouter.put('/:id', clientesController.update);
clientesRouter.delete('/:id', clientesController.delete);

export default clientesRouter;
