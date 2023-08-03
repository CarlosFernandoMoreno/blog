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
    .then(() => {
      res.redirect('/solicitudes')
    })
    .catch((error) => res.status(400).json('error al guardar la publicacion' + error))
}
const deletePublicationCTRL = (req, res) => {
  const { id } = req.params
  Publication.deleteOne({ _id: id })
    .then(() => {
      res.redirect('/')
    })
    .catch((error) => res.render('error404', { error }))
}
const updatePublicationCTRL = (req, res) => {
  const dataUpdate = req.body
  Publication.updateOne({ _id: dataUpdate.id }, { dataUpdate })
    .then((publicacion) => {
      res.redirect(`/${publicacion.id}`)
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
