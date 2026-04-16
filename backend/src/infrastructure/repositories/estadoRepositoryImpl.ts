import { Estado } from "../models/estadomodel";
import type { EstadoRepository } from "../../domain/repositories/estadoRepository";
import type { EstadoCreateData, EstadoUpdateData } from "../../application/dtos";

export class EstadoRepositoryImpl implements EstadoRepository {
    async create(data: EstadoCreateData): Promise<Estado> {
        return await Estado.create(data);
    }

    async findAll(): Promise<Estado[]> {
        return await Estado.findAll();
    }

    async findById(id: number): Promise<Estado | null> {
        return await Estado.findByPk(id);
    }

    async update(id: number, data: EstadoUpdateData): Promise<Estado | null> {
        const estado = await Estado.findByPk(id);
        if (!estado) return null;
        await estado.update(data);
        return estado;
    }

    async delete(id: number): Promise<boolean> {
        const deleted = await Estado.destroy({ where: { id } });
        return deleted > 0;
    }
}