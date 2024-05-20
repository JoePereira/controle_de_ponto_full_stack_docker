import { Router } from "express";
import TimesController from "../controller/TimesController";

const timesRoute = Router();
const timesController = new TimesController();

timesRoute.post("/createEntry", timesController.createEntryTime);
timesRoute.post("/createExit", timesController.createExitTime);
timesRoute.get(
  "/getAllEntryTimesByUsuarioId/:usuarioId&:take&:skip",
  timesController.getAllEntryTimesByUsuarioId
);
timesRoute.get(
  "/getAllExitTimesByUsuarioId/:usuarioId&:take&:skip",
  timesController.getAllExitTimesByUsuarioId
);

export { timesRoute };
