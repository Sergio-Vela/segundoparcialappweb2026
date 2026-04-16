import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Reserva extends Model {
    public id!: number;
    public usuarioId!: number;
    public libroId!: number;
    public fechaReserva!: Date;
    public fechaDevolucion!: Date;
    public estadoId!: number;

}

Reserva.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        libroId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fechaReserva: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fechaDevolucion: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        estadoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "reservas",
    }
);