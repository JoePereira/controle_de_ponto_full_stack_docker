import { inject, injectable } from "tsyringe";
import ITimesRepository from "../../infra/repositories/ITimesRepository";
import { ICadEntryTimeDTO } from "../../infra/entities/ITimesDTO";
@injectable()
class CadEntryUseCase {
  constructor(
    @inject("TimesRepository")
    private timesRepository: ITimesRepository
  ) {}

  async execute({ usuarioId }: ICadEntryTimeDTO) {
    const horarioEntrada = new Date();

    await this.timesRepository.createEntryTime({
      usuarioId,
      horarioEntrada,
    });
  }
}

export default CadEntryUseCase;
