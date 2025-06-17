"use strict";
import Servicio from "../entity/servicio.entity.js";
import { AppDataSource } from "../config/configDb.js";

const servicioRepo = AppDataSource.getRepository(Servicio);

export async function getServiciosService() {
  try {
    const servicios = await servicioRepo.find();
    return [servicios, null];
  } catch (error) {
    return [null, "Error al obtener los servicios"];
  }
}

export async function createServicioService(data) {
  try {
    const nuevo = servicioRepo.create(data);
    await servicioRepo.save(nuevo);
    return [nuevo, null];
  } catch (error) {
    return [null, "Error al crear el servicio"];
  }
}

export async function updateServicioService(id, data) {
  try {
    const servicio = await servicioRepo.findOneBy({ id });
    if (!servicio) return [null, "Servicio no encontrado"];

    servicioRepo.merge(servicio, data);
    await servicioRepo.save(servicio);
    return [servicio, null];
  } catch (error) {
    return [null, "Error al actualizar el servicio"];
  }
}

export async function deleteServicioService(id) {
  try {
    const servicio = await servicioRepo.findOneBy({ id });
    if (!servicio) return [null, "Servicio no encontrado"];

    await servicioRepo.remove(servicio);
    return [servicio, null];
  } catch (error) {
    return [null, "Error al eliminar el servicio"];
  }
}
