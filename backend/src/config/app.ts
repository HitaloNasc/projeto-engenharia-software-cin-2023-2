import express from 'express';
// import { bodyParser, contentType, notFoundHandler, handlerError } from '../middleware';
import cors from 'cors';
import morgan from 'morgan'
import routes from '../routes';
import { connect } from './database';
import { env } from './env';

const app = express();

// app.use(bodyParser);
// app.use(contentType);
app.use(morgan('combined'))
app.use(express.json());
app.use(cors());
connect({ urlConnection: env.DATABASE_URL });
routes(app);
// app.use(notFoundHandler);
// app.use(handlerError);

export default app;
