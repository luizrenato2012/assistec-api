import { getCustomRepository } from 'typeorm';
import { Cliente } from '../typeorm/entities/Clientes';
import ClienteRepository from '../typeorm/repositories/ClientesRepository';

export class ListClienteService {
  public async execute(): Promise<Cliente[]> {
    const clienteRepository = getCustomRepository(ClienteRepository);
    return await clienteRepository.find();
  }
}
