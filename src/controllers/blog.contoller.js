const Publication = require('../models/publicacion.model')
const { borrarImagen } = require('../helpers/eliminar-imagen.helper.js')
const path = require('path')

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
    .then(() => {
      res.redirect('/solicitudes')
    })
    .catch((error) => res.status(400).json('error al guardar la publicacion' + error))
}
const deletePublicationCTRL = (req, res) => {
  const { id } = req.params
  Publication.findById({ _id: id }).then((publicacion) => {
    const imgUrl = path.join(__dirname, '../../public', publicacion.imgUrl)
    borrarImagen(imgUrl)
  }).catch((error) => res.render('error404', { error }))
  Publication.deleteOne({ _id: id })
    .then(() => {
      res.redirect('/')
    })
    .catch((error) => res.render('error404', { error }))
}
const updatePublicationCTRL = (req, res) => {
  const id = req.params.id
  const publicacion = Publication.findById(id)
  if (!publicacion) res.status(404).json('publicacion no encontrada')
  const dataUpdate = req.body
  Publication.updateOne({ _id: id }, dataUpdate)
    .then(() => {
      res.redirect('/')
    }).catch((error) => res.render('error404', { error }))
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
module.exports = {
  createPublicationCTRL,
  getPublicationsCTRL,
  updatePublicationCTRL,
  deletePublicationCTRL,
  solicitudesCTRL,
  getPublicacionCTRL
}
