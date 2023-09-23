import express from "express";
import { userModule } from "./modules/user/user.module.js";

const app = express();

app.use(express.json());

app.use('/user', userModule)

app.listen(9090);