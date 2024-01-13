import { Routes } from '@angular/router';
import { LoginGuard } from 'src/app/services/guard/login.guard';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const CONTENT_ROUTES: Routes = [
    {
        path: 'pages',
        loadChildren: () => import('../../pages/content-pages/content-pages.module').then(m => m.ContentPagesModule)

    },
    {
        path: 'auth',
        loadChildren: () => import('../../auth/auth.module').then(m => m.AuthModule)

    },
    {
        path: 'mostrardatos',
        loadChildren: () => import('../../MostrarDatos/mostrar-datos.module').then(m => m.MostrarDatosModule)

    },
    {    
        path: 'iniciarsesion',
        loadChildren: () => import('../../Iniciar_Sesion/iniciar-sesion.module').then(m => m.IniciarSesionModule)
    },
];