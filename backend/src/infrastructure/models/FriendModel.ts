import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Friend extends Model {
    public id!: number;
    public name!: string;
    public gender!: string;
}

Friend.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "my_friends",
        timestamps: false,
    },
    
);