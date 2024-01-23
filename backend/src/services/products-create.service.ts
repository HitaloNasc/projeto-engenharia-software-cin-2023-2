import { Repository } from '../repositories/repository';
import { Service } from './service';
import { Products } from '../models';
import { v4 as uuidv4 } from 'uuid';

export class CreateProductsService implements Service {
    private repository: Repository;

    constructor(respository: Repository) {
        this.repository = respository;
    }

    private format(id: string, data: Products) {
        return {
            id: id,
            name: data.name,
            price: data.price,
            description: data.description,
            availability: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
    }

    async execute(data: Products) {
        const id = uuidv4();

        const create = this.format(id, data);

        return await this.repository.create(create);
    }
}
