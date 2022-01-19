import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";

const createProduct = new CreateProductController();

const router = Router();
router.post("/product", createProduct.handle)

export { router };