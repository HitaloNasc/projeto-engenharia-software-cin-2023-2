import { DeleteProductsService } from './products-delete.service';
import { InMemoryProductsRepository } from '../repositories';
import { Repository } from '../repositories';

describe('DeleteProductsService', () => {
    let deleteService: DeleteProductsService;
    let inMemoryRepository: Repository;

    beforeEach(() => {
        inMemoryRepository = new InMemoryProductsRepository([
            { id: '1', name: 'Product 1', price: 10.99 },
            { id: '2', name: 'Product 2', price: 20.99 },
        ]);
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
