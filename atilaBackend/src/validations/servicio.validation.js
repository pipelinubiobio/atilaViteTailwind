"use strict";
import Joi from "joi";

export const servicioBodyValidation = Joi.object({
  nombre: Joi.string()
    .min(5)
    .max(100)
    .pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    .required()
    .messages({
      "string.empty": "El nombre del servicio no puede estar vacío.",
      "string.base": "El nombre debe ser de tipo string.",
      "string.min": "El nombre debe tener al menos 5 caracteres.",
      "string.max": "El nombre no puede exceder los 100 caracteres.",
      "string.pattern.base": "El nombre solo puede contener letras y espacios.",
    }),

  descripcion: Joi.string()
    .max(500)
    .allow("")
    .messages({
      "string.base": "La descripción debe ser de tipo string.",
      "string.max": "La descripción no puede exceder los 500 caracteres.",
    }),

  precio: Joi.number()
    .positive()
    .precision(2)
    .required()
    .messages({
      "number.base": "El precio debe ser un número.",
      "number.positive": "El precio debe ser un número positivo.",
      "number.precision": "El precio solo puede tener hasta 2 decimales.",
      "any.required": "El precio es obligatorio.",
    }),

  activo: Joi.boolean()
    .messages({
      "boolean.base": "El campo activo debe ser verdadero o falso.",
    }),
})
  .or("nombre", "descripcion", "precio", "activo")
  .unknown(false)
  .messages({
    "object.unknown": "No se permiten propiedades adicionales.",
    "object.missing":
      "Debes proporcionar al menos un campo: nombre, descripcion, precio o activo.",
  });

export const servicioParamValidation = Joi.object({
  id: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": "El id debe ser un número.",
      "number.integer": "El id debe ser un número entero.",
      "number.positive": "El id debe ser un número positivo.",
      "any.required": "El id es obligatorio.",
    }),
});
