import { ProductsModel, Products } from '../models';
import { Logger } from '../helpers';

export class ProductsRepository {
    async create(data: Products): Promise<Products> {
        return await ProductsModel.create(data)
            .then((data: Products) => {
                return data;
            })
            .catch((error: Error) => {
                Logger.dir(error);
                throw error;
            });
    }

    async list(): Promise<Products[]> {
        return await ProductsModel.find();
    }
}
