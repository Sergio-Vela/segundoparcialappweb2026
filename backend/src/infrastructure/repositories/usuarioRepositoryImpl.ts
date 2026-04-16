import { Usuario } from "../models/usuarioModel";
import type { UsuarioRepository } from "../../domain/repositories/usuarioRepository";
import type { UsuarioCreateData, UsuarioUpdateData } from "../../application/dtos";

export class UsuarioRepositoryImpl implements UsuarioRepository {
    async create(data: UsuarioCreateData): Promise<Usuario> {
        return await Usuario.create(data);
    }

    async findAll(): Promise<Usuario[]> {
        return await Usuario.findAll();
    }

    async findById(id: number): Promise<Usuario | null> {
        return await Usuario.findByPk(id);
    }

    async update(id: number, data: UsuarioUpdateData): Promise<Usuario | null> {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return null;
        await usuario.update(data);
        return usuario;
    }

    async delete(id: number): Promise<boolean> {
        const deleted = await Usuario.destroy({ where: { id } });
        return deleted > 0;
    }
}