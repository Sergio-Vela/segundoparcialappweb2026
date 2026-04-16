import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class LibroAutor extends Model {
    public id!: number;
    public libroId!: number;
    public autorId!: number;
}

LibroAutor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        libroId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        autorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "libros_autores",
    }
);