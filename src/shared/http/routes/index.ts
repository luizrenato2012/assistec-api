import { Router } from 'express';
import clientesRouter from '@modules/clientes/routes/clientes.route';
import usuariosRoutes from '@modules/usuarios/routes/usuarios.routes';

const routes = Router();

routes.use('/clientes', clientesRouter);
routes.use('/usuarios', usuariosRoutes);

export default routes;
