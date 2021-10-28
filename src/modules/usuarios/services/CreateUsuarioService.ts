import AppErrors from '@shared/http/AppErrors';
import { getCustomRepository } from 'typeorm';
import { Usuario } from '../typeorm/entities/Usuarios';
import UsuariosRepository from '../typeorm/repositories/UsuariosRepository';

interface UsuarioRequest {
  nome: string;
  email: string;
  password: string;
}
export default class CreateUsuarioService {
  public async execute({
    nome,
    email,
    password,
  }: UsuarioRequest): Promise<Usuario> {
    const usuarioRepository = getCustomRepository(UsuariosRepository);
    const atual = await usuarioRepository.findByNome(nome);
    if (atual) {
      throw new AppErrors('Usuario já cadastrado');
    }

    const usuario = await usuarioRepository.create({ nome, email, password });
    await usuarioRepository.save(usuario);
    return usuario;
  }
}
