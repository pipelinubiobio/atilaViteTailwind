"use strict";

import { AppDataSource } from "../config/configDb.js";
import Servicio from "../entity/servicio.entity.js";
import Convenio from "../entity/convenio.entity.js";

export async function crearServicioService(servicioData) {
  try {
    const servicioRepository = AppDataSource.getRepository(Servicio);
    const convenioRepository = AppDataSource.getRepository(Convenio);

    const {
      nombre,
      descripcion,
      procedimiento,
      precio_aproximado,
      activo,
      id_convenios = [],
    } = servicioData;

    const createErrorMessage = (dataInfo, message) => ({ dataInfo, message });

    const servicioExistente = await servicioRepository.findOne({
      where: { nombre },
    });

    if (servicioExistente) {
      return [null, createErrorMessage(null, "El servicio ya existe")];
    }

    let convenios = [];
    if (id_convenios.length > 0) {
      convenios = await convenioRepository.findByIds(id_convenios);
      if (convenios.length !== id_convenios.length) {
        return [null, createErrorMessage(null, "Uno o más convenios no existen")];
      }
    }

    const nuevoServicio = servicioRepository.create({
      nombre,
      descripcion,
      procedimiento,
      precio_aproximado,
      activo,
      convenios,
    });

    const servicioGuardado = await servicioRepository.save(nuevoServicio);
    return [servicioGuardado, null];

  } catch (error) {
    console.error("Error al crear el servicio:", error);
    return [null, "Error interno del servidor"];
  }
}

export async function getServiciosService() {
  try {
    const servicioRepository = AppDataSource.getRepository(Servicio);
    const servicios = await servicioRepository.find({
      relations: ["convenios"],
    });
    return [servicios, null];
  } catch (error) {
    console.error("Error al obtener los servicios:", error);
    return [null, "Error interno del servidor"];
  }
}

export async function getServicioByIdService(id_servicio) {
  try {
    const servicioRepository = AppDataSource.getRepository(Servicio);
    const servicio = await servicioRepository.findOne({
      where: { id_servicio },
      relations: ["convenios"],
    });

    if (!servicio) return [null, "Servicio no encontrado"];
    return [servicio, null];
  } catch (error) {
    console.error("Error al obtener el servicio:", error);
    return [null, "Error interno del servidor"];
  }
}

export async function updateServicioService(id_servicio, servicioData) {
  try {
    const servicioRepository = AppDataSource.getRepository(Servicio);
    const convenioRepository = AppDataSource.getRepository(Convenio);

    const servicio = await servicioRepository.findOne({
      where: { id_servicio },
      relations: ["convenios"],
    });

    if (!servicio) return [null, "Servicio no encontrado"];

    const {
      nombre,
      descripcion,
      procedimiento,
      precio_aproximado,
      activo,
      id_convenios = [],
    } = servicioData;

    let convenios = [];
    if (id_convenios.length > 0) {
      convenios = await convenioRepository.findByIds(id_convenios);
      if (convenios.length !== id_convenios.length) {
        return [null, "Uno o más convenios no existen"];
      }
    }

    Object.assign(servicio, {
      nombre,
      descripcion,
      procedimiento,
      precio_aproximado,
      activo,
      convenios,
    });

    const servicioActualizado = await servicioRepository.save(servicio);
    return [servicioActualizado, null];

  } catch (error) {
    console.error("Error al actualizar el servicio:", error);
    return [null, "Error interno del servidor"];
  }
}

export async function deleteServicioService(id_servicio) {
  try {
    const servicioRepository = AppDataSource.getRepository(Servicio);

    const servicio = await servicioRepository.findOne({
      where: { id_servicio },
    });

    if (!servicio) return [null, "Servicio no encontrado"];

    await servicioRepository.remove(servicio);
    return [servicio, null];
  } catch (error) {
    console.error("Error al eliminar el servicio:", error);
    return [null, "Error interno del servidor"];
  }
}
