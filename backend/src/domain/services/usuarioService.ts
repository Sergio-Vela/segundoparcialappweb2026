import { Usuario } from "../../infrastructure/models/usuarioModel";

export interface UsuarioService {
    createUsuario(nombre: string, apellido: string, usuario: string, pwhash: string): Promise<Usuario>;
    getUsuarios(): Promise<Usuario[]>;
    getUsuarioById(id: number): Promise<Usuario | null>;
    updateUsuario(id: number, nombre?: string, apellido?: string, usuario?: string, pwhash?: string): Promise<Usuario | null>;
    deleteUsuario(id: number): Promise<boolean>;
}