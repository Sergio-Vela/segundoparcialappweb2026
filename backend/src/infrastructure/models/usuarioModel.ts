import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Usuario extends Model {
    public id!: number;
    public nombre!: string;
    public apellido!: string;
    public usuario!: string;
    public pwhash!: number;

}

Usuario.init(
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
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pwhash: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "usuarios",
    }
);