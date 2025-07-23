"use strict";
import Joi from "joi";

export const convenioBodyValidation = Joi.object({
  nombre: Joi.string()
    .min(2)
    .max(100)
    .pattern(/^[A-ZÁÉÍÓÚÑ0-9]+(?:\s[A-ZÁÉÍÓÚÑ0-9]+)*$/)
    .required()
    .messages({
      "string.empty": "El nombre no puede estar vacío.",
      "string.base": "El nombre debe ser de tipo texto.",
      "string.min": "El nombre debe tener como mínimo {#limit} caracteres.",
      "string.max": "El nombre debe tener como máximo {#limit} caracteres.",
      "string.pattern.base":
        "El nombre solo puede contener letras mayúsculas, números y un solo espacio entre palabras.",
    }),

  descuento_porcentual: Joi.number()
    .integer()
    .min(1)
    .max(100)
    .required()
    .messages({
      "number.base": "El descuento debe ser un número entero.",
      "number.empty": "El descuento no debe estar vacío.",
      "number.min": "El descuento debe ser al menos del {#limit}%.",
      "number.max": "El descuento no puede superar el {#limit}%.",
    }),

  activo: Joi.boolean()
    .optional()
    .messages({
      "boolean.base": "El campo 'activo' debe ser verdadero o falso.",
    }),

  id_servicios: Joi.array()
    .items(Joi.number().integer().positive())
    .optional()
    .messages({
      "array.base": "id_servicios debe ser un arreglo de números.",
      "number.base": "Cada id debe ser un número.",
      "number.integer": "Cada id debe ser un número entero.",
      "number.positive": "Cada id debe ser un número positivo.",
    }),
});
