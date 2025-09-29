import { createNameController } from "../controllers/CreateNameController";
import { getAllNamesController } from "../controllers/getAllNamesControler";
import { validateCreateName } from "../middlewares/createNameMiddlewarer";
import { Router } from "express";

const nameRouter = Router();

nameRouter.post("/add/name", validateCreateName, createNameController);
nameRouter.get("/view/names", getAllNamesController);

export default nameRouter;