import { z } from 'zod'

const createProduct = z.object({
  body: z.object({
    productName: z.string({
      required_error: 'Product name is required',
    }),
    image: z.string({
      required_error: 'Image is required',
    }),
    price: z.number({
      required_error: 'Price is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    color: z
      .string({
        required_error: 'Color is required',
      })
      .array(),
    size: z
      .string({
        required_error: 'Size is required',
      })
      .array(),
  }),
})

export const productZodSchema = { createProduct }
