import { Repository } from '../repository';
import { Products } from '../../models';

export class InMemoryProductsRepository implements Repository {
    private products: Products[];

    constructor(products: Products[] = []) {
        this.products = products || [];
    }

    async list() {
        return this.products;
    }

    async findOne(id: string): Promise<any> {
        return this.products.find(product => product.id === id);
    }

    async create(data: Products): Promise<any> {
        this.products.push(data);
        return data;
    }

    async delete(id: string): Promise<any> {
        const product = this.products.find(product => product.id === id);
        if (product) {
            this.products = this.products.filter(product => product.id !== id);
            return true;
        }

        return false;
    }

    async update(id: string, data: Products): Promise<any> {
        const product = this.products.find(product => product.id === id);
        if (product) {
            this.products = this.products.filter(product => product.id !== id);
            return this.products.push(data);
        }
    }
}
