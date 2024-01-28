import { Logger } from '../helpers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorMiddleware = (err: any, req: any, res: any, next: any) => {
    Logger.error(err.stack);

    const statusCode = err.statusCode || 500;
    res.status(statusCode).send({
        success: false,
        message: err.message,
        stack: err.stack,
    });
};
