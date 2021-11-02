import { Router } from 'express';
import clientesRouter from '@modules/clientes/routes/clientes.route';
import usuariosRouter from '@modules/usuarios/routes/usuarios.routes';
import sessionsRouter from '@modules/usuarios/routes/session.routes';

const routes = Router();

routes.use('/clientes', clientesRouter);
routes.use('/usuarios', usuariosRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
