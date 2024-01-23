import mongoose, { Schema } from 'mongoose';

export interface Products {
    id?: string;
    name: string;
    price: number;
}

const ProductsSchema: Schema = new Schema({
    id: { type: String },
    name: { type: String, required: true, require: true },
    price: { type: Number, required: true, require: true },
});

export const ProductsModel = mongoose.model<Products>('Products', ProductsSchema);
