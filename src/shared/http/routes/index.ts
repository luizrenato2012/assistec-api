import { Router } from 'express';
import clientesRouter from '@modules/clientes/routes/clientes.route';

const routes = Router();

routes.use('/clientes', clientesRouter);

export default routes;
