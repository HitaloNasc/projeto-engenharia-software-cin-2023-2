import Router, { Request, Response } from 'express';
import { ProductsRepository } from '../repositories';
import { ListProductsService, CreateProductsService, DeleteProductsService, UpdateProductsService, GetByIdProductsService } from '../services';
import { ListProductsController, CreateProductsController, DeleteProductsController, UpdateProductsController } from '../controllers';

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

// Deleta um produto
const deleteService = new DeleteProductsService(repository);
const deleteController = new DeleteProductsController(deleteService);
//
router.delete('/:id', async (req: Request, res: Response) => {
    return await deleteController.execute(req, res);
});

// Atualiza um produto
const getByIdProductsService = new GetByIdProductsService(repository);
const updateService = new UpdateProductsService(repository, getByIdProductsService);
const updateController = new UpdateProductsController(updateService);
//

router.put('/:id', async (req: Request, res: Response) => {
    return await updateController.execute(req, res);
});

export { router, path };
