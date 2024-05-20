import { ITimesByUserDTO } from "../../../entradas/infra/entities/ITimesDTO";

export interface IUserDTO {
  id: string;
  nome: string;
  codigoUsuario: string;
  horariosEntradaSaida?: ITimesByUserDTO[] | null;
}

export interface ICadUserDTO {
  nome: string;
  codigoUsuario?: string | null;
}

export interface ICodigoUsuarioDTO {
  codigoUsuario: string | null;
}

export interface IFindUserByIdDTO {
  id: string;
  nome: string;
  horariosEntradaSaida?: ITimesByUserDTO[] | null;
}

export interface IFindUserByCodigoUsuarioDTO {
  id: string;
  nome: string;
  codigoUsuario: string | null;
  horariosEntradaSaida?: ITimesByUserDTO[] | null;
}
