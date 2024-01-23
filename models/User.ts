import { Sequelize, DataTypes } from 'sequelize';
import model from 'sequelize/types/model';
export class User{
    id?: {
        type: DataTypes.IntegerDataType,
        autoIncrement: true,
        primaryKey: true,
    }

    username?: {
        type: DataTypes.StringDataType,
        allowNull: false,
        unique : true,
    }
    password?: {
        type: DataTypes.StringDataType,
        allowNull: false,
        unique: true
    }
    role?: {
        type: DataTypes.StringDataType,
        allowNull: false
    }

}

