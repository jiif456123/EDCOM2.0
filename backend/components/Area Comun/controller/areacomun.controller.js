const { err } = require('../../../utils/http');
const http = require('../../../utils/http');
const code = require('../../../utils/status');
const model = require('../../Reserva/model/reserva.model');
const areacomunService = require('../service/areacomun.service');
const router = require('express').Router();


router.get('/', (req, res) => {
    areacomunService.listar().then(data => {
        http.ok(req, res, code.status.Ok.code, data)
    }).catch(err => {
        http.err(req, res, code.status.Internal_Server_Error.code, err)
    })
})

router.post('/', (req, res)=>{
    let are = req.body;
    console.log(are);
    areacomunService.crear(are).then(
        (data) => http.ok(req, res, code.status.Ok.code, data))
    .catch(
        (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
})

module.exports = router;