import { EntityRepository, Repository } from 'typeorm';
import { Cliente } from '../entities/Clientes';

@EntityRepository(Cliente)
export default class ClienteRepository extends Repository<Cliente> {
  public async findByNome(nome: string): Promise<Cliente | undefined> {
    return this.findOne({
      where: {
        nome,
      },
    });
  }
}
