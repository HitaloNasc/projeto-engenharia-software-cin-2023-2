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

    async findOne(id: string): Promise<Products | null> {
        return await ProductsModel.findOne({ id });
    }

    async delete(id: string): Promise<any> {
        console.log(id);
        return ProductsModel.deleteOne({ id })
            .then(result => result)
            .catch(error => {
                Logger.dir(error);
                throw error;
            });
    }

    async update(id: string, data: Products): Promise<Products | null> {
        try {
            const updatedProduct = await ProductsModel.findOneAndUpdate(
                { id },
                { $set: data },
                { new: true }, // Retorna o documento atualizado
            );

            return updatedProduct;
        } catch (error) {
            Logger.dir(error);
            throw error;
        }
    }
}
