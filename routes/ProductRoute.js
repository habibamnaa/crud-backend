import express from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
    return res.status(200).json({
      title: "Express Testing",
      message: "The app is working properly!",
    });
  });
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', saveProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;