import { Router } from 'express'
import { 
    createProducts, 
    deleteProduct, 
    getProduct, 
    getProducts, 
    updateProduct 
} from '../Controllers/productControllers.js'

const router = Router();

// Lista todos los productos
router.get('/product', getProducts)
// Lista un solo producto
router.get('/product/:id', getProduct)
// Añade un producto a la base de datos
router.post('/product', createProducts)
// Edita un producto 
router.put('/product/:id', updateProduct)
// Elimina un producto
router.delete('/product/:id', deleteProduct)

export default router;