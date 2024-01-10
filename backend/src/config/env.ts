export const env = {
    // DATABASE_URL: process.env.DATABASE_URL || 'mysql://root:root@localhost:3306/clean-app-model',
    SERVER_PORT: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 5555,
    // JWT_SECRET: process.env.JWT_SECRET || 'bestsecret',
};