import Router, { Request, Response } from 'express';
import { ListProductsController } from '../controllers';
import { ListProductsService } from '../services';
import { ProductsRepository } from '../repositories';

const router = Router();
const path = '/products';

const repository = new ProductsRepository();
const service = new ListProductsService(repository);
const controller = new ListProductsController(service);

// Lista de produtos
router.get('/', async (req: Request, res: Response) => {
    return await controller.execute(req, res);
});

export { router, path };
