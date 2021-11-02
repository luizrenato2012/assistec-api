import Usuario from '@modules/usuarios/typeorm/entities/Usuarios';
import UsuariosRepository from '@modules/usuarios/typeorm/repositories/UsuariosRepository';
import AppErrors from '@shared/http/AppErrors';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';

interface CreateSessionResponse {
  usuario: Usuario;
  token: string;
}

interface CreateSessionRequest {
  email: string;
  password: string;
}

export class CreateSessionsService {
  public async execute({
    email,
    password,
  }: CreateSessionRequest): Promise<CreateSessionResponse> {
    const usuarioRepository = getCustomRepository(UsuariosRepository);
    const usuario = await usuarioRepository.findByEmail(email);
    if (!usuario) {
      throw new AppErrors('Combinação email/senha incorretos', 401);
    }

    const isMesma = await compare(password, usuario.password);
    if (!isMesma) {
      throw new AppErrors('Combinação email/senha incorretos!', 401);
    }
    const secret = '3d53cdcb764fffed00372eb7550c28b0';
    const token = sign({}, secret, {
      subject: usuario.id + '',
      expiresIn: '1d',
    });
    return { usuario, token };
  }
}
