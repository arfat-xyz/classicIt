import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/cacheAsync'
import sendResponse from '../../../shared/sentResponse'
import { IProduct } from './productInterface'
import { ProductService } from './productService'

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const payload: IProduct = req.body
  const result = await ProductService.createProduct(payload)
  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Produxt created successfully.`,
    data: result,
  })
})
const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProducts()
  sendResponse<IProduct[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    meta: {
      total: result?.length,
    },
    message: `Product found.`,
    data: result,
  })
})
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ProductService.getSingleProduct(id)
  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Product found.`,
    data: result,
  })
})

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  //   postComment,
}
