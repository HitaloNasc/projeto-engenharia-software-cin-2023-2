import { ListProductsController } from './products-list.controller';
import { ListProductsService } from '../services';
import { InMemoryProductsRepository, Repository } from '../repositories';
import express, { Express, Request, Response } from 'express';
import request from 'supertest';

const mockProducts = [
    {
        id: '1',
        name: 'Product 1',
        price: 10.99,
        description: 'Product 1 description',
        availability: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: '2',
        name: 'Product 2',
        price: 20.99,
        description: 'Product 2 description',
        availability: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

describe('ListProductsController', () => {
    let listController: ListProductsController;
    let listService: ListProductsService;
    let inMemoryRepository: Repository;
    let app: Express;

    beforeEach(() => {
        inMemoryRepository = new InMemoryProductsRepository(mockProducts);
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
        expect(response.body).toEqual(mockProducts);
    });
});
