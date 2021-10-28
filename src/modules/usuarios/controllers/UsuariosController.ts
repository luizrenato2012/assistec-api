import { Request, Response } from 'express';
import CreateUsuarioService from '../services/CreateUsuarioService';
import ListUsuarioService from '../services/ListUsuarioService';

export default class UsuariosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listaUsuario = new ListUsuarioService();
    const lista = await listaUsuario.execute();
    return response.json(lista);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const criaUsuario = new CreateUsuarioService();
    const { nome, email, password } = request.body;
    const usuario = await criaUsuario.execute({ nome, email, password });
    return response.json(usuario);
  }
}
