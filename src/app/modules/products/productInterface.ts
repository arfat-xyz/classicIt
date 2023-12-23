import { Model } from 'mongoose'
export type IProduct = {
  image: string
  productName: string
  description: string
  color: string[]
  size: string[]
  price: number
}
export type IProdcutModel = Model<IProduct, Record<string, unknown>>
