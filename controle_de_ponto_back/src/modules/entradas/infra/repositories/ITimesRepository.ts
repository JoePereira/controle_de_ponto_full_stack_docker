import {
  ICadEntryTimeDTO,
  ICadExitTimeDTO,
  IFindAllEntryTimesByIdDTO,
  IFindAllExitsTimesByIdDTO,
  IPagination,
} from "../entities/ITimesDTO";

interface ITimesRepository {
  createEntryTime({
    usuarioId,
    horarioEntrada,
  }: ICadEntryTimeDTO): Promise<void>;
  createExitTime({ usuarioId, horarioSaida }: ICadExitTimeDTO): Promise<void>;
  findAllEntryTimesById(
    usuarioId: string,
    { skip, take }: IPagination
  ): Promise<IFindAllEntryTimesByIdDTO[]>;
  findAllExitTimesById(
    usuarioId: string,
    { skip, take }: IPagination
  ): Promise<IFindAllExitsTimesByIdDTO[]>;
}

export default ITimesRepository;
