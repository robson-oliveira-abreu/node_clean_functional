import { HttpStatus } from "./HttpStatus";

class HttpError extends Error {
    public statusCode: number;
    public message: string;

    constructor(statusCode: HttpStatus, message: string) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}

export { HttpError }