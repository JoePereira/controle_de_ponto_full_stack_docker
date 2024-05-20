import { container } from "tsyringe";
import IUserRepository from "../../modules/usuarios/infra/repositories/IUserRepository";
import UserRepository from "../../modules/usuarios/infra/repositories/UserRepository";
import ITimesRepository from "../../modules/entradas/infra/repositories/ITimesRepository";
import TimesRepository from "../../modules/entradas/infra/repositories/TimesRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<ITimesRepository>(
  "TimesRepository",
  TimesRepository
);
