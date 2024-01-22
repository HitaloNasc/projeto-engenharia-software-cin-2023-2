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

    async delete(id: String): Promise<any> {
        console.log(id);
        return ProductsModel.deleteOne({id})
            .then(result => result)
            .catch(error => {
                Logger.dir(error);
                throw error;
            });
    }
}
