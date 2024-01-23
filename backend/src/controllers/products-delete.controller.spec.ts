import { DeleteProductsController } from './products-delete.controller';
import { DeleteProductsService } from '../services';
import { InMemoryProductsRepository, Repository } from '../repositories';
import express, { Express, Request, Response } from 'express';
import request from 'supertest';

describe('DeleteProductsController', () => {
    let deleteController: DeleteProductsController;
    let deleteService: DeleteProductsService;
    let inMemoryRepository: Repository;
    let app: Express;

    beforeEach(() => {
        inMemoryRepository = new InMemoryProductsRepository([
            { id: '1', name: 'Product 1', price: 10.99 },
            { id: '2', name: 'Product 2', price: 20.99 },
        ]);
        deleteService = new DeleteProductsService(inMemoryRepository);
        deleteController = new DeleteProductsController(deleteService);

        app = express();

        app.delete('/products/:id', async (req: Request, res: Response) => {
            return deleteController.execute(req, res);
        });
    });

    it('should delete and return true', async () => {
        const response = await request(app).delete('/products/1');

        expect(response.status).toBe(200);
        expect(response.body).toBeTruthy();
    });
});
