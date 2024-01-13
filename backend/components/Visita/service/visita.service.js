var Visita = require('../model/visita.model');

var listarVisita = () => {

    let query = {
        estado: { $ne: 3 }
    };
    return new Promise((resolve, reject) => {
        Visita.find(query).exec((err, listarVisita) => {
            if (err) reject(err);
            resolve(listarVisita);
        });
    });
};

var listarVisitaId = (id) => {

    return new Promise((resolve, reject) => {

        Visita.findById(id)
            .exec((err, visita) => {
                if (err) reject(err);

                console.log(visita)
                resolve(visita);
            })

    });
};

var registarVisita = (visita) => {

    let objVisita = new Visita({
        nombres: visita.nombres,
        apellidos: visita.apellidos,
        nacompanantes: visita.nacompanantes,
        departamento: visita.departamento,
        fechaProgramada: visita.fechaProgramada,
        horaProgramada: visita.horaProgramada,
        estado: visita.estado,
    });

    return new Promise((resolve, reject) => {
        objVisita.save(objVisita, (err, visita) => {
            if (err) reject(err);
            resolve(visita);
        });
    });
};


var modificarVisita = (id, visita) => {

    console.log(visita, ' [visita]');

    return new Promise((resolve, reject) => {
        Visita.findByIdAndUpdate(id, visita, (err, visitas) => {

            if (err) {
                reject(err);
            }
            resolve(visitas);
        });
    });
};


var eliminarVisita = (id) => {
    return new Promise((resolve, reject) => {
        Visita.remove({ _id: id }, (err, visitas) => {
            if (err) { reject(err); }
            resolve(visitas);
        })
    })
}

module.exports = {
    listar: listarVisita,
    registrar: registarVisita,
    listarID: listarVisitaId,
    modificar: modificarVisita,
    eliminar: eliminarVisita,
};