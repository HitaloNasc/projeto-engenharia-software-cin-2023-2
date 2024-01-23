import { CreateProductsService } from './products-create.service';
import { InMemoryProductsRepository } from '../repositories';
import { Repository } from '../repositories/repository';

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

describe('CreateProductsService', () => {
    let createService: CreateProductsService;
    let inMemoryRepository: Repository;

    beforeEach(() => {
        inMemoryRepository = new InMemoryProductsRepository(mockProducts);
        createService = new CreateProductsService(inMemoryRepository);
    });

    it('should create a product successfully with a generated ID', async () => {
        const productData = { name: 'Product 1', price: 10.99, description: 'Product 1 description' };

        const result = await createService.execute(productData);

        expect(result).toHaveProperty('id', expect.any(String));
        expect(result).toHaveProperty('name', productData.name);
        expect(result).toHaveProperty('price', productData.price);
        expect(result).toHaveProperty('description', productData.description);
        expect(result).toHaveProperty('availability', true);
        expect(result).toHaveProperty('createdAt', expect.any(String));
        expect(result).toHaveProperty('updatedAt', expect.any(String));
    });
});
