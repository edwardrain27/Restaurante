const { Router } = require('express');
const {check, body} = require('express-validator');

//validación de rutas
const { validarCampos } = require('../middlewares/validarCampos');
const { existeNombre, existeRestaurante } = require('../helpers/db-validators');


const { getRestaurantes,
        crearRestaurante,
        actualizarRestaurante,
        eliminarRestaurante} = require('../controllers/restaurantes.controller');

const router = Router();

router.get('/',getRestaurantes);


router.post('/',[
        check('nombre').custom(existeNombre),
        check('nombre','el nombre es obligatorio').not().isEmpty(),
        check('direccion','la dirección es obligatoria').not().isEmpty(),
        check('ciudad','La ciudad es obligatoria').not().isEmpty(),
        check('foto','la foto es obligatoria').not().isEmpty(),        
        validarCampos
    ],crearRestaurante);

router.put('/:id',[
        check('id').custom(existeRestaurante),
        check('nombre').custom(existeNombre),
        validarCampos
],actualizarRestaurante)

router.delete('/:id',[
        check('id').custom(existeRestaurante),
        validarCampos
],eliminarRestaurante)


module.exports = router;



