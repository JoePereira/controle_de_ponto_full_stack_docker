export interface ITimesDTO {
  id: string;
  usuarioId: string;
  horarioEntrada?: Date | null;
  horarioSaida?: Date | null;
}

export interface ITimesByUserDTO {
  horarioEntrada?: Date | null;
  horarioSaida?: Date | null;
}

export interface ICadEntryTimeDTO {
  usuarioId: string;
  horarioEntrada?: Date | null;
}

export interface ICadExitTimeDTO {
  usuarioId: string;
  horarioSaida?: Date | null;
}

export interface IFindAllEntryTimesByIdDTO {
  id: string;
  usuarioId: string;
  horarioEntrada?: Date | null;
}

export interface IFindAllExitsTimesByIdDTO {
  id: string;
  usuarioId: string;
  horarioSaida?: Date | null;
}

export interface IFindAllEntryTimesByIdResponse {
  totalEntries: number;
  totalPages: number;
  entryTimes: IFindAllEntryTimesByIdDTO[];
}

export interface IFindAllExitTimesByIdResponse {
  totalExities: number;
  totalPages: number;
  entryTimes: IFindAllExitsTimesByIdDTO[];
}

export interface IPagination {
  take: number;
  skip: number;
}
