const resiService = require('../service/resi.service');
const http = require('../../../utils/http');
const code = require('../../../utils/status');
const e = require('express');
const router = require('express').Router();

router.get('/', (req, res) => { //get

    resiService.listar()
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});

router.post('/', (req, res) => { //post

    let resi = req.body;

    resiService.registrar(resi)
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});


router.get('/:id', (req, res) => {

    let id = req.params.id;

    resiService.listarID(id).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

router.put('/:id', (req, res) => {

    let id = req.params.id;
    let resi = req.body;

    console.log(id);

    resiService.modificar(id, resi).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});


router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    resiService.eliminar(id)
        .then((data) => {
            http.ok(req, res, code.status.Ok.code, data);
        })
        .catch((error) => {
            http.err(req, res, code.status.Internal_Server_Error, err);
        })
});

module.exports = router;