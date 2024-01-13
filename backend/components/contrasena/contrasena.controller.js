let contrasenaService = require('./contrasena.service')
let router = require('express').Router()
const http = require('../../utils/http');
const code = require('../../utils/status');
const nodemailer = require('nodemailer');
const mail = require('./mail');

router.get('/:id', (req, res)=>{
    let id = req.params.id 
    contrasenaService.listarporId(id).then(data=>{
        http.ok(req, res, code.status.Ok.code, data)
    }).catch(err=>{
        http.err(req, res, code.status.Internal_Server_Error.code, err, err)
    })
})

router.post('/', (req, res)=>{
    let cont = req.body
    contrasenaService.registrar(cont).then(data=>{
        const message = buildMessage(data);

        transport.sendMail(message, function (err, info) {
            if (err) {
                http.err(req, res, code.status.Internal_Server_Error.code, err, err)
            } else {
                http.ok(req, res, code.status.Ok.code, data)
            }
        });
    }).catch(err=>{
        http.err(req, res, code.status.Internal_Server_Error.code, err, err)
    })
})

router.post('/inactivar', (req, res)=>{
    let id = req.body.id
    contrasenaService.actualizar(id).then(data=>{
        http.ok(req, res, code.status.Ok.code, data)
    }).catch(err=>{
        http.err(req, res, code.status.Internal_Server_Error.code, err, err)
    })
});

//transporte
let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'emdconcondominio@gmail.com',
        pass: 'jmartinez123'
    }
});

//Mensaje
function buildMessage(usuario) {
    return {
        from: 'emdconcondominio@gmail.com', // Sender address
        to: usuario.correo,         // List of recipients
        subject: 'Cambio de contraseña requerido', // Subject line
        text: 'Ingresa a este enlace para continuar con el cambio de contraseña: localhost:4200/iniciarsesion/recuperarcontrasena/' + usuario._id, // Plain text body
        html: mail.mail(usuario)
    };
}


module.exports = router;