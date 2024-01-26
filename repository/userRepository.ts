import { DbConfig } from '../configuration/dbConnection'
import sql from 'mssql'
import { User } from '../models/User'
import { request } from 'express'

export class UserRepository{
    private connect: DbConfig;
    public getAlluser = async () => {
        this.connect.connnection
        var query = "select * fron user"
        return sql.query(query)
    }
    public saveUSer = async (user:User) => {
        var query = "insert into user(id)"
    }
}