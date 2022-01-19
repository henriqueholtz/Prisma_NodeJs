import { Router } from "express";
import { CreateCategoryController } from "./controllers/Categories/CreateCategoryController";
import { GetCategoriesController } from "./controllers/Categories/GetCategoriesController";
import { CreateProductController } from "./controllers/Products/CreateProductController";
import { CreateProductCategoryController } from "./controllers/_Relations/CreateProductCategoryController";

/* Get Controllers*/
const getCategories = new GetCategoriesController();

/* Create Controllers*/
const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();

const router = Router();
/* GET */
router.get("/categories", getCategories.handle)

/* POST */
router.post("/product", createProduct.handle)
router.post("/category", createCategory.handle)
router.post("/productCategory", createProductCategory.handle)

export { router };