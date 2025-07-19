import express from "express";
import { upload } from "../configs/multer.js";
import authSeller from "../middlewares/authSeller.js";
import { addProduct, changeStock, productById, ProductList } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post('/add',upload.array(["images"]),authSeller, addProduct);
productRouter.get('/list', ProductList)
productRouter.get('/id', productById)
// productRouter.get('/stock', authSeller, changeStock)
productRouter.post('/stock', authSeller, changeStock)


export default productRouter;