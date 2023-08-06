// Requires
const router = require('express').Router()
const { solicitudesCTRL, getPublicationsCTRL, updatePublicationCTRL, deletePublicationCTRL, createPublicationCTRL, getPublicacionCTRL } = require('../controllers/blog.contoller.js')
const { upload } = require('../middlewares/upload.middleware.js')
const { handleError } = require('../middlewares/error.middleware.js')
const { validadorDePublicacion } = require('../validators/publicacion.validator.js')
const { validadorDeId } = require('../validators/id.validator.js')
// Routes
router.get('/', getPublicationsCTRL)
router.get('/solicitudes', solicitudesCTRL)
router.post('/solicitudes', upload, validadorDePublicacion, createPublicationCTRL)
router.get('/:id', getPublicacionCTRL)
router.get('/delete/:id', validadorDeId, deletePublicationCTRL)
router.post('/actualizar/:id', updatePublicationCTRL)
router.use(handleError)
// Routes Exports
module.exports = router
