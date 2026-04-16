import { Reserva } from "../models/reservaModel";
import type { ReservaRepository } from "../../domain/repositories/reservaRepository";
import type { ReservaCreateData, ReservaUpdateData } from "../../application/dtos";

export class ReservaRepositoryImpl implements ReservaRepository {
    async create(data: ReservaCreateData): Promise<Reserva> {
        return await Reserva.create(data);
    }

    async findAll(): Promise<Reserva[]> {
        return await Reserva.findAll();
    }

    async findById(id: number): Promise<Reserva | null> {
        return await Reserva.findByPk(id);
    }

    async update(id: number, data: ReservaUpdateData): Promise<Reserva | null> {
        const reserva = await Reserva.findByPk(id);
        if (!reserva) return null;
        await reserva.update(data);
        return reserva;
    }

    async delete(id: number): Promise<boolean> {
        const deleted = await Reserva.destroy({ where: { id } });
        return deleted > 0;
    }
}