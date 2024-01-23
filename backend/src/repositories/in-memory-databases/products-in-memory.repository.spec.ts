import { InMemoryProductsRepository } from './products-in-memory.repository';

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

describe('InMemoryProductsRepository', () => {
    let repository: InMemoryProductsRepository;

    beforeEach(() => {
        repository = new InMemoryProductsRepository(mockProducts);
    });

    it('should list products', async () => {
        const products = await repository.list();
        expect(products).toHaveLength(2);
    });

    it('should find one product by id', async () => {
        const product = await repository.findOne('1');
        expect(product).toEqual(mockProducts[0]);
    });

    it('should create a new product', async () => {
        const newProduct = {
            id: '3',
            name: 'Product 3',
            price: 30.99,
            description: 'Product 3 description',
            availability: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        await repository.create(newProduct);

        const products = await repository.list();
        expect(products).toContainEqual(newProduct);
    });

    it('should delete a product by id', async () => {
        const result = await repository.delete('1');

        expect(result).toBeTruthy();
        const products = await repository.list();
        expect(products).not.toContainEqual(mockProducts[0]);
    });

    it('should not delete a non-existent product', async () => {
        const result = await repository.delete('non-existent-id');
        expect(result).toBeFalsy();
    });

    it('should update a product by id', async () => {
        const updatedProduct = { ...mockProducts[0], id: '1', name: 'Updated Product 1', price: 15.99 };
        await repository.update('1', updatedProduct);

        const products = await repository.list();
        expect(products).toContainEqual(updatedProduct);
    });

    it('should not update a non-existent product', async () => {
        const updatedProduct = { ...mockProducts[0], id: 'non-existent-id', name: 'Updated Product', price: 25.99 };
        const result = await repository.update('non-existent-id', updatedProduct);

        expect(result).toBeFalsy();
    });
});
