const { Schema, model } = require('mongoose')
const PublicationSchema = new Schema({
  imgUrl: {
    type: String
  },
  contenido: {
    type: String,
    require: true
  },
  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    default: 'Admin'
  },
  descripcion: {
    type: String,
    required: true
  }
},
{
  timestamps: true,
  versionKey: false
})
module.exports = model('Publicacione', PublicationSchema)
