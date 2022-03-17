const {request, response} = require('express');
const {prisma} = require('../db/prismaClient');

/**
 * Método encargado de crear reservas
 * @param {*} req 
 * @param {*} res 
 */

const crearReserva = async(req=request, res=response) =>{
    
    try {

        const usuarios = await prisma.user.findMany();
        const clienteId = usuarios[0].id;

        const {fecha,restauranteId, mesaId} = req.body;    

        const reserva = await prisma.reserva.create({
            data:{
                restauranteId:Number(restauranteId),
                mesaId:Number(mesaId),
                clienteId:Number(clienteId),
                fecha:new Date(fecha)
            }
        });
        const mesa = await prisma.mesa.update({
            where:{
                id:mesaId
            },
            data:{
                estado:false
            }
        })

        res.status(201).json({
            ok:false,
            reserva,
            mesa
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
        
    }
}

const getMesas = async(req=request, res=response) =>{
    try {

        const {id} = req.body;

        const [numero, mesas] = await Promise.all([
            prisma.mesa.count({
                where:{
                    
                    estado:true
                }
            }),
            prisma.mesa.findMany({
                where:{
                    estado:true
                }
            })
        ])

        res.status(200).json(
            {
                ok:true,
                numero,
                mesas
            }
        )

    } catch (error) {

        console.log(error);
        
        res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        })
        
    }
}

const getReservas = async(req=request, res=response)=>{

    try {
        
        const [numero, reservas] = await Promise.all([
            prisma.reserva.count(),
            prisma.reserva.findMany()
        ])
        
        res.status(200).json({
            ok:true,
            numero,reservas
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        })
    }
}

module.exports = {
    crearReserva,
    getMesas,
    getReservas
}