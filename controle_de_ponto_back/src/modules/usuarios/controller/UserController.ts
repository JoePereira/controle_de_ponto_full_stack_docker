import { Request, Response } from "express";
import { container } from "tsyringe";
import CadUserUseCase from "../useCases/cadUser/CadUserUseCase";
import FindUserByIdUserCase from "../useCases/findUser/FindUserByIdUseCase";
import FindUserByCodigoUsuarioUserCase from "../useCases/findUser/FindUserByCodigoUsuarioUseCase";

class UserController {
  async createUser(req: Request, res: Response): Promise<Response> {
    const { nome } = req.body;

    const cadUser = container.resolve(CadUserUseCase);

    try {
      const user = await cadUser.execute({ nome });
      return res.status(201).json({
        message: `Usuario cadastrado com sucesso, seu codigo de acesso é: ${user.codigoUsuario}`,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async getUserById(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;

    const findUser = container.resolve(FindUserByIdUserCase);

    try {
      const user = await findUser.execute(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async getUserByCodigoUsuario(req: Request, res: Response): Promise<Response> {
    const codigoUsuario = req.params.codigoUsuario;

    const findUser = container.resolve(FindUserByCodigoUsuarioUserCase);

    try {
      const user = await findUser.execute(codigoUsuario);
      if (!user) {
        return res.status(404).json({
          message:
            "Usuario nao cadastrado no sistema, favor cadastre-se primeiro",
        });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default UserController;
