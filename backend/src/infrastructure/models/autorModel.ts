import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Autor extends Model {
    public id!: number;
    public nombre!: string;
    public apellido!: string;
}

Autor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "autores",
    }
);