import mongoose, { Schema } from 'mongoose';

export interface Products {
    id?: string;
    name: string;
    price: number;
    description: string;
    availability?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

const ProductsSchema: Schema = new Schema({
    id: { type: String },
    name: { type: String, required: true, require: true },
    price: { type: Number, required: true, require: true },
    description: { type: String, required: true, require: true },
    availability: { type: Boolean, default: true },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});

export const ProductsModel = mongoose.model<Products>('Products', ProductsSchema);
