const {Router} = require('express');
const {check, body} = require('express-validator');

const {getMesas, crearReserva, getReservas} = require('../controllers/reservas.controller');
const { validarFecha } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validarCampos');


const router = Router();

router.post('/reservar',[
    check('fecha').custom(validarFecha),
    validarCampos

],crearReserva);
router.get('/',getMesas)

router.get('/reservas',getReservas)

module.exports = router;
