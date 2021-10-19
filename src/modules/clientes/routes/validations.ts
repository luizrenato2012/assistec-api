import { celebrate, Segments } from 'celebrate';
import Joi from 'joi';

const validaBody = () => {
  return celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required().min(3).max(50),
      telefone: Joi.string().required().min(10).max(15),
      endereco: Joi.string(),
      cidade: Joi.string(),
      estado: Joi.string(),
    },
  });
}

export default validaBody;
