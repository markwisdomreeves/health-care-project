
const router = require("express").Router();
const appointmentCtrl = require("../controllers/appointmentCtrl");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");


router.route('/appointments')
    .get(appointmentCtrl.getAllAppointments)
    .post(appointmentCtrl.createAppointment)

router.route('/appointments/:id')
    .get(appointmentCtrl.getSingleAppointment)
    .put(auth, authAdmin, appointmentCtrl.updateAppointment)
    .delete(auth, authAdmin, appointmentCtrl.deleteAppointment)


module.exports = router;
