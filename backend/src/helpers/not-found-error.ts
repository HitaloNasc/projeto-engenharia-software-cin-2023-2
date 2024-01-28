import { ApiError } from './api-error';
import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends ApiError {
    constructor(path: string) {
        super(StatusCodes.NOT_FOUND, `The requested path ${path} not found!`);
    }
}
