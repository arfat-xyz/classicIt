import { Router } from 'express'
import zodValidateRequest from '../../middlewares/zodValidateRequest'
import { ProductController } from './productController'
import { productZodSchema } from './productZodValidation'

const router = Router()

router.post(
  '/',
  zodValidateRequest(productZodSchema.createProduct),
  ProductController.createProduct,
)
router.get('/', ProductController.getAllProducts)
router.get('/:id', ProductController.getSingleProduct)
// router.post('/comment/:id', ProductController.postComment)

export const ProductRoutes = router
