let MessageService = require('../service/message.service')
let router = require('express').Router()
const http = require('../../../utils/http');
const code = require('../../../utils/status');

router.get('/:id', (req, res)=>{
    let id = req.params.id 
    MessageService.ListByChat(id).then(data=>{
        http.ok(req, res, code.status.Ok.code, data)
    }).catch(err=>{
        http.err(req, res, code.status.Internal_Server_Error.code, err, err)
    })
})


router.post('/', (req, res)=>{
    let message = req.body;

    MessageService.Save(message).then(data=>{
        http.ok(req, res, code.status.Ok.code, data)
    }).catch(err=>{
        http.err(req, res, code.status.Internal_Server_Error.code, err, err)
    })
})

module.exports = router