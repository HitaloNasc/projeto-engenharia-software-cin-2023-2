import 'dotenv/config';
import app from './config/app';
import { Logger } from './helpers';
import { env } from './config/env';

process.on('SIGTERM', () => {
    process.exit();
});

app.listen(env.SERVER_PORT, () => {
    Logger.initial(`Server is running on port ${env.SERVER_PORT}`);
});
