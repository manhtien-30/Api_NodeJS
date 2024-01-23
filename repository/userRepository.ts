import { DbConfig } from '../configuration/dbConnection'
import sql from 'mssql'
import { User } from '../models/User'
import { request } from 'express'

export class UserRepository{
    public getAlluser = async () => {
        var connect = new DbConfig()
        connect.connnection
        var query = "select * fron user"
        return sql.query(query)
        
    }
}