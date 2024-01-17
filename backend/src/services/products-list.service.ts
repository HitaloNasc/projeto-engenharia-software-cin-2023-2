import { Repository } from '../repositories/repository';
import { Service } from './service';

export class ListProductsService implements Service {
    private repository: Repository;

    constructor(respository: Repository) {
        this.repository = respository;
    }

    async execute() {
        const result = await this.repository.list();

        // Exemplo de formatação de dados
        return result.map(product => {
            return {
                id: product.id,
                name: product.name,
                price: product.price
            };
        });
    }
}
