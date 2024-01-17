import { ListProductsService } from '.';
import { Repository } from '../repositories';

class MockRepository implements Repository {

    async create(): Promise<any> {
        throw Error('Method not implemented')
    }

    async list() {
        return [
            { id: 1, name: 'Product 1', price: 10.99 },
            { id: 2, name: 'Product 2', price: 20.99 },
        ];
    }
}

describe('ListProductsService', () => {
    it('deve retornar produtos formatados corretamente', async () => {
        // Arrange
        const mockRepository = new MockRepository();
        const listProductsService = new ListProductsService(mockRepository);

        // Act
        const result = await listProductsService.execute();

        // Assert
        expect(result).toEqual([
            { id: 1, name: 'Product 1', price: 10.99 },
            { id: 2, name: 'Product 2', price: 20.99 },
        ]);
        result.forEach(product => {
            expect(product).toHaveProperty('id')
            expect(product).toHaveProperty('name')
            expect(product).toHaveProperty('price')
        })
    });
});
