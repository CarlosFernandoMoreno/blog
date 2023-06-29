//Requires
const router = require("express").Router();
const {createpublicationCTRL, getPublicationsCTRL,updatePublicationCTRL, deletePublicationCTRL}=require('../controllers/blog.contoller.js');

// Routes   
router.get('/', getPublicationsCTRL)
router.post('/create',createpublicationCTRL)
router.delete('/delete/:id',deletePublicationCTRL)
router.put('/update',updatePublicationCTRL)   
// Routes Exports
module.exports = router;