import { Repository } from '../repositories/repository';
import { Service } from './service';
import { Products } from '../models';

export class UpdateProductsService implements Service {
    private repository: Repository;
    private getById: Service;

    constructor(repository: Repository, getById: Service) {
        this.repository = repository;
        this.getById = getById;
    }

    private async format(id: string, data: Products) {
        const product = await this.getById.execute(id);

        return {
            id: id,
            name: data.name || product.name,
            price: data.price || product.price,
        };
    }

    async execute(id: string, data: Products) {
        const update = await this.format(id, data);

        await this.repository.update(id, update);

        return await this.getById.execute(id);
    }
}
