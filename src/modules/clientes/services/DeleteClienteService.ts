import AppErrors from '@shared/http/AppErrors';
import { getCustomRepository } from 'typeorm';
import ClientesRepository from '../typeorm/repositories/ClientesRepository';

interface DeleteClienteRequest {
  id: number;
}

export default class DeleteClienteService {
  public async execute({ id }: DeleteClienteRequest): Promise<void> {
    const clienteRepository = getCustomRepository(ClientesRepository);

    const cliente = await clienteRepository.findOne(id);

    if (!cliente) {
      throw new AppErrors('Cliente não encontrado');
    }

    await clienteRepository.remove(cliente);
  }
}
