import { Request, Response } from 'express';
import { Logger } from '../helpers';
import { Service } from '../services';

export class GetByIdProductsController {
    private service: Service;

    constructor(service: Service) {
        this.service = service;
    }

    public async execute(req: Request, res: Response): Promise<Response> {
        Logger.log('api - products - list');

        const id = req.params.id;

        const result = await this.service.execute(id);

        return res.status(200).json(result);
    }
}
