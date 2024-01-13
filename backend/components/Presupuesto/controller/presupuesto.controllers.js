const presupuestoService = require('../service/presupuesto.service');
const http = require('../../../utils/http');
const code = require('../../../utils/status');
const e = require('express');
const router = require('express').Router();

router.get('/', (req, res) => { //get

    presupuestoService.listar()
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});

router.post('/', (req, res) => { //post

    let presupuesto = req.body;

    presupuestoService.registrar(presupuesto)
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});


router.get('/:id', (req, res) => {

    let id = req.params.id;

    presupuestoService.listarID(id).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

router.put('/:id', (req, res) => {

    let id = req.params.id;
    let presupuesto = req.body;

    console.log(id);

    presupuestoService.modificar(id, presupuesto).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});


router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    presupuestoService.eliminar(id)
        .then((data) => {
            http.ok(req, res, code.status.Ok.code, data);
        })
        .catch((error) => {
            http.err(req, res, code.status.Internal_Server_Error, err);
        })
});

module.exports = router;