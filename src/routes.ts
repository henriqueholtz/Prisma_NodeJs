import { Router } from "express";
import { CreateCategoryController } from "./controllers/Categories/CreateCategoryController";
import { GetCategoriesController } from "./controllers/Categories/GetCategoriesController";
import { CreateProductController } from "./controllers/Products/CreateProductController";
import { CreateProductWithCategoryController } from "./controllers/Products/CreateProductWithCategoryController";
import { GetProductByIdController } from "./controllers/Products/GetProductByIdController";
import { CreateProductCategoryController } from "./controllers/_Relations/CreateProductCategoryController";

/* Get Controllers*/
const getCategories = new GetCategoriesController();
const getProductById = new GetProductByIdController();

/* Create Controllers*/
const createProduct = new CreateProductController();
const createProductWithCategory = new CreateProductWithCategoryController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();

const router = Router();
/* GET */
router.get("/categories", getCategories.handle)
router.get("/product/:id", getProductById.handle)

/* POST */
router.post("/product", createProduct.handle)
router.post("/productWithCategory", createProductWithCategory.handle)
router.post("/category", createCategory.handle)
router.post("/productCategory", createProductCategory.handle)

export { router };