import prismaClient from "../../../../shared/infra/prisma/prismaClient";
// import { PrismaClient } from "@prisma/client";
import {
  ICadUserDTO,
  ICodigoUsuarioDTO,
  IFindUserByCodigoUsuarioDTO,
  IFindUserByIdDTO,
} from "../entities/IUserDTO";
import IUserRepository from "./IUserRepository";

class UserRepository implements IUserRepository {
  async createUser({
    nome,
    codigoUsuario,
  }: ICadUserDTO): Promise<ICodigoUsuarioDTO> {
    return await prismaClient.usuario.create({
      data: {
        nome,
        codigoUsuario,
      },
      select: {
        codigoUsuario: true,
      },
    });
  }

  async findUserById(id: string): Promise<IFindUserByIdDTO | null> {
    return await prismaClient.usuario.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        nome: true,
        horariosEntradaSaida: {
          select: {
            horarioEntrada: true,
            horarioSaida: true,
          },
        },
      },
    });
  }
  async findUserByCodigoUsuario(
    codigoUsuario: string
  ): Promise<IFindUserByCodigoUsuarioDTO | null> {
    return await prismaClient.usuario.findFirst({
      where: {
        codigoUsuario,
      },
      select: {
        id: true,
        nome: true,
        codigoUsuario: true,
        horariosEntradaSaida: {
          select: {
            horarioEntrada: true,
            horarioSaida: true,
          },
        },
      },
    });
  }
}

export default UserRepository;
