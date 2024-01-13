
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
var Usuario = require('../User/model/user.model');
var SEED = require('../../config/key');
//==================================================
// Login Normal
//==================================================
router.post('/', (req, res) => {

    var body = req.body;

    let query = {
        username: { $eq: body.username }
    }

    Usuario.findOne(query).populate('departamento').exec((err, usuarioBD) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: `Error al buscar Usuarios`,
                error: err
            });
        };


        if (!usuarioBD) {
            return res.status(400).json({
                ok: false,
                mensaje: `Credenciales incorrectas - username`,
                error: err
            });
        };

        let comparacion = bcrypt.compareSync(body.password, usuarioBD.password);

        if (!comparacion) {

            return res.status(400).json({
                ok: false,
                mensaje: `Credenciales incorrectas - password`,
                error: err
            });
        };

        usuarioBD.password = '#'

        var token = jwt.sign({ usuario: usuarioBD }, SEED.seed, SEED.time);
        res.status(200).json({
            ok: true,
            usuario: usuarioBD,
            token: token,
            id: usuarioBD._id,
            rol: usuarioBD.rol
        });
    });
});

module.exports = router;