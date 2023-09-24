import { Request, Response } from "express";
import { UserController } from "./types/userController.type";
import { UserService } from "./types/userService.type";
import { CreateUserProps } from "./types/createUserProps";
import { HttpStatus } from "../../commons/http/HttpStatus";
import { UpdateUserProps } from "./types/updateUserProps";

function userController(userService: UserService): UserController {

    async function find(req: Request, res: Response): Promise<void> {
        try {
            const params = req.params;
            const id = params.id;

            const user = await userService.find(id);

            res.send(user);
        } catch (error: any) {
            res
                .status(error?.statusCode || HttpStatus.InternalServerError)
                .send({ message: error.message });
        }
    };

    async function list(req: Request, res: Response): Promise<void> {
        try {
            const users = await userService.list();

            res.send(users);
        } catch (error: any) {
            res
                .status(error?.statusCode || HttpStatus.InternalServerError)
                .send({ message: error.message });
        }
    };

    async function create(req: Request, res: Response): Promise<void> {
        try {
            const body = req.body as CreateUserProps;

            const user = await userService.create(body);

            res.status(HttpStatus.Created).send(user);
        } catch (error: any) {
            res
                .status(error?.statusCode || HttpStatus.InternalServerError)
                .send({ message: error.message });
        }
    };
    async function update(req: Request, res: Response): Promise<void> {
        try {
            const params = req.params;
            const id = params.id;
            const body = req.body as UpdateUserProps;

            const result = await userService.update(id, body);

            res.status(HttpStatus.OK).send(result);
        } catch (error: any) {
            res
                .status(error?.statusCode || HttpStatus.InternalServerError)
                .send({ message: error.message });
        }
    };

    async function remove(req: Request, res: Response): Promise<void> {
        try {
            const params = req.params;
            const id = params.id;

            const result = await userService.remove(id);

            res.status(HttpStatus.OK).send(result);
        } catch (error: any) {
            res
                .status(error?.statusCode || HttpStatus.InternalServerError)
                .send({ message: error.message });
        }
    };

    return {
        find,
        list,
        create,
        update,
        remove,
    }
}

export { userController };