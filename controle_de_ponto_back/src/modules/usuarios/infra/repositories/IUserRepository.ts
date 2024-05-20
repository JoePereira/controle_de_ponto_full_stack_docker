import {
  ICadUserDTO,
  ICodigoUsuarioDTO,
  IFindUserByCodigoUsuarioDTO,
  IFindUserByIdDTO,
} from "../entities/IUserDTO";

interface IUserRepository {
  createUser({ nome, codigoUsuario }: ICadUserDTO): Promise<ICodigoUsuarioDTO>;
  findUserById(id: string): Promise<IFindUserByIdDTO | null>;
  findUserByCodigoUsuario(
    codigoUsuario: string
  ): Promise<IFindUserByCodigoUsuarioDTO | null>;
}

export default IUserRepository;
