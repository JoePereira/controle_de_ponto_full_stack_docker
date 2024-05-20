import {
  ICadEntryTimeDTO,
  ICadExitTimeDTO,
  IFindAllEntryTimesByIdDTO,
  IFindAllExitsTimesByIdDTO,
  IPagination,
} from "../entities/ITimesDTO";
import ITimesRepository from "./ITimesRepository";
import prismaClient from "../../../../shared/infra/prisma/prismaClient";

class TimesRepository implements ITimesRepository {
  async createEntryTime({
    usuarioId,
    horarioEntrada,
  }: ICadEntryTimeDTO): Promise<void> {
    await prismaClient.horarios.create({
      data: {
        usuarioId,
        horarioEntrada,
      },
    });
  }

  async createExitTime({
    usuarioId,
    horarioSaida,
  }: ICadExitTimeDTO): Promise<void> {
    await prismaClient.horarios.create({
      data: {
        usuarioId,
        horarioSaida,
      },
    });
  }

  async findAllEntryTimesById(
    usuarioId: string,
    { skip, take }: IPagination
  ): Promise<IFindAllEntryTimesByIdDTO[]> {
    return await prismaClient.horarios.findMany({
      where: {
        usuarioId,
      },
      select: {
        id: true,
        usuarioId: true,
        horarioEntrada: true,
      },
      take,
      skip: skip * take,
    });
  }

  async findAllExitTimesById(
    usuarioId: string,
    { skip, take }: IPagination
  ): Promise<IFindAllExitsTimesByIdDTO[]> {
    return await prismaClient.horarios.findMany({
      where: {
        usuarioId,
      },
      select: {
        id: true,
        usuarioId: true,
        horarioSaida: true,
      },
      take,
      skip: skip * take,
    });
  }
}

export default TimesRepository;
