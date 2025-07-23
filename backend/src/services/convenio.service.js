"use strict";

import { AppDataSource } from "../config/configDb.js";
import Convenio from "../entity/convenio.entity.js";
import Servicio from "../entity/servicio.entity.js";

export async function crearConvenioService(convenioData) {
  try {
    const convenioRepository = AppDataSource.getRepository(Convenio);
    const servicioRepository = AppDataSource.getRepository(Servicio);

    const {
      nombre,
      descuento_porcentual,
      activo,
      id_servicios = [], // opcional
    } = convenioData;

    const createErrorMessage = (dataInfo, message) => ({ dataInfo, message });

    const convenioExistente = await convenioRepository.findOne({
      where: { nombre },
    });

    if (convenioExistente) {
      return [null, createErrorMessage(null, "El convenio ya existe")];
    }

    let servicios = [];
    if (id_servicios.length > 0) {
      servicios = await servicioRepository.findByIds(id_servicios);
      if (servicios.length !== id_servicios.length) {
        return [null, createErrorMessage(null, "Uno o más servicios no existen")];
      }
    }

    const nuevoConvenio = convenioRepository.create({
      nombre,
      descuento_porcentual,
      activo,
      servicios,
    });

    const convenioGuardado = await convenioRepository.save(nuevoConvenio);
    return [convenioGuardado, null];

  } catch (error) {
    console.error("Error al crear el convenio:", error);
    return [null, "Error interno del servidor"];
  }
}

export async function getConveniosService() {
  try {
    const convenioRepository = AppDataSource.getRepository(Convenio);
    const convenios = await convenioRepository.find({
      relations: ["servicios"],
    });
    return [convenios, null];
  } catch (error) {
    console.error("Error al obtener los convenios:", error);
    return [null, "Error interno del servidor"];
  }
}

export async function getConvenioByIdService(id_convenio) {
  try {
    const convenioRepository = AppDataSource.getRepository(Convenio);
    const convenio = await convenioRepository.findOne({
      where: { id_convenio },
      relations: ["servicios"],
    });

    if (!convenio) return [null, "Convenio no encontrado"];
    return [convenio, null];
  } catch (error) {
    console.error("Error al obtener el convenio:", error);
    return [null, "Error interno del servidor"];
  }
}

export async function updateConvenioService(id_convenio, convenioData) {
  try {
    const convenioRepository = AppDataSource.getRepository(Convenio);
    const servicioRepository = AppDataSource.getRepository(Servicio);

    const convenio = await convenioRepository.findOne({
      where: { id_convenio },
      relations: ["servicios"],
    });

    if (!convenio) return [null, "Convenio no encontrado"];

    const {
      nombre,
      descuento_porcentual,
      activo,
      id_servicios = [],
    } = convenioData;

    let servicios = [];
    if (id_servicios.length > 0) {
      servicios = await servicioRepository.findByIds(id_servicios);
      if (servicios.length !== id_servicios.length) {
        return [null, "Uno o más servicios no existen"];
      }
    }

    Object.assign(convenio, {
      nombre,
      descuento_porcentual,
      activo,
      servicios,
    });

    const convenioActualizado = await convenioRepository.save(convenio);
    return [convenioActualizado, null];

  } catch (error) {
    console.error("Error al actualizar el convenio:", error);
    return [null, "Error interno del servidor"];
  }
}

export async function deleteConvenioService(id_convenio) {
  try {
    const convenioRepository = AppDataSource.getRepository(Convenio);

    const convenio = await convenioRepository.findOne({
      where: { id_convenio },
    });

    if (!convenio) return [null, "Convenio no encontrado"];

    await convenioRepository.remove(convenio);
    return [convenio, null];
  } catch (error) {
    console.error("Error al eliminar el convenio:", error);
    return [null, "Error interno del servidor"];
  }
}
