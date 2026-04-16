export interface ReservaCreateData {
    usuarioId: number;
    libroId: number;
    fechaReserva: Date;
    fechaDevolucion: Date;
    estadoId: number;
}

export interface ReservaUpdateData {
    usuarioId?: number;
    libroId?: number;
    fechaReserva?: Date;
    fechaDevolucion?: Date;
    estadoId?: number;
}
