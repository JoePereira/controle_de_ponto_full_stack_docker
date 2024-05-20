import { inject, injectable } from "tsyringe";
import TimesRepository from "../../infra/repositories/TimesRepository";
import {
  IFindAllExitsTimesByIdDTO,
  IPagination,
} from "../../infra/entities/ITimesDTO";

@injectable()
class FindAllExitTimesByIdUseCase {
  constructor(
    @inject("TimesRepository")
    private timesRepository: TimesRepository
  ) {}

  async execute(
    usuarioId: string,
    { skip, take }: IPagination
  ): Promise<IFindAllExitsTimesByIdDTO[] | null> {
    const allExitTimes = await this.timesRepository.findAllExitTimesById(
      usuarioId,
      { take, skip }
    );
    const filteredExitTimes = allExitTimes.filter(
      (exitTime) => exitTime.horarioSaida !== null
    );
    return filteredExitTimes;
  }
}

export default FindAllExitTimesByIdUseCase;
