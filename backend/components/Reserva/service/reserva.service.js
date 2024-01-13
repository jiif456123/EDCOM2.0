var reserva = require('../model/reserva.model');
var listarreserva = () => {
    return new Promise((resolve, reject) => {
        reserva.find({}).populate('persona areacomun').exec((err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

var actualizarReserva = (reserva1, estado) => {
    let id = reserva1
    let estado1 = {
        estado: estado,
    }
    return new Promise((resolve, reject) => {
        reserva.findByIdAndUpdate(id, estado1)
            .exec((err, data) => {
                if (err) {
                    console.log(err);

                    reject(err);
                }
                console.log(data);
                resolve(data)
            })
    })
}

var registrarReserva = (reserva1) => {
    let query = new reserva({
        nombre: reserva1.nombre,
        areacomun: reserva1.areacomun,
        persona: reserva1.persona,
        fechaInicio: reserva1.fechaInicio,
        fechaFin: reserva1.fechaFin,
        estado: 2
    })
    return new Promise((resolve, reject) => {
        query.save(query, (err, reser) => {
            if (err) reject(err);
            console.log(err);
            resolve(reser);
        });
    })
}


module.exports = {
    listar: listarreserva,
    actualizar: actualizarReserva,
    registrar: registrarReserva,
}