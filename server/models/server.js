const morgan = require('morgan')
const express = require('express');
const cors = require('cors');
const { dbConnect } = require('../db/prismaClient');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;   // PUERTO EN EL QUE SE EJECUTA
        
        this.path = {                           // RUTAS DEL LA API REST
            "restaurante":"/api/restaurante",
            "reservas":"/api/reserva",
            "users":"/api/users"
        }
        this.conectarDb();
        this.middlewares();
        this.routes();
        
    }

    middlewares(){
        
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    
    }
    /**
     * Rutas de la aplicación
     */
    routes(){

        this.app.use(this.path.restaurante, require('../routes/restaurantes.routes'));
        this.app.use(this.path.reservas, require('../routes/reservas.routes'));
        this.app.use(this.path.users, require('../routes/usuarios.routes'));
        
    }
    start(){
        this.app.listen(this.port, ()=>{
            console.log(`servidor corriendo en el puerto http://localhost:${this.port}`)
        })
    }
    

    async conectarDb(){
        await dbConnect();
    }

}


module.exports = Server;