const { response } = require("express");
const publication = require("../models/publication.model");

const getPublicationsCTRL = (req, res) => {
  console.log("hola");
  res.render('index');
};
const createpublicationCTRL = (req, res) => {
    /*     const publications = Publicati.find().then((response)=>{response.json()}).then(console.log(response)).catch((error)=>{console.log(error)});
     */
    console.log("hola");
  };
  const deletePublicationCTRL = (req, res) => {
    /*     const publications = Publicati.find().then((response)=>{response.json()}).then(console.log(response)).catch((error)=>{console.log(error)});
     */
    console.log("hola");
  };
  const updatePublicationCTRL = (req, res) => {
    /*     const publications = Publicati.find().then((response)=>{response.json()}).then(console.log(response)).catch((error)=>{console.log(error)});
     */
    console.log("hola");
  };

module.exports = { createpublicationCTRL, getPublicationsCTRL,updatePublicationCTRL, deletePublicationCTRL };
