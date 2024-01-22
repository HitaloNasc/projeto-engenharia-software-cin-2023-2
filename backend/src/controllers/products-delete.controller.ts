import { Request, Response } from 'express';
import { Logger } from '../helpers';
import { Service } from '../services';

export class DeleteProductsController {
    private service: Service;

    constructor(service: Service) {
        this.service = service;
    }

    // private validate(list: ListProductsService, data: Products) {
    //     if (list.includes(data.id)) {
    //         throw new Error('Name and price are required');
    //     }
    // }

    public async execute(req: Request, res: Response): Promise<any> {
        Logger.log('api - products-delete');

        const id = req.params.id;

        const result = await this.service.execute(id);

        return res.status(200).json(result);
    }
}
