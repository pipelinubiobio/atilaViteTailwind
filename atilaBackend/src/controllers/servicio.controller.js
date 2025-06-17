"use strict";
import {
  getServiciosService,
  createServicioService,
  updateServicioService,
  deleteServicioService
} from "../services/servicio.service.js";

import { servicioBodyValidation, servicioParamValidation } from "../validations/servicio.validation.js";
import {
  handleErrorClient,
  handleErrorServer,
  handleSuccess,
} from "../handlers/responseHandlers.js";

export async function getServicios(req, res) {
  try {
    const [servicios, error] = await getServiciosService();
    if (error) return handleErrorClient(res, 404, error);
    return handleSuccess(res, 200, "Servicios encontrados", servicios);
  } catch (error) {
    handleErrorServer(res, 500, error.message);
  }
}

export async function createServicio(req, res) {
  try {
    const { error } = servicioBodyValidation.validate(req.body);
    if (error) return handleErrorClient(res, 400, "Validación fallida", error.message);

    const [nuevo, err] = await createServicioService(req.body);
    if (err) return handleErrorClient(res, 400, err);

    return handleSuccess(res, 201, "Servicio creado exitosamente", nuevo);
  } catch (error) {
    handleErrorServer(res, 500, error.message);
  }
}

export async function updateServicio(req, res) {
  try {
    const { id } = req.params;

    const { error: paramError } = servicioParamValidation.validate({ id });
    if (paramError) return handleErrorClient(res, 400, paramError.message);

    const { error: bodyError } = servicioBodyValidation.validate(req.body);
    if (bodyError) return handleErrorClient(res, 400, bodyError.message);

    const [servicio, err] = await updateServicioService(parseInt(id), req.body);
    if (err) return handleErrorClient(res, 404, err);

    return handleSuccess(res, 200, "Servicio actualizado correctamente", servicio);
  } catch (error) {
    handleErrorServer(res, 500, error.message);
  }
}

export async function deleteServicio(req, res) {
  try {
    const { id } = req.params;
    const { error } = servicioParamValidation.validate({ id });
    if (error) return handleErrorClient(res, 400, error.message);

    const [eliminado, err] = await deleteServicioService(parseInt(id));
    if (err) return handleErrorClient(res, 404, err);

    return handleSuccess(res, 200, "Servicio eliminado correctamente", eliminado);
  } catch (error) {
    handleErrorServer(res, 500, error.message);
  }
}
