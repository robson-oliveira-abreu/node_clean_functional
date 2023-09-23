import { Request, Response } from "express";
import { UserController } from "./types/userController.type";
import { UserService } from "./types/userService.type";


function userController(userService: UserService): UserController {

    async function find(req: Request, res: Response): Promise<void> {
        const params = req.params;
        const id = params.id;

        const user = await userService.find(+id);

        res.send(user);
    };

    async function list(req: Request, res: Response): Promise<void> {
        const users = await userService.list();

        res.send(users);
    };

    async function create(req: Request, res: Response): Promise<void> {
        const body = req.body;

        const user = await userService.create(body);

        res.send(user);
    };

    return {
        find,
        list,
        create,
    }
}

export { userController };