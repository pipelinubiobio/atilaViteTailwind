"use strict";
import { Router } from "express";
import { authenticateJwt } from "../middlewares/authentication.middleware.js";
import { isAdmin } from "../middlewares/authorization.middleware.js";

import {
  getServicios,
  createServicio,
  updateServicio,
  deleteServicio,
} from "../controllers/servicio.controller.js";

const router = Router();

router
  .use(authenticateJwt)
  .use(isAdmin);

router
  .get("/", getServicios)
  .post("/", createServicio)
  .put("/:id", updateServicio)
  .delete("/:id", deleteServicio);

export default router;
