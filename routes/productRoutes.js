import express from 'express';
const router = express.Router();

import { getProducts, createProduct, getProductById, deleteProductById, updateProductById,
    getProductsByCategory, getProductsBySubCategory
} from '../controller/products.js'

router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProductById).delete(deleteProductById).patch(updateProductById);
router.route('/category/:category').get(getProductsByCategory);
router.route('/category/:category/:subCat').get(getProductsBySubCategory);

export default router;