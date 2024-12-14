import express from "express";

import uploadMiddleware from "../middlewares/upload.middleware";
import uploadController from "../controllers/upload.controller";
import productsController from "../controllers/products.controller";
import categoryController from "../controllers/category.controller";

const router = express.Router();

router.get("/products", productsController.findAll);
router.post("/products", productsController.create);
router.get("/product/:id", productsController.findOne);
router.get("/products/:categoryId", productsController.getProductByCategory);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

router.get("/categories", categoryController.getAllCategory);
router.get("/category/:id", categoryController.getOneCategory);
router.post("/categories",categoryController.createCategory);
router.put("/category/:id",categoryController.editCategory);
router.delete("/category/:id", categoryController.deleteCategory);


router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);

export default router;
