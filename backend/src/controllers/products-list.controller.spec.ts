import { ListProductsController } from './products-list.controller';
import { ListProductsService } from '../services';
import { InMemoryProductsRepository, Repository } from '../repositories';
import express, { Express, Request, Response } from 'express';
import request from 'supertest';

describe('ListProductsController', () => {
    let listController: ListProductsController;
    let listService: ListProductsService;
    let inMemoryRepository: Repository;
    let app: Express;

    beforeEach(() => {
        inMemoryRepository = new InMemoryProductsRepository([
            { id: '1', name: 'Product 1', price: 10.99 },
            { id: '2', name: 'Product 2', price: 20.99 },
        ]);
        listService = new ListProductsService(inMemoryRepository);
        listController = new ListProductsController(listService);

        app = express();

        app.get('/products', async (req: Request, res: Response) => {
            return listController.execute(req, res);
        });
    });

    it('should return the result', async () => {
        const response = await request(app).get('/products');

        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(2);
        expect(response.body).toEqual([
            { id: '1', name: 'Product 1', price: 10.99 },
            { id: '2', name: 'Product 2', price: 20.99 },
        ]);
    });
});
