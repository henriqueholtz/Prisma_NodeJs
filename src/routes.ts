import { Router } from "express";
import { CreateCategoryController } from "./controllers/Categories/CreateCategoryController";
import { CreateProductController } from "./controllers/Products/CreateProductController";

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();

const router = Router();
router.post("/product", createProduct.handle)
router.post("/category", createCategory.handle)

export { router };