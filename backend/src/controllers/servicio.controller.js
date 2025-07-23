"use strict";

import {
  crearServicioService,
  getServiciosService,
  getServicioByIdService,
  updateServicioService,
  deleteServicioService
} from "../services/servicio.service.js";

import {
  servicioBodyValidation
} from "../validations/servicio.validation.js";

import {
  handleErrorServer,
  handleErrorClient,
  handleSuccess
} from "../handlers/responseHandlers.js";

export async function crearServicio(req, res) {
  try {
    const { body } = req;
    const { error } = servicioBodyValidation.validate(body);

    if (error) {
      return handleErrorClient(res, 400, "Error de validación", error.message);
    }

    const [servicio, errorServicio] = await crearServicioService(body);

    if (errorServicio) {
      return handleErrorClient(res, 400, "Error al registrar Servicio", errorServicio);
    }

    handleSuccess(res, 201, "Servicio creado exitosamente", servicio);
  } catch (error) {
    handleErrorServer(res, 500, "Error del Servidor", error.message);
  }
}

export async function getServicios(req, res) {
  try {
    const [servicios, errorServicios] = await getServiciosService();

    if (errorServicios) {
      return handleErrorClient(res, 404, "Error al obtener servicios", errorServicios);
    }

    servicios.length === 0
      ? handleSuccess(res, 204)
      : handleSuccess(res, 200, "Servicios encontrados", servicios);
  } catch (error) {
    handleErrorServer(res, 500, "Error del Servidor", error.message);
  }
}

export async function getServicioPorId(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return handleErrorClient(res, 400, "Error de validación", "El ID es requerido");
    }

    const [servicio, errorServicio] = await getServicioByIdService(id);

    if (errorServicio) {
      return handleErrorClient(res, 404, "Servicio no encontrado", errorServicio);
    }

    handleSuccess(res, 200, "Servicio encontrado", servicio);
  } catch (error) {
    handleErrorServer(res, 500, "Error del Servidor", error.message);
  }
}

export async function updateServicio(req, res) {
  try {
    const { id } = req.params;
    const { body } = req;

    if (!id) {
      return handleErrorClient(res, 400, "Error de validación", "El ID es requerido");
    }

    const { error } = servicioBodyValidation.validate(body);

    if (error) {
      return handleErrorClient(res, 400, "Error de validación", error.message);
    }

    const [servicio, errorServicio] = await updateServicioService(id, body);

    if (errorServicio) {
      return handleErrorClient(res, 404, "Error al actualizar servicio", errorServicio);
    }

    handleSuccess(res, 200, "Servicio actualizado", servicio);
  } catch (error) {
    handleErrorServer(res, 500, "Error del Servidor", error.message);
  }
}

export async function deleteServicio(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return handleErrorClient(res, 400, "Error de validación", "El ID es requerido");
    }

    const [servicio, errorServicio] = await deleteServicioService(id);

    if (errorServicio) {
      return handleErrorClient(res, 404, "Error al eliminar servicio", errorServicio);
    }

    handleSuccess(res, 200, "Servicio eliminado", servicio);
  } catch (error) {
    handleErrorServer(res, 500, "Error del Servidor", error.message);
  }
}
