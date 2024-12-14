import express from "express";
import categoriesController from "../controller/categories.controller";
import productController from "../controller/product.controller";

const router = express.Router();

router.get("/categories", categoriesController.findAll);
router.post("/categories", categoriesController.create);
router.get("/categories/:id", categoriesController.findOne);
router.put("/categories/:id", categoriesController.update);
router.delete("/categories/:id", categoriesController.delete);

router.get("/products", productController.findAll);
router.post("/products", productController.create);
router.get("/product/:id", productController.findOne);
router.put("/product/:id", productController.update);
router.delete("/product/:id", productController.delete);
router.get("/products/:categoryId", productController.getProductByCategory);

export default router;
