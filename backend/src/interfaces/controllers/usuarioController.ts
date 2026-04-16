import { Request, Response } from "express";
import { UsuarioServiceImpl } from "../../infrastructure/services/usuarioServiceImpl";

const usuarioService = new UsuarioServiceImpl();

export class UsuarioController {
    async createUsuario(req: Request, res: Response) {
        const { nombre, apellido, usuario, pwhash } = req.body;
        try {
            const usuarioObj = await usuarioService.createUsuario(nombre, apellido, usuario, pwhash);
            res.status(201).json(usuarioObj);
        } catch (error) {
            console.error("Error creating usuario: ", error);
            res.status(500).json({ error: "Failed to create usuario" });
        }
    }

    async getUsuarios(req: Request, res: Response) {
        try {
            const usuarios = await usuarioService.getUsuarios();
            res.status(200).json(usuarios);
        } catch (error) {
            console.error("Error fetching usuarios: ", error);
            res.status(500).json({ error: "Failed to fetch usuarios" });
        }
    }

    async getUsuarioById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const usuario = await usuarioService.getUsuarioById(Number(id));
            if (!usuario) {
                res.status(404).json({ error: "Usuario not found" });
            } else {
                res.status(200).json(usuario);
            }
        } catch (error) {
            console.error("Error fetching usuario: ", error);
            res.status(500).json({ error: "Failed to fetch usuario" });
        }
    }

    async updateUsuario(req: Request, res: Response) {
        const { id } = req.params;
        const { nombre, apellido, usuario, pwhash } = req.body;
        try {
            const usuarioObj = await usuarioService.updateUsuario(
                Number(id),
                nombre,
                apellido,
                usuario,
                pwhash
            );
            if (!usuarioObj) {
                res.status(404).json({ error: "Usuario not found" });
            } else {
                res.status(200).json(usuarioObj);
            }
        } catch (error) {
            console.error("Error updating usuario: ", error);
            res.status(500).json({ error: "Failed to update usuario" });
        }
    }

    async deleteUsuario(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const success = await usuarioService.deleteUsuario(Number(id));
            if (success) {
                res.status(200).json({ message: "Usuario deleted successfully" });
            } else {
                res.status(404).json({ error: "Usuario not found" });
            }
        } catch (error) {
            console.error("Error deleting usuario: ", error);
            res.status(500).json({ error: "Failed to delete usuario" });
        }
    }
}
