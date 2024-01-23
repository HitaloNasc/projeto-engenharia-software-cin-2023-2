import { ListProductsService } from '.';
import { InMemoryProductsRepository } from '../repositories';

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

describe('ListProductsService', () => {
    it('deve retornar produtos formatados corretamente', async () => {
        // Arrange
        const mockRepository = new InMemoryProductsRepository(mockProducts);
        const listProductsService = new ListProductsService(mockRepository);

        // Act
        const result = await listProductsService.execute();

        // Assert
        expect(result).toEqual(mockProducts);
        result.forEach(product => {
            expect(product).toHaveProperty('id');
            expect(product).toHaveProperty('name');
            expect(product).toHaveProperty('price');
            expect(product).toHaveProperty('description');
            expect(product).toHaveProperty('availability');
            expect(product).toHaveProperty('createdAt');
            expect(product).toHaveProperty('updatedAt');
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
