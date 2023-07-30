// Requires
const router = require('express').Router()
const { solicitudesCTRL, getPublicationsCTRL, updatePublicationCTRL, deletePublicationCTRL, createPublicationCTRL, getPublicacionCTRL, handleError } = require('../controllers/blog.contoller.js')
const { upload } = require('../middlewares/upload.middleware.js')
const { validadorDePublicacion } = require('../middlewares/Publicacion.middleware.js')
// Routes
router.get('/', getPublicationsCTRL)
router.get('/solicitudes', solicitudesCTRL)
router.post('/solicitudes', upload, validadorDePublicacion, createPublicationCTRL)
router.get('/:id', getPublicacionCTRL)
router.delete('/delete/:id', deletePublicationCTRL)
router.put('/update', updatePublicationCTRL)
router.use(handleError)
// Routes Exports
module.exports = router
