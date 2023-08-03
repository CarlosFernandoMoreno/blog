const { check } = require('express-validator')
const { validateResult } = require('../helpers/validate.helper.js')

const validadorDePublicacion = [
  check('nombre')
    .notEmpty()
    .exists()
    .isString()
    .withMessage('El nombre es requerido'),
  check('titulo')
    .exists()
    .not()
    .isEmpty()
    .withMessage('El titulo es requerido'),
  check('descripcion')
    .exists()
    .not()
    .isEmpty()
    .withMessage('La descripcion es requerida'),
  check('contenido')
    .exists()
    .not()
    .isEmpty()
    .withMessage('El contenido es requerido'),
  (req, res, next) => { validateResult(req, res, next) }]
module.exports = { validadorDePublicacion }
