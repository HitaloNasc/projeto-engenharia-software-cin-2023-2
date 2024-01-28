import { NotFoundError } from '../helpers';

export const notFoundMiddleware = (req: any, res: any, next: any) => {
    next(new NotFoundError(req.path));
};
