import express from "express";
import 'dotenv/config'
import { database } from "./database/database";

import { userModule } from "./modules/user/user.module";

database
    .initialize()
    .then(() => console.log("DataBase running!"))
    .catch((err) => console.error("Database Error:", err))

const app = express();

app.use(express.json());

app.use('/user', userModule)

app.listen(9090);