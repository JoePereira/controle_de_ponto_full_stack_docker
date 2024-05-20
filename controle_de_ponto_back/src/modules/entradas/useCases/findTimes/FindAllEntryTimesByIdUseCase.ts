import { inject, injectable } from "tsyringe";
import TimesRepository from "../../infra/repositories/TimesRepository";
import {
  IFindAllEntryTimesByIdDTO,
  IPagination,
} from "../../infra/entities/ITimesDTO";

@injectable()
class FindAllEntryTimesByIdUseCase {
  constructor(
    @inject("TimesRepository")
    private timesRepository: TimesRepository
  ) {}

  async execute(
    usuarioId: string,
    { skip, take }: IPagination
  ): Promise<IFindAllEntryTimesByIdDTO[] | null> {
    const allEntryTimes = await this.timesRepository.findAllEntryTimesById(
      usuarioId,
      { take, skip }
    );

    const filteredEntryTimes = allEntryTimes.filter(
      (entryTime) => entryTime.horarioEntrada !== null
    );
    return filteredEntryTimes;
  }
}

export default FindAllEntryTimesByIdUseCase;
