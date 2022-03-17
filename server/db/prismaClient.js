const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Método encargado de conectar con la base de datos
 */
const dbConnect= async()=>{

    try {
        await prisma.$connect()
        console.log('base de datos conectada');

    } catch (error) {
        console.log(error);
        throw new Error('Ha ocurrido un error al iniciar la base de datos')
    }
}

module.exports = {dbConnect, prisma};