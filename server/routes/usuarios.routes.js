
const { Router } = require('express');
const { check } = require('express-validator');

const {validarCampos} = require('../middlewares/validarCampos');


const { usuariosGet,
        usuariosPost
        } = require('../controllers/users.controller');

const router = Router();

router.get('/', usuariosGet );


router.post('/',[

    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos
], usuariosPost );



module.exports = router;