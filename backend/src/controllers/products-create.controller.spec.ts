import { CreateProductsController } from './products-create.controller';
import { CreateProductsService } from '../services';
import { InMemoryProductsRepository, Repository } from '../repositories';
import express, { Express, Request, Response } from 'express';
import request from 'supertest';

describe('CreateProductsController', () => {
    let createController: CreateProductsController;
    let createService: CreateProductsService;
    let inMemoryRepository: Repository;
    let app: Express;

    beforeEach(() => {
        inMemoryRepository = new InMemoryProductsRepository();
        createService = new CreateProductsService(inMemoryRepository);
        createController = new CreateProductsController(createService);

        app = express();

        app.post('/products', async (req: Request, res: Response) => {
            return createController.execute(req, res);
        });
    });

    it('should create a new product', async () => {
        const productData = { name: 'Product 1', price: 10.99 };

        // FIXME esse caso de teste não está funcionando corretamente > body vazio
        const response = await request(app).post('/products').send(productData).expect('Content-Type', /json/).expect(201); // Ajustar conforme necessário

        expect(response.body).toHaveProperty('name', productData.name);
        expect(response.body).toHaveProperty('price', productData.price);
    });
});
