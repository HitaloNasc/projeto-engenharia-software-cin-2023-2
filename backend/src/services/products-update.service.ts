import { Repository } from '../repositories/repository';
import { Service } from './service';

export class UpdateProductsService implements Service {
    private repository: Repository;

    constructor(repository: Repository) {
        this.repository = repository;
    }

    async execute(id: string, data: any) {
        return await this.repository.update(id, data);
    }
}