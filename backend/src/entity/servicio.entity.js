"use strict";
import { EntitySchema } from "typeorm";

const ServicioSchema = new EntitySchema({
  name: "Servicio",
  tableName: "servicios",
  columns: {
    id_servicio: {
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
    descripcion: {
      type: "text",
      nullable: false,
    },
    procedimiento: {
      type: "text",
      nullable: false,
    },
    precio_aproximado: {
      type: "int",
      nullable: false,
    },
    activo: {
      type: "boolean",
      default: true,
      nullable: false, // No permite null: debe ser true o false
    },
  },
  relations: {
    convenios: {
      target: "Convenio",
      type: "many-to-many",
      joinTable: {
        name: "servicios_convenios"
      },
      cascade: true
    }
  }
});

export default ServicioSchema;
