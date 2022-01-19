import { Router } from "express";
import { CreateCategoryController } from "./controllers/Categories/CreateCategoryController";
import { CreateProductController } from "./controllers/Products/CreateProductController";
import { CreateProductCategoryController } from "./controllers/_Relations/CreateProductCategoryController";

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();

const router = Router();
router.post("/product", createProduct.handle)
router.post("/category", createCategory.handle)
router.post("/productCategory", createProductCategory.handle)

export { router };