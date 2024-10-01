//O banco de dados que será utilizado será o MYSQL
import mysql from 'mysql2/promise';
export default async function conectar(){

    if (global.poolConexoes){
        return await global.poolConexoes.getConnection();
    }
    else{
        const pool = mysql.createPool({
            host: 'localhost',
            user: 'root', //deve ser desencorajado
            port: 3306,
            password: '',
            database: 'pieventos',
            waitForConnections: true,
            maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
            idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
          });

          global.poolConexoes = pool;

          return await global.poolConexoes.getConnection();
    }
}