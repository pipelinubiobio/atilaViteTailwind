"use strict";
import Joi from "joi";

export const servicioBodyValidation = Joi.object({
  nombre: Joi.string()
    .min(3)
    .max(100)
    .pattern(/^[A-ZÁÉÍÓÚÑ0-9]+(?:\s[A-ZÁÉÍÓÚÑ0-9]+)*$/)
    .required()
    .messages({
      "string.empty": "El nombre no puede estar vacío.",
      "string.base": "El nombre debe ser de tipo string.",
      "string.min": "El nombre debe tener como mínimo 3 caracteres.",
      "string.max": "El nombre debe tener como máximo 100 caracteres.",
      "string.pattern.base":
        "El nombre solo puede contener letras mayúsculas, números y un solo espacio entre palabras.",
    }),

  descripcion: Joi.string()
    .min(3)
    .max(1000)
    .pattern(/^[a-zA-ZÁÉÍÓÚÑáéíóú0-9.,\s]+$/)
    .required()
    .messages({
      "string.empty": "La descripción no puede estar vacía.",
      "string.base": "La descripción debe ser de tipo texto.",
      "string.min": "La descripción debe tener al menos {#limit} caracteres.",
      "string.max": "La descripción debe tener como máximo {#limit} caracteres.",
      "string.pattern.base":
        "La descripción solo puede contener letras, números, comas, puntos y espacios.",
    }),

  procedimiento: Joi.string()
    .min(3)
    .max(1000)
    .pattern(/^[a-zA-ZÁÉÍÓÚÑáéíóú0-9.,\s]+$/)
    .required()
    .messages({
      "string.empty": "El procedimiento no puede estar vacío.",
      "string.base": "El procedimiento debe ser de tipo texto.",
      "string.min": "El procedimiento debe tener al menos {#limit} caracteres.",
      "string.max": "El procedimiento debe tener como máximo {#limit} caracteres.",
      "string.pattern.base":
        "El procedimiento solo puede contener letras, números, comas, puntos y espacios.",
    }),

  precio_aproximado: Joi.number()
    .integer()
    .min(0)
    .max(9999999)
    .required()
    .messages({
      "number.base": "El precio debe ser de tipo numérico.",
      "number.empty": "El precio no debe estar vacío.",
      "number.min": "El precio debe ser mayor o igual a 0.",
      "number.max": "El precio debe ser menor o igual a 9999999.",
    }),

  activo: Joi.boolean()
    .required()
    .messages({
      "boolean.base": "El estado debe ser verdadero o falso.",
      "any.required": "Debes indicar si el servicio está activo o no.",
    }),

  id_convenios: Joi.array()
    .items(Joi.number().integer().positive())
    .optional()
    .messages({
      "array.base": "Los convenios deben enviarse como una lista.",
      "number.base": "Cada ID de convenio debe ser un número.",
      "number.integer": "Cada ID de convenio debe ser un número entero.",
      "number.positive": "Cada ID de convenio debe ser un número positivo.",
    }),
});
