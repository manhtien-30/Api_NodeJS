import sql from 'mssql'
import { Database } from 'sqlite3'
export class DbConfig {
    sqlConfig = {
        server: "",
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
            authentication: {
                type: 'default',
                options: {
                    userName: 'sa', //update me
                    password: 'Tien@3010'  //update me
                }
            },
            encrypt: true, // for azure
            trustServerCertificate: false // change to true for local dev / self-signed certs
        }

    }
    connnection = async () => {
        try {
            await sql.connect(this.sqlConfig);
        } catch (error) {
            console.log(error)
        }
    }

}