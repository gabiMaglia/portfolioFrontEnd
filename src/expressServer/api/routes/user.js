const express = require("express");
const router = express.Router();

const mysqlConnection = require('../connections/connections')
const jwt = require ('jsonwebtoken');
const { json } = require("express");

router.get('/', (req, res)=> {
    mysqlConnection.query("select * from auth", (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        }else {
            console.log(err)
        }

    })
});

router.post('/singin', (req, res, next)=> {
    const {username, pass} = req.body
    mysqlConnection.query('select username, idAuth from auth where username=? and pass =?',
    [username, pass],
    (err, rows, fields) => {
        if (!err) {
           if (rows.length > 0) {

                // si los datos son correctos y la respuesta es positiva utilizamos JWT para crear un token de seguridad para los datos de inicio
                // de esta forma al matchear los datos ingresados con la base de datos la respuesta de los mismos viaja de vuelta encriptada en forma de token
               let data = JSON.stringify(rows[0])
               const token = jwt.sign(data, 'guriii');
               res.json({token});
           
           
            }else {
            res.json('usuario 0 clave incorrectos')
        }  
        }else {
            console.log(err)
            res.json(err)
        }    
    }
    
    )
})

router.post('/test', verifyToken, (req, res) => {
    
    res.json('secret data')

})

//creamos una funcion de middleware para verificar la existencia del token
function verifyToken ( req, res, next ) {
    if (!req.headers.authorization) return res.status(401).json('No autorizado');

    const token =  req.headers.authorization.substr(7);
    if (token !=='') {
      const content =  jwt.verify(token, 'guriii');
      req.data = content
      next(); 
    }else {
        res.status(401).json('token vacio')
    }
    
}

module.exports = router;