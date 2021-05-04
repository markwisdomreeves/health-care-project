
const router = require("express").Router();
const contactCtrl = require("../controllers/contactCtrl");


router.post('/contact', contactCtrl.createContact);


module.exports = router;
