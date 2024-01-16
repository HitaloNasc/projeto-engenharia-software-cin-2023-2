import mongoose, { Schema, Document } from 'mongoose';

export interface Products extends Document {
    id?: string;
    name: string;
    price: number;
}

const ProductsSchema: Schema = new Schema({
    id: { type: String},
    name: { type: String, required: true, require: true },
    price: { type: Number, required: true, require: true },
});

export const ProductsModel = mongoose.model<Products>('Products', ProductsSchema);
