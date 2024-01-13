const jwt = require('jsonwebtoken');
const key = require('./key');

//key hola

//tiempo de expiracion: 60

//npm = https://www.npmjs.com/package/jsonwebtoken

const token = (data) => {
    return jwt.sign(data, key.seed, key.time)
}

module.exports = token;
