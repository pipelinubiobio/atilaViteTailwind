"use strict";

import {
  crearConvenioService,
  getConveniosService,
  getConvenioByIdService,
  updateConvenioService,
  deleteConvenioService
} from "../services/convenio.service.js";

import {
  convenioBodyValidation
} from "../validations/convenio.validation.js";

import {
  handleErrorServer,
  handleErrorClient,
  handleSuccess
} from "../handlers/responseHandlers.js";

export async function crearConvenio(req, res) {
  try {
    const { body } = req;
    const { error } = convenioBodyValidation.validate(body);

    if (error) {
      return handleErrorClient(res, 400, "Error de validación", error.message);
    }

    const [convenio, errorConvenio] = await crearConvenioService(body);

    if (errorConvenio) {
      return handleErrorClient(res, 400, "Error al registrar Convenio", errorConvenio);
    }

    handleSuccess(res, 201, "Convenio creado exitosamente", convenio);
  } catch (error) {
    handleErrorServer(res, 500, "Error del Servidor", error.message);
  }
}

export async function getConvenios(req, res) {
  try {
    const [convenios, errorConvenios] = await getConveniosService();

    if (errorConvenios) {
      return handleErrorClient(res, 404, "Error al obtener convenios", errorConvenios);
    }

    convenios.length === 0
      ? handleSuccess(res, 204)
      : handleSuccess(res, 200, "Convenios encontrados", convenios);
  } catch (error) {
    handleErrorServer(res, 500, "Error del Servidor", error.message);
  }
}

export async function getConvenioPorId(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return handleErrorClient(res, 400, "Error de validación", "El ID es requerido");
    }

    const [convenio, errorConvenio] = await getConvenioByIdService(id);

    if (errorConvenio) {
      return handleErrorClient(res, 404, "Convenio no encontrado", errorConvenio);
    }

    handleSuccess(res, 200, "Convenio encontrado", convenio);
  } catch (error) {
    handleErrorServer(res, 500, "Error del Servidor", error.message);
  }
}

export async function updateConvenio(req, res) {
  try {
    const { id } = req.params;
    const { body } = req;

    if (!id) {
      return handleErrorClient(res, 400, "Error de validación", "El ID es requerido");
    }

    const { error } = convenioBodyValidation.validate(body);

    if (error) {
      return handleErrorClient(res, 400, "Error de validación", error.message);
    }

    const [convenio, errorConvenio] = await updateConvenioService(id, body);

    if (errorConvenio) {
      return handleErrorClient(res, 404, "Error al actualizar convenio", errorConvenio);
    }

    handleSuccess(res, 200, "Convenio actualizado", convenio);
  } catch (error) {
    handleErrorServer(res, 500, "Error del Servidor", error.message);
  }
}

export async function deleteConvenio(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return handleErrorClient(res, 400, "Error de validación", "El ID es requerido");
    }

    const [convenio, errorConvenio] = await deleteConvenioService(id);

    if (errorConvenio) {
      return handleErrorClient(res, 404, "Error al eliminar convenio", errorConvenio);
    }

    handleSuccess(res, 200, "Convenio eliminado", convenio);
  } catch (error) {
    handleErrorServer(res, 500, "Error del Servidor", error.message);
  }
}
