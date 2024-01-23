import { Repository } from '../repositories/repository';
import { Service } from './service';

export class DeleteProductsService implements Service {
    private repository: Repository;

    constructor(respository: Repository) {
        this.repository = respository;
    }
    
    async execute(id: string) {        
        return await this.repository.delete(id);
    }
}
