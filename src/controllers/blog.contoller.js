const Publication = require("../models/publication.model");

const getPublicationsCTRL = (req, res) => {
  const publications = Publication.find()
    .then((publicaciones) => {
      res.render('index', {publicaciones:publicaciones});
      console.log(publicaciones);
    })
    .catch((error) => {
      console.log(error);
    });
};
const createpublicationCTRL = (req, res) => {
  const { contenido, titulo, imgUrl } = req.body;
  const publication = new Publication({
    titulo,
    contenido,
    imgUrl,
  });
  publication
    .save()
    .then((savePublication) => {
      console.log(savePublication);
      res.json(savePublication).status(300);
    })
    .catch((error) => console.log(error));
};
const deletePublicationCTRL = (req, res) => {
  const { id } = req.params;
  Publication.deleteOne({ _id: id })
    .then((PublicacionBorrada) => {
      res.json(PublicacionBorrada);
      console.log(PublicacionBorrada);
    })
    .catch((error) => console.log(error));
};
const updatePublicationCTRL = (req, res) => {
  const dataUpdate = req.body;
  const publication = Publication.findOne({ _id: dataUpdate.id })
    .then((publicacionActualizada) => {
      res.json(publicacionActualizada);
      console.log(result);
    })
    .catch((error) => console.log(error));
  publication.updateOne(dataUpdate.id, { dataUpdate });
  console.log("hola");
};

module.exports = {
  createpublicationCTRL,
  getPublicationsCTRL,
  updatePublicationCTRL,
  deletePublicationCTRL,
};
