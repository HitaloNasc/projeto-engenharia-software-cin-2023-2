import { Express } from 'express';
import { path as productsPath, router as productsRouter } from './products.route';

const routes = (app: Express) => {
    app.use(productsPath, productsRouter);
};

export default routes;
