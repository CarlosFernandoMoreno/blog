const { validationResult } = require('express-validator')
const { borrarImagen } = require('./eliminar-imagen.helper.js')
const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (err) {
    const rutaDeLaImagen = req.file.path
    borrarImagen(rutaDeLaImagen)
    res.status(403).send({ errors: err.array() })
  }
}

module.exports = { validateResult }
