import { inject, injectable } from "tsyringe";
import ITimesRepository from "../../infra/repositories/ITimesRepository";
import { ICadExitTimeDTO } from "../../infra/entities/ITimesDTO";

@injectable()
class CadExitUseCase {
  constructor(
    @inject("TimesRepository")
    private timesRepository: ITimesRepository
  ) {}

  async execute({ usuarioId }: ICadExitTimeDTO) {
    const now = new Date();
    await this.timesRepository.createExitTime({
      usuarioId,
      horarioSaida: now,
    });
  }
}

export default CadExitUseCase;
