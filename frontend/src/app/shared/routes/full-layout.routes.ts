import { Routes } from '@angular/router';
import { LoginGuard } from 'src/app/services/guard/login.guard';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        canActivate: [LoginGuard],
        path: 'administrarperfiles',
        loadChildren: () => import('../../Administrar_Perfiles/administrar-perfiles.module').then(m => m.AdministrarPerfilesModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'gestionarareacomun',
        loadChildren: () => import('../../Gestionar_Area_Comun/gestionar-area-comun.module').then(m => m.GestionarAreaComunModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'visualizarcalendario',
        loadChildren: () => import('../../Visualizar_Calendario/visualizar-calendario.module').then(m => m.VisualizarCalendarioModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'solicitarareacomun',
        loadChildren: () => import('../../Solicitar_Area_Comun/solicitar-area-comun.module').then(m => m.SolicitarAreaComunModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'visualizardocumentos',
        loadChildren: () => import('../../Visualizar_Documentos/visualizar-documentos.module').then(m => m.VisualizarDocumentosModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'gestionardocumentos',
        loadChildren: () => import('../../Gestionar_Documentos/gestionar-documentos.module').then(m => m.GestionarDocumentosModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'publicardocumentos',
        loadChildren: () => import('../../Publicar_Documentos/publicar-documentos.module').then(m => m.PublicarDocumentosModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'registrarpagosdeservicios',
        loadChildren: () => import('../../Registrar_Pagos_de_Servicios/registrar-pago-de-servicios.module').then(m => m.RegistrarPagodeServiciosModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'gestionarpagosdeservicios',
        loadChildren: () => import('../../Gestionar_Pagos_de_Servicios/gestionar-pagos-de-servicios.module').then(m => m.GestionarPagosdeServiciosModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'administrarvisita',
        loadChildren: () => import('../../Administrar_Visita/administrar-visita.module').then(m => m.AdministrarVisitaModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'consultarvisita',
        loadChildren: () => import('../../Consultar_Visita/consultar-visita.module').then(m => m.ConsultarVisitaModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'generaralertas',
        loadChildren: () => import('../../Generar_Alertas/generar-alertas.module').then(m => m.GenerarAlertasModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'gestionarreporteeconomico',
        loadChildren: () => import('../../Gestionar_Reporte_Economico/gestionar-reporte-economico.module').then(m => m.GestionarReporteEconomicoModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'consultarresidentemoroso',
        loadChildren: () => import('../../Consultar_Residente_Moroso/consultar-residente-moroso.module').then(m => m.ConsultarResidenteMorosoModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'enviarmensaje',
        loadChildren: () => import('../../Enviar_Mensaje/enviar-mensaje.module').then(m => m.EnviarMensajeModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'cambiarcontraseña',
        loadChildren: () => import('../../Cambiar_Contraseña/cambiar-contraseña.module').then(m => m.CambiarContraseñaModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'presupuesto',
        loadChildren: () => import('../../Gestionar_Presupuesto/gestionar-presupuesto.module').then(m => m.GestionarPresupuestoModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'registrarpaquete',
        loadChildren: () => import('../../RegistrarPaquete/registrar-paquete-servicios.module').then(m => m.RegistrarPaqueteModule)
    },
    {
        canActivate: [LoginGuard],
        path: 'consultarpaquete',
        loadChildren: () => import('../../Consultar_Paquete/consultar-paquete.module').then(m => m.ConsultarPaqueteModule)
    },
    /* {
      path: 'nuevopresupuesto/:id',
      loadChildren: () => import('../../Gestionar_Presupuesto/RegistrarPresupuesto/registrar-presupuesto.module').then(m => m.RegistrarPresupuestoModule)
  }, */
];
