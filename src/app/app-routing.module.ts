import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'pronostico',
    loadChildren: () => import('./pages/pronostico/pronostico.module').then( m => m.PronosticoPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./pages/reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  {
    path: 'mapas',
    loadChildren: () => import('./pages/mapas/mapas.module').then( m => m.MapasPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contactos-interes',
    loadChildren: () => import('./pages/contactos-interes/contactos-interes.module').then( m => m.ContactosInteresPageModule)
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./pages/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  },
  {
    path: 'vecinos',
    loadChildren: () => import('./pages/vecinos/vecinos.module').then( m => m.VecinosPageModule)
  },
  {
    path: 'acciones',
    loadChildren: () => import('./pages/acciones/acciones.module').then( m => m.AccionesPageModule)
  },
  {
    path: 'inund-historico',
    loadChildren: () => import('./pages/inund-historico/inund-historico.module').then( m => m.InundHistoricoPageModule)
  },
  {
    path: 'protocolos',
    loadChildren: () => import('./pages/protocolos/protocolos.module').then( m => m.ProtocolosPageModule)
  },
  {
    path: 'leyes-rn',
    loadChildren: () => import('./pages/leyes-rn/leyes-rn.module').then( m => m.LeyesRNPageModule)
  },
  {
    path: 'action-pre',
    loadChildren: () => import('./pages/action-pre/action-pre.module').then( m => m.ActionPrePageModule)
  },
  {
    path: 'action-during',
    loadChildren: () => import('./pages/action-during/action-during.module').then( m => m.ActionDuringPageModule)
  },
  {
    path: 'action-after',
    loadChildren: () => import('./pages/action-after/action-after.module').then( m => m.ActionAfterPageModule)
  },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
