"use strict";

import { Router } from "express";
import {
    crearConvenio,
    getConvenios,
    getConvenioPorId,
    updateConvenio,
    deleteConvenio
} from "../controllers/convenio.controller.js";

import { authenticateJwt } from "../middlewares/authentication.middleware.js";
import { isAdmin } from "../middlewares/authorization.middleware.js";

const router = Router();

router
.post("/crearConvenio", authenticateJwt, isAdmin, crearConvenio)               // http://localhost:3000/api/convenio/crearConvenio POST
.get("/getConvenios", getConvenios)                                            // http://localhost:3000/api/convenio/getConvenios GET
.get("/getConvenioById/:id", getConvenioPorId)                                  // http://localhost:3000/api/convenio/getConvenioById/:id GET
.put("/updateConvenio/:id", authenticateJwt, isAdmin, updateConvenio)         // http://localhost:3000/api/convenio/updateConvenio/:id PUT
.delete("/deleteConvenio/:id", authenticateJwt, isAdmin, deleteConvenio);     // http://localhost:3000/api/convenio/deleteConvenio/:id DELETE

export default router;
