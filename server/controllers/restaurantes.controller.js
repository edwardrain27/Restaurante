const {request, response} = require('express');
const {prisma } = require('../db/prismaClient');
/**
 * Método encargado de listar los restaurantes
 * @param {*} req 
 * @param {*} res 
 */

const getRestaurantes = async(req=request, res=response)=>{

    try {

        const [restaurantes, numero] =  await Promise.all([
            prisma.restaurante.findMany({
                where:{
                    estado:true
                },
                orderBy:[{
                    nombre:'asc'
                },
                {
                    ciudad:'asc'
                }
                ]
            }),
            prisma.restaurante.count({
                where:{
                    estado:true
                }
            })
        ])

        res.status(200).json({
            ok:true,
            numero,
            restaurantes
        })
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error, comunicarse con el administrador'
        })
    }
}

/**
 * Función encargada de crear restaurantes
 * @param {*} req 
 * @param {*} res 
 */
const crearRestaurante = async(req=request, res=response)=>{

    try {
        
        const {nombre, descripcion, direccion,ciudad, foto } = req.body;
        
        const restaurante = await prisma.restaurante.create({
            data:{
                nombre,
                descripcion,
                direccion,
                ciudad,
                foto,
                mesas:{
                    create:[
                        {nombre:"mesa 1"},
                        {nombre:"mesa 2"},
                        {nombre:"mesa 3"},
                        {nombre:"mesa 4"},
                        {nombre:"mesa 5"},
                        {nombre:"mesa 6"},
                        {nombre:"mesa 7"},
                        {nombre:"mesa 8"},
                        {nombre:"mesa 9"},
                        {nombre:"mesa 10"},
                        {nombre:"mesa 11"},
                        {nombre:"mesa 12"},
                        {nombre:"mesa 13"},
                        {nombre:"mesa 14"},
                        {nombre:"mesa 15"}
                    ]
                }
                
            }
        })

        res.status(201).json({
            ok:true,
            msg:'Restaurante creado',
            restaurante
        })


    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error, comunicarse con el administrador'
        })
        
    }
}
/**
 * Método encargado de actualizar los datos del restaurante
 * @param {*} req 
 * @param {*} res 
 */
const actualizarRestaurante = async(req=request, res=response)=>{

    try {

        const { id } = req.params;
        console.log(id);
        const { _id,...resto } = req.body;
        console.log(resto);

       const restaurante = await prisma.restaurante.update({
            where:{
                id:Number(id)
            },
            data:resto
        }); 

        res.status(201).json({
            ok:true,
            restaurante
          
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error, comunicarse con el administrador'
        })
    }
}

/**
 * Método encargado de eliminar un restaurante 
 * @param {*} req 
 * @param {*} res 
 */
const eliminarRestaurante = async(req=request, res=response)=>{
    try {

        const { id } = req.params;

        const restaurante = await prisma.restaurante.update({
            where:{
                id:Number(id)
            },
            data:{
                estado:false
            }
        })

        res.status(201).json({
            ok:true,
            msg:'Restaurante eliminado',
            restaurante
        })
        
    } catch (error) {

        res.status(500).json({
            ok:false,
            msg:'Error, comunicarse con el administrador'
        });
        
    }
}


module.exports = {
    getRestaurantes,
    crearRestaurante,
    actualizarRestaurante,
    eliminarRestaurante
}