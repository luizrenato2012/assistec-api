import { Request, Response } from 'express';
import CreateClienteService from '../services/CreateClienteService';
import DeleteClienteService from '../services/DeleteClienteService';
import { ListClienteService } from '../services/ListClienteService';
import ShowClienteService from '../services/ShowClienteService';
import UpdateClienteService from '../services/UpdateClienteService';

export default class ClientesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCliente = new ListClienteService();

    const clientes = await listCliente.execute();
    return response.json(clientes);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, endereco, cidade, estado, telefone } = request.body;
    const createCliente = new CreateClienteService();

    const cliente = await createCliente.execute({
      nome,
      endereco,
      cidade,
      estado,
      telefone,
    });

    return response.json(cliente);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const id = parseInt(request.params.id);

    const showCliente = new ShowClienteService();
    const cliente = await showCliente.execute({ id });

    return response.json(cliente);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const id = parseInt(request.params.id);
    await new DeleteClienteService().execute({ id });
    return response.json({});
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, endereco, cidade, estado, telefone } = request.body;
    const id = parseInt(request.params.id);
    const cliente = await new UpdateClienteService().execute({
      id,
      nome,
      endereco,
      cidade,
      estado,
      telefone,
    });
    return response.json(cliente);
  }
}
