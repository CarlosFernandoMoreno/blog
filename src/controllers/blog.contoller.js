const Publication = require('../models/publicacion.model')

const getPublicationsCTRL = (req, res) => {
  Publication.find()
    .then((publicaciones) => {
      res.render('index', { publicaciones })
    })
    .catch((error) => {
      res.json(error)
    })
}
const createPublicationCTRL = (req, res) => {
  const imgUrl = './images/' + req.file.filename
  const { descripcion, titulo, contenido } = req.body
  const publication = new Publication({
    titulo,
    descripcion,
    contenido,
    imgUrl
  })
  publication
    .save()
    .then((savePublication) => {
      res.json(savePublication).status(300)
    })
    .catch((error) => res.status(400).json('error al guardar la publicacion' + error))
}
const deletePublicationCTRL = (req, res) => {
  const { id } = req.params
  Publication.deleteOne({ _id: id })
    .then((PublicacionBorrada) => {
      res.json(PublicacionBorrada)
    })
    .catch((error) => res.json(error))
}
const updatePublicationCTRL = (req, res) => {
  const dataUpdate = req.body
  const publication = Publication.findOne({ _id: dataUpdate.id })
    .then((publicacionActualizada) => {
      res.json(publicacionActualizada)
    })
    .catch((error) => console.log(error))
  publication.updateOne(dataUpdate.id, { dataUpdate })
  console.log('hola')
}
const solicitudesCTRL = (req, res) => {
  res.render('solicitudes')
  console.log('hola')
}
const getPublicacionCTRL = (req, res) => {
  const { id } = req.params
  Publication.findById(id).then((publicacion) => {
    res.render('publicacion', { publicacion })
  }).catch((error) => res.render('error404', { error }))
}
const handleError = (req, res) => { res.render('error404', { error: req.body }) }
module.exports = {
  createPublicationCTRL,
  getPublicationsCTRL,
  updatePublicationCTRL,
  deletePublicationCTRL,
  solicitudesCTRL,
  getPublicacionCTRL,
  handleError
}
