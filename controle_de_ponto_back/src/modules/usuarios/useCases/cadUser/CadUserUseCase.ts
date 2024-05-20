import { inject, injectable } from "tsyringe";
import { ICadUserDTO, ICodigoUsuarioDTO } from "../../infra/entities/IUserDTO";
import IUserRepository from "../../infra/repositories/IUserRepository";

@injectable()
class CadUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}
  async execute({ nome }: ICadUserDTO): Promise<ICodigoUsuarioDTO> {
    const generateId = (length: number = 7): string => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    };
    const codigoUsuario = generateId();
    return await this.userRepository.createUser({ nome, codigoUsuario });
  }
}

export default CadUserUseCase;
