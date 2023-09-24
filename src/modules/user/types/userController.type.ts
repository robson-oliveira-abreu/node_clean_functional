import { Request, Response } from "express";

type UserController = {
    find: (req: Request, res: Response) => Promise<void>;
    list: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    remove: (req: Request, res: Response) => Promise<void>;
}

export { UserController }