import { getCustomRepository } from 'typeorm';
import { Usuario } from '../typeorm/entities/Usuarios';
import UsuariosRepository from '../typeorm/repositories/UsuariosRepository';

export default class ListUsuarioService {
  public async execute(): Promise<Usuario[]> {
    const usuarioRepository = getCustomRepository(UsuariosRepository);
    return await usuarioRepository.find();
  }
}
