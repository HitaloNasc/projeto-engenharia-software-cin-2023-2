import Router, { Request, Response } from 'express';
import { ProductsRepository } from '../repositories';
import { ListProductsService, CreateProductsService } from '../services';
import { ListProductsController, CreateProductsController } from '../controllers';

const router = Router();
const path = '/products';

const repository = new ProductsRepository();

// Lista de produtos
const listService = new ListProductsService(repository);
const listController = new ListProductsController(listService);
//
router.get('/', async (req: Request, res: Response) => {
    return await listController.execute(req, res);
});

// Cria um novo produto
const createService = new CreateProductsService(repository);
const createController = new CreateProductsController(createService);
//
router.post('/', async (req: Request, res: Response) => {
    return await createController.execute(req, res);
});

export { router, path };
