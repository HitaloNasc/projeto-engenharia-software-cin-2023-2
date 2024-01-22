import { Request, Response } from 'express';
import { Logger } from '../helpers';
import { Service } from '../services';
import { Products } from '../models';

export class CreateProductsController {
    private service: Service;

    constructor(service: Service) {
        this.service = service;
    }

    private validate(data: Products) {
        if (!data.name || !data.price) {
            throw new Error('Name and price are required');
        }
    }

    public async execute(req: Request, res: Response): Promise<Response> {
        Logger.log('api - products-create');

        const data = req.body;

        if (Array.isArray(data)) {
            
            const results = await Promise.all(
                data.map(async (data: Products) => {
                    
                    this.validate(data);
                    
                    return this.service.execute(data);
                })
            )

            return res.status(200).json(results);
            
        } else{

            this.validate(data);
            
            const result = await this.service.execute(data);

            return res.status(200).json(result);
        }
    }
}
