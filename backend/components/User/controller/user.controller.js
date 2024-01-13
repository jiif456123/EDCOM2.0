const usuarioService = require('../service/user.service');
const http = require('../../../utils/http');
const code = require('../../../utils/status');
const router = require('express').Router();

router.get('/', (req, res) => { //get

    usuarioService.listar()
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});

router.get('/admin', (req, res) => { //get

    usuarioService.listarAdmin()
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});

router.get('/residente', (req, res) => { //get

    usuarioService.listarResidente()
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});

router.post('/', (req, res) => { //post

    let usuario = req.body;

    usuarioService.registrar(usuario)
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});



router.post('/actualizar', (req, res) => {

    let id = req.body.id;
    let usuario = req.body.usuario;

    usuarioService.modificar(id, usuario).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

router.post('/contrasena', (req, res) => {

    let correo = req.body.correo;
    let password = req.body.password;

    usuarioService.cambiarContresena(correo, password).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

router.post('/validar', (req, res) => {

    let correo = req.body.correo;

    usuarioService.validarUsuario(correo).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

module.exports = router;