import express from "express";
import cors from "cors";
import healthRouter from "./routes/health.routes.js";
import productRouter from "./routes/product.routes.js";
import categoryRouter from "./routes/category.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", healthRouter);
app.use("/products", productRouter);

app.use("/categories", categoryRouter);
export default app;