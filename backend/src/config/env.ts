export const env = {
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/dev',
    SERVER_PORT: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 5555,
};