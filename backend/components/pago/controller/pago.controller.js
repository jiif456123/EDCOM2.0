const pagoService = require('../service/pago.service');
const http = require('../../../utils/http');
const code = require('../../../utils/status');
const e = require('express');
const router = require('express').Router();
var fs = require('fs');

router.get('/', (req, res) => { //get

    pagoService.listar()
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});

router.post('/', (req, res) => { //post

    let file = req.body.file;
    let name = generarId(5) + req.body.nameFile;
    let pago = req.body.pago
    var carpeta = './pagos/';
    //Create a directory if it doesn't exist
    if (!fs.existsSync(carpeta)) {
        fs.mkdirSync(carpeta);
    }
    let ruta = carpeta + '/' + name;
    const base64data = file.replace(/^data:.*,/, '');

    pago.foto = name;

    fs.writeFile(ruta, base64data, 'base64', (err) => {
        if (!err) {
            pagoService.registrar(pago)
                .then(
                    (data) => http.ok(req, res, code.status.Ok.code, data))
                .catch(
                    (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
        } else {
            http.err(req, res, code.status.Internal_Server_Error.code, err, err);
        }

    })

})


router.get('/:id', (req, res) => {

    let id = req.params.id;

    pagoService.listarID(id).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let file = req.body.file;
    let name = generarId(5) + req.body.nameFile;
    let pago = req.body.pago;

    var carpeta = './pagos/';
    if (file != null) {
        if (!fs.existsSync(carpeta)) {
            fs.mkdirSync(carpeta);
        }
        let ruta = carpeta + '/' + name;
        const base64data = file.replace(/^data:.*,/, '');

        pago.foto = name;
        fs.writeFile(ruta, base64data, 'base64', (err) => {
            if (!err) {
                pagoService.modificar(id, pago).then((data) => {
                    http.ok(req, res, code.status.Ok.code, data);
                }).catch((error) => {
                    http.err(req, res, code.status.Internal_Server_Error.code, error, error)
                });
            } else {
                http.err(req, res, code.status.Internal_Server_Error.code, err, err);
            }
        })
    } else {
        pagoService.modificar(id, pago).then((data) => {
            http.ok(req, res, code.status.Ok.code, data);
        }).catch((error) => {
            http.err(req, res, code.status.Internal_Server_Error.code, error, error)
        });
    }

});


router.delete('/:id', (req, res) => {
    let id = req.params.id;

    pagoService.eliminar(id)
        .then((data) => {
            http.ok(req, res, code.status.Ok.code, data);
        })
        .catch((error) => {
            http.err(req, res, code.status.Internal_Server_Error, error);
        })
});

router.get('/file/:id', (req, res) => {
    const fileName = req.params.id;
    const directoryPath = './pagos/';

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
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

module.exports = router;