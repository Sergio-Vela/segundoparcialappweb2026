import { Autor } from "../models/autorModel";
import type { AutorService } from "../../domain/services/autorService";

export class AutorServiceImpl implements AutorService {
    async createAutor(nombre: string, apellido: string): Promise<Autor> {
        return await Autor.create({ nombre, apellido });
    }

    async getAutores(): Promise<Autor[]> {
        return await Autor.findAll();
    }

    async getAutorById(id: number): Promise<Autor | null> {
        return await Autor.findByPk(id);
    }

    async updateAutor(id: number, nombre?: string, apellido?: string): Promise<Autor | null> {
        const autor = await Autor.findByPk(id);
        if (!autor) return null;
        const updateData: any = {};
        if (nombre !== undefined) updateData.nombre = nombre;
        if (apellido !== undefined) updateData.apellido = apellido;
        await autor.update(updateData);
        return autor;
    }

    async deleteAutor(id: number): Promise<boolean> {
        const deleted = await Autor.destroy({ where: { id } });
        return deleted > 0;
    }
}