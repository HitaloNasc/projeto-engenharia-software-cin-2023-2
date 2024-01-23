import { Repository } from '../repositories/repository';
import { Service } from './service';

export class GetByIdProductsService implements Service {
    private repository: Repository;

    constructor(respository: Repository) {
        this.repository = respository;
    }

    async execute(id: string) {
        const product = await this.repository.findOne(id);

        if (!product) {
            throw new Error('Product not found');
        }

        return {
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            availability: product.availability,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
        };
    }
}
