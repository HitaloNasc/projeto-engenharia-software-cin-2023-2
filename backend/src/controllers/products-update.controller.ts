import { Request, Response } from 'express';
import { Logger } from '../helpers';
import { Service } from '../services';

export class UpdateProductsController {
    private service: Service;

    constructor(service: Service) {
        this.service = service;
    }

    public async execute(req: Request, res: Response): Promise<any> {
        try {
            Logger.log('api - products - update');

            const id = req.params.id;
            const dataToUpdate = req.body;

            const result = await this.service.execute(id, dataToUpdate);

            return res.status(200).json(result);
        } catch (error) {
            Logger.dir(error);
            return res.status(500).json({ error: 'Erro interno no servidor.' });
        }
    }
}
