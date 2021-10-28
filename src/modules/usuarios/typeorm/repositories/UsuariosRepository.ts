import { EntityRepository, Repository } from 'typeorm';
import { Usuario } from '../entities/Usuarios';

@EntityRepository(Usuario)
export default class UsuariosRepository extends Repository<Usuario> {
  public async findByNome(nome: string): Promise<Usuario | undefined> {
    const usuario = await this.findOne({
      where: {
        nome,
      },
    });
    return usuario;
  }

  public async findByEmail(email: string): Promise<Usuario | undefined> {
    const usuario = await this.findOne({
      where: {
        email,
      },
    });
    return usuario;
  }

  public async findById(id: number): Promise<Usuario | undefined> {
    const usuario = await this.findOne({
      where: {
        id,
      },
    });
    return usuario;
  }
}
