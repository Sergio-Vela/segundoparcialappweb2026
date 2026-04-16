import { Reserva } from "../models/reservaModel";
import type { ReservaService } from "../../domain/services/reservaService";

export class ReservaServiceImpl implements ReservaService {
    async createReserva(usuarioId: number, libroId: number, fechaReserva: Date, fechaDevolucion: Date, estadoId: number): Promise<Reserva> {
        return await Reserva.create({ usuarioId, libroId, fechaReserva, fechaDevolucion, estadoId });
    }

    async getReservas(): Promise<Reserva[]> {
        return await Reserva.findAll();
    }

    async getReservaById(id: number): Promise<Reserva | null> {
        return await Reserva.findByPk(id);
    }

    async updateReserva(id: number, usuarioId?: number, libroId?: number, fechaReserva?: Date, fechaDevolucion?: Date, estadoId?: number): Promise<Reserva | null> {
        const reserva = await Reserva.findByPk(id);
        if (!reserva) return null;
        const updateData: any = {};
        if (usuarioId !== undefined) updateData.usuarioId = usuarioId;
        if (libroId !== undefined) updateData.libroId = libroId;
        if (fechaReserva !== undefined) updateData.fechaReserva = fechaReserva;
        if (fechaDevolucion !== undefined) updateData.fechaDevolucion = fechaDevolucion;
        if (estadoId !== undefined) updateData.estadoId = estadoId;
        await reserva.update(updateData);
        return reserva;
    }

    async deleteReserva(id: number): Promise<boolean> {
        const deleted = await Reserva.destroy({ where: { id } });
        return deleted > 0;
    }

    async getReservasPorUsuario(usuarioId: number): Promise<Reserva[]> {
        return await Reserva.findAll({
            where: { usuarioId },
            include: ['libro', 'estado']
        });
    }

    async cancelarReserva(id: number): Promise<Reserva | null> {
        const reserva = await Reserva.findByPk(id);
        if (!reserva) return null;
        await reserva.update({ estadoId: 4});
        return reserva;
    }

    async devolverReserva(id: number): Promise<Reserva | null> {
        const reserva = await Reserva.findByPk(id);
        if (!reserva) return null;
        await reserva.update({ estadoId: 3 });
        return reserva;
    }
}