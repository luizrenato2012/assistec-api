import AppErrors from '@shared/http/AppErrors';
import { getCustomRepository } from 'typeorm';
import { Cliente } from '../typeorm/entities/Clientes';
import ClienteRepository from '../typeorm/repositories/ClientesRepository';

interface UpdateClienteRequest {
  id: number;

  nome: string;

  endereco: string;

  cidade: string;

  estado: string;

  telefone: string;
}

export default class UpdateClienteService {
  public async execute({
    id,
    nome,
    endereco,
    cidade,
    estado,
    telefone,
  }: UpdateClienteRequest): Promise<Cliente> {
    const clienteRepository = getCustomRepository(ClienteRepository);
    const existsCliente = clienteRepository.findByNome(nome);
    if (!existsCliente) {
      throw new AppErrors('Cliente nao encontrado!');
    }

    const cliente = await clienteRepository.findOne(id);
    if (!cliente) {
      throw new AppErrors('Cliente nao encontrado!');
    }

    cliente.nome = nome;
    cliente.endereco = endereco;
    cliente.cidade = cidade;
    cliente.estado = estado;
    cliente.telefone = telefone;

    return await clienteRepository.save(cliente);
  }
}
