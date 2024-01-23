import { InMemoryProductsRepository } from './products-in-memory.repository';

describe('InMemoryProductsRepository', () => {
    let repository: InMemoryProductsRepository;

    beforeEach(() => {
        repository = new InMemoryProductsRepository([
            { id: '1', name: 'Product 1', price: 10.99 },
            { id: '2', name: 'Product 2', price: 20.99 },
        ]);
    });

    it('should list products', async () => {
        const products = await repository.list();
        expect(products).toHaveLength(2);
    });

    it('should find one product by id', async () => {
        const product = await repository.findOne('1');
        expect(product).toEqual({ id: '1', name: 'Product 1', price: 10.99 });
    });

    it('should create a new product', async () => {
        const newProduct = { id: '3', name: 'Product 3', price: 30.99 };
        await repository.create(newProduct);

        const products = await repository.list();
        expect(products).toContainEqual(newProduct);
    });

    it('should delete a product by id', async () => {
        const result = await repository.delete('1');

        expect(result).toBeTruthy();
        const products = await repository.list();
        expect(products).toHaveLength(1);
        expect(products).not.toContainEqual({ id: '1', name: 'Product 1', price: 10.99 });
    });

    it('should not delete a non-existent product', async () => {
        const result = await repository.delete('non-existent-id');
        expect(result).toBeFalsy();
    });

    it('should update a product by id', async () => {
        const updatedProduct = { id: '1', name: 'Updated Product 1', price: 15.99 };
        await repository.update('1', updatedProduct);

        const products = await repository.list();
        expect(products).toContainEqual(updatedProduct);
    });

    it('should not update a non-existent product', async () => {
        const updatedProduct = { id: 'non-existent-id', name: 'Updated Product', price: 25.99 };
        const result = await repository.update('non-existent-id', updatedProduct);

        expect(result).toBeFalsy();
    });
});
