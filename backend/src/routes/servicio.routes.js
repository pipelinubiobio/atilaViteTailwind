"use strict";

import { Router } from "express";
import {
    crearServicio,
    getServicios,
    getServicioPorId,
    updateServicio,
    deleteServicio
} from "../controllers/servicio.controller.js";

import { authenticateJwt } from "../middlewares/authentication.middleware.js";
import { isAdmin } from "../middlewares/authorization.middleware.js";

const router = Router();

router
.post("/crearServicio", authenticateJwt, isAdmin, crearServicio)                // http://localhost:3000/api/servicio/crearServicio POST
.get("/getServicios", getServicios)                                             // http://localhost:3000/api/servicio/getServicios GET
.get("/getServicioById/:id", getServicioPorId)                                   // http://localhost:3000/api/servicio/getServicioById/:id GET
.put("/updateServicio/:id", authenticateJwt, isAdmin, updateServicio)          // http://localhost:3000/api/servicio/updateServicio/:id PUT
.delete("/deleteServicio/:id", authenticateJwt, isAdmin, deleteServicio);      // http://localhost:3000/api/servicio/deleteServicio/:id DELETE

export default router;
