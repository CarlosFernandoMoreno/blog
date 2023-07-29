const multer = require('multer')
const path = require('path')

const TYPE_IMAGES = {
  'image/jpg': 'jpg',
  'image/png': 'png',
  'image/jpeg': 'jpeg'
}
// con la propiedad Filename establecemos como se llamaran las imagenes y donde se guardarans
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../public/images'),
  filename: (req, file, cb) => {
    const extension = TYPE_IMAGES[file.mimetype]
    const name = file.originalname.split(' ').join('_')
    cb(null, name + Date.now() + '.' + extension)
  }
})
// Le indicamos a multer donde debe dejar las imagenes
const upload = multer({ storage, dest: path.join(__dirname, '../../public/images') }).single('img')

exports.upload = upload
