import AppErrors from '@shared/http/AppErrors';
import { getCustomRepository } from 'typeorm';
import { Cliente } from '../typeorm/entities/Clientes';
import ClientesRepository from '../typeorm/repositories/ClientesRepository';

interface CreateClienteRequest {
  nome: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefone: string;
}

export default class CreateClienteService {
  public async execute({
    nome,
    endereco,
    cidade,
    estado,
    telefone,
  }: CreateClienteRequest): Promise<Cliente> {
    const clienteRepository = getCustomRepository(ClientesRepository);

    const clienteExists = await clienteRepository.findByNome(nome);
    if (clienteExists) {
      throw new AppErrors('Cliente ja cadastrado');
    }
    const cliente = clienteRepository.create({
      nome,
      endereco,
      cidade,
      estado,
      telefone,
    });
    await clienteRepository.save(cliente);
    return cliente;
  }
}
