"use strict";
import { EntitySchema } from "typeorm";

const ServicioSchema = new EntitySchema({
  name: "Servicio",
  tableName: "servicios",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    nombre: {
      type: "varchar",
      length: 100,
      nullable: false,
    },
    descripcion: {
      type: "text",
      nullable: true,
    },
    precio: {
      type: "float",
      nullable: false,
    },
    activo: {
      type: "boolean",
      default: true,
    },
    createdAt: {
      type: "timestamp with time zone",
      default: () => "CURRENT_TIMESTAMP",
    },
    updatedAt: {
      type: "timestamp with time zone",
      default: () => "CURRENT_TIMESTAMP",
      onUpdate: "CURRENT_TIMESTAMP",
    },
  },
});

export default ServicioSchema;
