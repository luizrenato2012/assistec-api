import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import UsuariosController from '../controllers/UsuariosController';

const usuariosRoutes = Router();
const usuariosController = new UsuariosController();

usuariosRoutes.get('/', usuariosController.index);
usuariosRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usuariosController.create,
);

export default usuariosRoutes;
