import { Repository } from '../repositories/repository';
import { Service } from './service';

export class SetAvailableProductsService implements Service {
    private repository: Repository;
    private getById: Service;

    constructor(repository: Repository, getById: Service) {
        this.repository = repository;
        this.getById = getById;
    }

    private async validate(id: string) {
        const product = await this.getById.execute(id);

        if (product.availability) {
            throw new Error('Product already available');
        }
    }

    private async format(id: string) {
        const product = await this.getById.execute(id);

        return {
            id: id,
            name: product.name,
            price: product.price,
            description: product.description,
            availability: true,
            createdAt: product.createdAt,
            updatedAt: new Date().toISOString(),
        };
    }

    async execute(id: string) {
        const update = await this.format(id);

        await this.validate(id);

        await this.repository.update(id, update);

        return await this.getById.execute(id);
    }
}
