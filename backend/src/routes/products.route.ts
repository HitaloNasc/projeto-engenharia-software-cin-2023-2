import Router, { Request, Response } from 'express';
import { handle } from '../helpers';
import { ProductsRepository } from '../repositories';
import {
    ListProductsService,
    CreateProductsService,
    DeleteProductsService,
    UpdateProductsService,
    GetByIdProductsService,
    SetAvailableProductsService,
    SetUnavailableProductsService,
} from '../services';
import {
    ListProductsController,
    CreateProductsController,
    DeleteProductsController,
    UpdateProductsController,
    SetAvailableProductsController,
    SetUnavailableProductsController,
    GetByIdProductsController,
} from '../controllers';

const router = Router();
const path = '/products';

const repository = new ProductsRepository();

// Lista de produtos
const listService = new ListProductsService(repository);
const listController = new ListProductsController(listService);
//
router.get(
    '/',
    handle(async (req: Request, res: Response) => {
        return await listController.execute(req, res);
    }),
);

// Retorna um produto pelo id
const getByIdService = new GetByIdProductsService(repository);
const getByIdController = new GetByIdProductsController(getByIdService);
//
router.get(
    '/:id',
    handle(async (req: Request, res: Response) => {
        return await getByIdController.execute(req, res);
    }),
);

// Cria um novo produto
const createService = new CreateProductsService(repository);
const createController = new CreateProductsController(createService);
//
router.post(
    '/',
    handle(async (req: Request, res: Response) => {
        return await createController.execute(req, res);
    }),
);

// Deleta um produto
const deleteService = new DeleteProductsService(repository);
const deleteController = new DeleteProductsController(deleteService);
//
router.delete(
    '/:id',
    handle(async (req: Request, res: Response) => {
        return await deleteController.execute(req, res);
    }),
);

// Atualiza um produto
const updateService = new UpdateProductsService(repository, getByIdService);
const updateController = new UpdateProductsController(updateService);
//
router.put(
    '/:id',
    handle(async (req: Request, res: Response) => {
        return await updateController.execute(req, res);
    }),
);

// Torna um produto disponível
const setAvailableService = new SetAvailableProductsService(repository, getByIdService);
const setAvailableController = new SetAvailableProductsController(setAvailableService);
//
router.put(
    '/:id/available',
    handle(async (req: Request, res: Response) => {
        return await setAvailableController.execute(req, res);
    }),
);

// Torna um produto indisponível
const setUnavailableService = new SetUnavailableProductsService(repository, getByIdService);
const setUnavailableController = new SetUnavailableProductsController(setUnavailableService);
//
router.put(
    '/:id/unavailable',
    handle(async (req: Request, res: Response) => {
        return await setUnavailableController.execute(req, res);
    }),
);

export { router, path };
