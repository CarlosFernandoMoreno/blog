const fs = require('fs')

const borrarImagen = async (nombreDeLaImagen) => {
  console.log(nombreDeLaImagen)
  try {
    fs.unlinkSync(nombreDeLaImagen)
  } catch (err) {
    return err
  }
}
module.exports = { borrarImagen }
