const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const { prisma } = require('../db/prismaClient');

const usuariosPost = async(req=request, res = response) => {
    
    const { nombre, correo, password} = req.body;

    const salt = bcryptjs.genSaltSync();
    const password_crypt = bcryptjs.hashSync( JSON.stringify(password), salt );

    const usuario = await prisma.user.create({
        data:{
            nombre,
            correo,
            password:password_crypt
        }
    })
    // Encriptar la contraseña
    res.json({
        ok:true,
        msg:'Usuario creado',
        usuario
    });
}

const usuariosGet = async(req=request, res=response)=>{
    
    const usuarios = await prisma.user.findMany();

    res.status(200).json({
        ok:true,
        usuarios
    })
}


module.exports = {
    usuariosGet,
    usuariosPost
}