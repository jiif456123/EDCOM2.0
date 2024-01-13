const userController = require('../components/User/controller/user.controller');
const presupuestoController = require('../components/Presupuesto/controller/presupuesto.controllers');
const ingresosController = require('../components/Ingresos/controller/ingresos.controller');
const egresosController = require('../components/Egresos/controller/egresos.controllers');
const loginController = require('../components/login/loginController')
const chatController = require('../components/chat/controller/chat.controller')
const messageController = require('../components/message/controller/message.controller')
const depController = require('../components/departamento/controller/departamento.controller');
const reservaController = require('../components/Reserva/controller/reserva.controller');
const areaComunService = require('../components/Area Comun/controller/areacomun.controller');
const registrarPaqueteController = require('../components/Registrar Paquete/controller/registrarpaquete.controller');
const resiController = require('../components/Resi/controller/resi.controller')
const visitaController = require('../components/Visita/controller/visita.controller')
const documentoController = require('../components/Documento/controller/documento.controller')
const pagoController = require('../components/pago/controller/pago.controller')
const contrasenaController = require('../components/contrasena/contrasena.controller')

const rutas = function(app) {
    app.use('/user', userController)
    app.use('/presupuesto', presupuestoController)
    app.use('/ingresos', ingresosController)
    app.use('/egresos', egresosController)
    app.use('/login', loginController)
    app.use('/chat', chatController)
    app.use('/message', messageController)
    app.use('/departamento', depController)
    app.use('/reserva', reservaController)
    app.use('/areacomun', areaComunService)
    app.use('/paquete', registrarPaqueteController)
    app.use('/resi', resiController)
    app.use('/visita', visitaController)
    app.use('/documento', documentoController)
    app.use('/pago', pagoController)
    app.use('/contrasena', contrasenaController)
}

module.exports = rutas;