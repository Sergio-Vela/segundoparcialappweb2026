import { Autor } from "./autorModel";
import { Categoria } from "./categoriaModel"
import { Estado } from "./estadomodel";
import { Friend } from "./FriendModel";
import { LibroAutor } from "./libroAutorModel";
import { Libro } from "./libroModel"
import { Reserva } from "./reservaModel";
import { Usuario } from "./usuarioModel";


export const registerModels = () => {
   
    Categoria.hasMany(Libro, { foreignKey: 'categoriaId', as: 'libros' });
    Libro.belongsTo(Categoria, { foreignKey: 'categoriaId', as: 'categoria' });


    Libro.belongsToMany(Autor, { through: LibroAutor, foreignKey: 'libroId', as: 'autores' });
    Autor.belongsToMany(Libro, { through: LibroAutor, foreignKey: 'autorId', as: 'libros' });

    Libro.hasMany(Reserva, { foreignKey: 'libroId', as: 'reservas' });
    Reserva.belongsTo(Libro, { foreignKey: 'libroId', as: 'libro' });

    Usuario.hasMany(Reserva, { foreignKey: 'usuarioId', as: 'reservas' });
    Reserva.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

    Estado.hasMany(Reserva, { foreignKey: 'estadoId', as: 'reservas' });
    Reserva.belongsTo(Estado, { foreignKey: 'estadoId', as: 'estado' });

    return {Categoria, Libro, Autor, Reserva, Usuario, Estado, Friend, LibroAutor};
}