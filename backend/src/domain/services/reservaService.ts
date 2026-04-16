import { Reserva } from "../../infrastructure/models/reservaModel";

export interface ReservaService {
    createReserva(usuarioId: number, libroId: number, fechaReserva: Date, fechaDevolucion: Date, estadoId: number): Promise<Reserva>;
    getReservas(): Promise<Reserva[]>;
    getReservaById(id: number): Promise<Reserva | null>;
    updateReserva(id: number, usuarioId?: number, libroId?: number, fechaReserva?: Date, fechaDevolucion?: Date, estadoId?: number): Promise<Reserva | null>;
    deleteReserva(id: number): Promise<boolean>;
    getReservasPorUsuario(usuarioId: number): Promise<Reserva[]>;
    cancelarReserva(id: number): Promise<Reserva | null>;
    devolverReserva(id: number): Promise<Reserva | null>;
}