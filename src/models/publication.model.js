const { Schema, model } = require("mongoose");
const PublicationSchema = new Schema({
  imgUrl: {
    type: String,
  },
  content: {
    type: String,
    require: true,
  },
  title:{
    type:String,
    required:true
  }
});
module.exports = model('Publication', PublicationSchema)
