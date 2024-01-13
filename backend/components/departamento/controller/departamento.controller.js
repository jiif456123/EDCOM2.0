let DepService = require('../service/departamento.service')
let router = require('express').Router()
const { err } = require('../../../utils/http');
const http = require('../../../utils/http');
const code = require('../../../utils/status');

router.post('/', (req, res)=>{
    let dep = req.body;
    console.log(dep);
    DepService.crear(dep).then(
        (data) => http.ok(req, res, code.status.Ok.code, data))
    .catch(
        (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
})

router.get('/', (req, res)=>{
    DepService.listar().then(
        (data) => http.ok(req, res, code.status.Ok.code, data))
    .catch(
        (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
})

module.exports = router