const { param } = require('express-validator')
const { validateResult } = require('../helpers/validate.helper.js')

const validadorDeId = [
  param('id')
    .notEmpty()
    .exists()
    .isString()
    .withMessage('La id es requerida'),
  (req, res, next) => { validateResult(req, res, next) }]
module.exports = { validadorDeId }
