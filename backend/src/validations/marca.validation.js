"use strict";
import Joi from "joi";

export const marcaBodyValidation = Joi.object({
  nombre: Joi.string()
    .min(2)
    .max(100)
    .pattern(/^[A-ZÁÉÍÓÚÑ]+(?:\s[A-ZÁÉÍÓÚÑ]+)*$/)
    .messages({
      "string.empty": "El nombre no puede estar vacío.",
      "string.base": "El nombre debe ser de tipo string.",
      "string.min": "El nombre debe tener como mínimo 2 caracteres.",
      "string.max": "El nombre debe tener como máximo 100 caracteres.",
      "string.pattern.base":
        "El nombre solo puede contener letras mayúsculas con un solo espacio entre palabras.",
    }),
});
