let ChatService = require('../service/chat.service')
let router = require('express').Router()
const http = require('../../../utils/http');
const code = require('../../../utils/status');

router.get('/admin/:id', (req, res)=>{
    let id = req.params.id 
    ChatService.ListByAdmin(id).then(data=>{
        http.ok(req, res, code.status.Ok.code, data)
    }).catch(err=>{
        http.err(req, res, code.status.Internal_Server_Error.code, err, err)
    })
})

router.get('/user/:id', (req, res)=>{
    let id = req.params.id

    ChatService.ListByUser(id).then(data=>{
        http.ok(req, res, code.status.Ok.code, data)
    }).catch(err=>{
        http.err(req, res, code.status.Internal_Server_Error.code, err, err)
    })
})

router.post('/', (req, res)=>{
    let chat = req.body;
    ChatService.Create(chat).then(data=>{
        http.ok(req, res, code.status.Ok.code, data)
    }).catch(err=>{
        http.err(req, res, code.status.Internal_Server_Error.code, err, err)
    })
})

module.exports = router