import AppErrors from '@shared/http/AppErrors';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import Usuario from '../typeorm/entities/Usuarios';
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
    const passwordHashed = await hash(password, 8);

    const usuario = usuarioRepository.create({
      nome,
      email,
      password: passwordHashed,
    });
    await usuarioRepository.save(usuario);
    return usuario;
  }
}
