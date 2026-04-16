import { Usuario } from "../models/usuarioModel";
import type { UsuarioService } from "../../domain/services/usuarioService";

export class UsuarioServiceImpl implements UsuarioService {
    async createUsuario(nombre: string, apellido: string, usuario: string, pwhash: string): Promise<Usuario> {
        return await Usuario.create({ nombre, apellido, usuario, pwhash });
    }

    async getUsuarios(): Promise<Usuario[]> {
        return await Usuario.findAll();
    }

    async getUsuarioById(id: number): Promise<Usuario | null> {
        return await Usuario.findByPk(id);
    }

    async updateUsuario(id: number, nombre?: string, apellido?: string, usuario?: string, pwhash?: string): Promise<Usuario | null> {
        const usuarioObj = await Usuario.findByPk(id);
        if (!usuarioObj) return null;
        const updateData: any = {};
        if (nombre !== undefined) updateData.nombre = nombre;
        if (apellido !== undefined) updateData.apellido = apellido;
        if (usuario !== undefined) updateData.usuario = usuario;
        if (pwhash !== undefined) updateData.pwhash = pwhash;
        await usuarioObj.update(updateData);
        return usuarioObj;
    }

    async deleteUsuario(id: number): Promise<boolean> {
        const deleted = await Usuario.destroy({ where: { id } });
        return deleted > 0;
    }
}