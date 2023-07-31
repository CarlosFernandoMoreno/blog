const mongoose = require('mongoose')
const dbConection = mongoose.connection

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch((error) => console.log(error))
dbConection.on('open', (_) => {
  console.log('La base de datos se conecto con mongo Atlas')
})
dbConection.on('error', (error) => {
  console.log(error)
})
