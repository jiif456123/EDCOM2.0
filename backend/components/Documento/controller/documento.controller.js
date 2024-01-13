let docService = require('../service/documento.service')
let router = require('express').Router()
const http = require('../../../utils/http');
const code = require('../../../utils/status');
var fileupload = require('express-fileupload');
var fs = require('fs');
router.use(fileupload());

router.post('/', (req, res) => {

    let file = req.body.file;
    let name = generarId(5) + req.body.nameFile;
    let documento = req.body.documento
    var carpeta = './user_upload/';
    //Create a directory if it doesn't exist
    if (!fs.existsSync(carpeta)) {
        fs.mkdirSync(carpeta);
    }
    let ruta = carpeta + '/' + name;
    const base64data = file.replace(/^data:.*,/, '');

    documento.filePath = name;
    fs.writeFile(ruta, base64data, 'base64', (err) => {
        if (!err) {
            docService.crear(documento).then(
                (data) => http.ok(req, res, code.status.Ok.code, data))
                .catch(
                    (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
        }
        else {
            http.err(req, res, code.status.Internal_Server_Error.code, 'errorMessage', 'errorMessage')
        }
    })
})

router.get('/', (req, res) => {
    docService.listar().then(
        (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
})

router.get('/file/:id', (req, res) => {
    const fileName = req.params.id;
    const directoryPath = './user_upload/';

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
})

router.post('/actualizar', (req, res) => {
    let body = req.body.documento;
    let id = req.body.id;
    let file = req.body.file;
    let name = generarId(5) + req.body.nameFile;

    var carpeta = './user_upload/';

    if (file != null) {
        if (!fs.existsSync(carpeta)) {
            fs.mkdirSync(carpeta);
        }
        let ruta = carpeta + '/' + name;
        const base64data = file.replace(/^data:.*,/, '');

        body.filePath = name;
        fs.writeFile(ruta, base64data, 'base64', (err) => {
            if (!err) {
                docService.actualizar(id, body).then(
                    (data) => http.ok(req, res, code.status.Ok.code, data))
                    .catch(
                        (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
            }
            else {
                http.err(req, res, code.status.Internal_Server_Error.code, 'errorMessage', 'errorMessage')
            }
        })
    } else {
        docService.actualizar(id, body).then(data => {
            http.ok(req, res, code.status.Ok.code, data)
        }).catch(err => {
            http.err(req, res, code.status.Internal_Server_Error.code, err)
        })
    }
})

router.post('/rechazar', (req, res) => {
    let doc = req.body.documento;
    let estado = req.body.estado;

    docService.actualizarRechazar(doc,estado).then(
        (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
})

function generarId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = router