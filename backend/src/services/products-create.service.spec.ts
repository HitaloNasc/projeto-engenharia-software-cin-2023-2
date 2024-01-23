import { CreateProductsService } from './products-create.service';
import { InMemoryProductsRepository } from '../repositories';
import { Repository } from '../repositories/repository';

describe('CreateProductsService', () => {
    let createService: CreateProductsService;
    let inMemoryRepository: Repository;

    beforeEach(() => {
        inMemoryRepository = new InMemoryProductsRepository([
            { id: '1', name: 'Product 1', price: 10.99 },
            { id: '2', name: 'Product 2', price: 20.99 },
        ]);
        createService = new CreateProductsService(inMemoryRepository);
    });

    it('should create a product successfully with a generated ID', async () => {
        const productData = { name: 'Product 1', price: 10.99 };

        const result = await createService.execute(productData);

        expect(result).toEqual({
            id: expect.any(String),
            ...productData,
        });
    });
});
