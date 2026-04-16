export interface UsuarioCreateData {
    nombre: string;
    apellido: string;
    usuario: string;
    pwhash: string;
}

export interface UsuarioUpdateData {
    nombre?: string;
    apellido?: string;
    usuario?: string;
    pwhash?: string;
}
