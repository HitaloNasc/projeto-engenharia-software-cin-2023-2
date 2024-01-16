import mongoose from 'mongoose';
import { Logger } from '../helpers';

type TInput = {
    urlConnection: string;
};
export const connect = ({ urlConnection }: TInput) => {
    const connect = () => {
        mongoose
            .connect(urlConnection)
            .then(() => {
                return Logger.log(`Database connection has been established successfully`);
            })
            .catch((error: any) => {
                Logger.log('Error connecting to database: ' + error);
                return process.exit(1);
            });
    };
    connect();

    mongoose.connection.on('disconnected', connect);
};
