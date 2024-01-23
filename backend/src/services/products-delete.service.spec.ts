import { DeleteProductsService } from './products-delete.service';
import { InMemoryProductsRepository } from '../repositories';
import { Repository } from '../repositories';

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

describe('DeleteProductsService', () => {
    let deleteService: DeleteProductsService;
    let inMemoryRepository: Repository;

    beforeEach(() => {
        inMemoryRepository = new InMemoryProductsRepository(mockProducts);
        deleteService = new DeleteProductsService(inMemoryRepository);
    });

    it('should delete a product successfully', async () => {
        const productId = '1';

        const result = await deleteService.execute(productId);

        expect(result).toBeTruthy();
    });

    it('should return false for a non-existent product', async () => {
        const nonExistentProductId = 'non-existent-id';

        const result = await deleteService.execute(nonExistentProductId);

        expect(result).toBeFalsy();
    });
});
