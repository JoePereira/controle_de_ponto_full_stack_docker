class Times {
  id: string;
  usuarioId: string;
  horarioEntrada: Date;
  horarioSaida: Date;
  constructor(
    id: string,
    usuarioId: string,
    horarioEntrada: Date,
    horarioSaida: Date
  ) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.horarioEntrada = horarioEntrada;
    this.horarioSaida = horarioSaida;
  }
}

export default Times;
