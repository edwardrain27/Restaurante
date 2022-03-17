
const {prisma} = require('../db/prismaClient');

/**
 * Método encargado de verificar que el restaurante exista
 * @param {*} id 
 */
const existeRestaurante = async( id ) => {

    const existeRestaurante = await prisma.restaurante.findUnique({
        where:{
            id:Number(id)
        }
    })
    if ( !existeRestaurante ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const existeNombre = async( nombre ='') => {
    const existeRestauranteNombre = await prisma.restaurante.findUnique({
        where:{
            nombre
        }
    })

    if( existeRestauranteNombre){
        throw new Error(`El restaurante con el nombre ${nombre} ya está registrado en la base de datos`);
    }
}

/**
 * Función encargada de validar la fecha 
 * @param {*} fecha 
 */
const validarFecha = async( fecha = '' )=>{

    
    const result = await prisma.reserva.count({
        where:{
            fecha:new Date(fecha)
        }
    });

    if(result > 20){
        throw new Error(`Se ha excedido el número de reservas para el día ${fecha}`);
    }
}  


module.exports = {
    existeRestaurante,
    existeNombre,
    validarFecha
}
