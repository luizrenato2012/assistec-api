import AppErrors from '@shared/http/AppErrors';
import { getCustomRepository } from 'typeorm';
import { Cliente } from '../typeorm/entities/Clientes';
import ClienteRepository from '../typeorm/repositories/ClientesRepository';

interface ShowClienteRequest {
  id: number;
}

export default class ShowClienteService {
  public async execute({ id }: ShowClienteRequest): Promise<Cliente> {
    const clienteRepository = getCustomRepository(ClienteRepository);

    const cliente = await clienteRepository.findOne({
      where: {
        id,
      },
    });

    if (!cliente) {
      throw new AppErrors('Cliente não encontrado');
    }
    return cliente;
  }
}
