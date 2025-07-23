"use strict";
import { EntitySchema } from "typeorm";

const ConvenioSchema = new EntitySchema({
  name: "Convenio",
  tableName: "convenios",
  columns: {
    id_convenio: {
      primary: true,
      type: "int",
      generated: true,
      unique: true,
    },
    nombre: {
      type: "varchar",
      length: 100,
      nullable: false,
    },
    descuento_porcentual: {
      type: "int",
      nullable: false,
    },
    activo: {
      type: "boolean",
      default: true,
      nullable: false,
    },
  },
  relations: {
    servicios: {
      target: "Servicio",
      type: "many-to-many",
      inverseSide: "convenios" // Cambiado de mappedBy a inverseSide
    }
  }
});

export default ConvenioSchema;
