const handleError = (req, res) => { res.render('error404', { error: req.body }) }
module.exports = { handleError }
