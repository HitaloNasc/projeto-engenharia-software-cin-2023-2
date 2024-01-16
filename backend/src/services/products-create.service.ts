import { Repository } from '../repositories/repository';
import { Service } from './service';
import { Products } from '../models';
import { v4 as uuidv4 } from 'uuid';

export class CreateProductsService implements Service {
    private repository: Repository;

    constructor(respository: Repository) {
        this.repository = respository;
    }

    async execute(data: Products) {
        const id = uuidv4();
        return await this.repository.create({ id, ...data });
    }
}
