import 'dotenv/config'
import { DataSource } from "typeorm"

const database = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    entities: [__dirname + '/../modules/**/entity/*.entity.ts'],
    logging: true,
    synchronize: true,
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
})

export { database }