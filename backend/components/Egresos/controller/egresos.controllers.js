const http = require('../../../utils/http');
const code = require('../../../utils/status');
const e = require('express');
const egresosService = require('../service/egresos.service');
const router = require('express').Router();

router.get('/', (req, res) => { //get

    egresosService.listar()
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});

router.post('/', (req, res) => { //post

    let egresos = req.body;

    egresosService.registrar(egresos)
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});


router.get('/:id', (req, res) => {

    let id = req.params.id;

    egresosService.listarID(id).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

module.exports = router;