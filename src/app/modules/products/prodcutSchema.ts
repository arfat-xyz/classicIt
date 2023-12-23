import { Schema, model } from 'mongoose'
import { IProdcutModel, IProduct } from './productInterface'

export const productSchema = new Schema<IProduct, IProdcutModel>(
  {
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: [{ type: String, required: true }],
    size: [{ type: String, required: true }],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)
export const ProductModel = model<IProduct, IProdcutModel>(
  'Product',
  productSchema,
)
