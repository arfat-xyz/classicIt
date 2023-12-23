import { Router } from 'express'
import { ProductRoutes } from './modules/products/productRoutes'

const router = Router()
const modulesRoute = [
  {
    path: '/product',
    route: ProductRoutes,
  },
]
modulesRoute.filter(mR => router.use(mR.path, mR.route))
export default router
