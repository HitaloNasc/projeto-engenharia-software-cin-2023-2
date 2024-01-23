import { ListProductsService } from '.';
import { InMemoryProductsRepository } from '../repositories';

describe('ListProductsService', () => {
    it('deve retornar produtos formatados corretamente', async () => {
        // Arrange
        const mockRepository = new InMemoryProductsRepository([
            { id: '1', name: 'Product 1', price: 10.99 },
            { id: '2', name: 'Product 2', price: 20.99 },
        ]);
        const listProductsService = new ListProductsService(mockRepository);

        // Act
        const result = await listProductsService.execute();

        // Assert
        expect(result).toEqual([
            { id: '1', name: 'Product 1', price: 10.99 },
            { id: '2', name: 'Product 2', price: 20.99 },
        ]);
        result.forEach(product => {
            expect(product).toHaveProperty('id');
            expect(product).toHaveProperty('name');
            expect(product).toHaveProperty('price');
        });
    });

    it('deve retornar uma lista vazia se o repositorio retornar uma lista vazia', async () => {
        // Arrange
        const mockRepository = new InMemoryProductsRepository([]);
        const listProductsService = new ListProductsService(mockRepository);

        // Act
        const result = await listProductsService.execute();

        // Assert
        expect(result).toEqual([]);
    });
});
