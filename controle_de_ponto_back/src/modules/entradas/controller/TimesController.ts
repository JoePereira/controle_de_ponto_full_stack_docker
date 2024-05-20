import { Request, Response } from "express";
import { container } from "tsyringe";
import CadEntryUseCase from "../useCases/cadTimes/CadEntryUseCase";
import CadExitUseCase from "../useCases/cadTimes/CadExitUseCase";
import FindAllEntryTimesByIdUseCase from "../useCases/findTimes/FindAllEntryTimesByIdUseCase";
import FindAllExitTimesByIdUseCase from "../useCases/findTimes/FindAllExitTimesByIdUseCase";

class TimesController {
  async createEntryTime(req: Request, res: Response): Promise<Response> {
    const { usuarioId } = req.body;

    const createEntryTime = container.resolve(CadEntryUseCase);

    try {
      await createEntryTime.execute({ usuarioId });
      return res
        .status(201)
        .json({ message: "Horario de entrada cadastrado com sucesso" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async createExitTime(req: Request, res: Response): Promise<Response> {
    const { usuarioId } = req.body;

    const createExitTime = container.resolve(CadExitUseCase);

    try {
      await createExitTime.execute({ usuarioId });
      return res
        .status(201)
        .json({ message: "Horario de saida cadastrado com sucesso" });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async getAllEntryTimesByUsuarioId(
    req: Request,
    res: Response
  ): Promise<Response> {
    const usuarioId = req.params.usuarioId;

    const skip: number = parseInt(req.params.skip);
    const take: number = parseInt(req.params.take);

    const findAllEntries = container.resolve(FindAllEntryTimesByIdUseCase);

    try {
      const entries = await findAllEntries.execute(usuarioId, { skip, take });
      return res.status(200).json(entries);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  async getAllExitTimesByUsuarioId(
    req: Request,
    res: Response
  ): Promise<Response> {
    const usuarioId = req.params.usuarioId;

    const skip: number = parseInt(req.params.skip);
    const take: number = parseInt(req.params.take);

    const findAllExities = container.resolve(FindAllExitTimesByIdUseCase);

    try {
      const exits = await findAllExities.execute(usuarioId, { skip, take });
      return res.status(200).json(exits);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default TimesController;
