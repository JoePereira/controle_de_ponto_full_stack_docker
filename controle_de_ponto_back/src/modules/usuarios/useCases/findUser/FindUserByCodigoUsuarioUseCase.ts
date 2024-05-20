import { inject, injectable } from "tsyringe";
import IUserRepository from "../../infra/repositories/IUserRepository";
import { IFindUserByCodigoUsuarioDTO } from "../../infra/entities/IUserDTO";

@injectable()
class FindUserByCodigoUsuarioUserCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(
    codigoUsuario: string
  ): Promise<IFindUserByCodigoUsuarioDTO | null> {
    return await this.userRepository.findUserByCodigoUsuario(codigoUsuario);
  }
}

export default FindUserByCodigoUsuarioUserCase;
