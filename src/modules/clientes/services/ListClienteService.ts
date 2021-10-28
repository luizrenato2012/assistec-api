import { getCustomRepository } from 'typeorm';
import { Cliente } from '../typeorm/entities/Clientes';
import ClientesRepository from '../typeorm/repositories/ClientesRepository';

export class ListClienteService {
  public async execute(): Promise<Cliente[]> {
    const clienteRepository = getCustomRepository(ClientesRepository);
    return await clienteRepository.find();
  }
}
