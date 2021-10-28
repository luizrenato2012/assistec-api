import { Router } from 'express';
import UsuariosController from '../controllers/UsuariosController';

const usuariosRoutes = Router();
const usuariosController = new UsuariosController();

usuariosRoutes.get('/', usuariosController.index);
usuariosRoutes.post('/', usuariosController.create);

export default usuariosRoutes;
