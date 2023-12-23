import { ProductModel } from './prodcutSchema'
import { IProduct } from './productInterface'

const createProduct = async (payload: IProduct) => {
  const result = await ProductModel.create(payload)
  return result
}
const getAllProducts = async (): Promise<IProduct[]> => {
  const result = await ProductModel.find()
  return result
}
const getSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await ProductModel.findById(id)
  return result
}
export const ProductService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
}
