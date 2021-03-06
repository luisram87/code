import { Component, OnInit } from '@angular/core';

// El interface Lista de Inicio, delomita el tipo de objeto
interface Listainicio {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  // El tupo Listainicio, está declarado arriba en el interface

  listadeinicio: Listainicio [] = [
    {
      icon: 'rainy-outline',
      name: 'Pronóstico',
      redirectTo: '/pronostico', // solo se escribe "barra" pagina /pagina
    },
    {
      icon: 'newspaper-outline',
      name: 'Noticias',
      redirectTo: '/noticias', // solo se escribe "barra" pagina /pagina
    },
    {
      icon: 'megaphone-outline',
      name: 'Reportes',
      redirectTo: '/reportes', // solo se escribe "barra" pagina /pagina
    },
    {
      icon: 'log-out-outline',
      name: 'Servicios - Alcaldía Iztapalapa',
      redirectTo: '/solicitudes', // solo se escribe "barra" pagina /pagina
    },
    {
      icon: 'map-outline',
      name: 'Mapas colaborativos',
      redirectTo: '/mapas', // solo se escribe "barra" pagina /pagina
    },
    {
      icon: 'chatbubbles-outline',
      name: 'Chat',
      redirectTo: '/chat', // solo se escribe "barra" pagina /pagina
    },
    {
      icon: 'add-outline',
      name: 'Información',
      redirectTo: '/informacion', // solo se escribe "barra" pagina /pagina
    },
    {
      icon: 'people-outline',
      name: 'Vecinos colaboradores',
      redirectTo: '/vecinos', // solo se escribe "barra" pagina /pagina
    },
    
    {
      icon: 'thunderstorm-outline',
      name: 'Inundaciones históricas',
      redirectTo: '/inund-historico', // solo se escribe "barra" pagina /pagina
    },
    
    {
      icon: 'play-back-outline',
      name: 'Acciones previas ',
      redirectTo: '/action-pre', // solo se escribe "barra" pagina /pagina
    },
    {
      icon: 'speedometer-outline',
      name: 'Acciones durante la inundación',
      redirectTo: '/action-during', // solo se escribe "barra" pagina /pagina
    },
    {
      icon: 'play-forward-outline',
      name: 'Acciones posteriores',
      redirectTo: '/action-after', // solo se escribe "barra" pagina /pagina
    },
    {
      icon: 'documents-outline',
      name: 'Leyes, reglamentos y normas',
      redirectTo: '/leyes-rn', // solo se escribe "barra" pagina /pagina
    },
    {
      icon: 'list-outline',
      name: 'Protocolos de actuación',
      redirectTo: '/protocolos', // solo se escribe "barra" pagina /pagina
    },

    {
      icon: 'information-circle-outline',
      name: 'Acerca de InundApp',
      redirectTo: '/about', // solo se escribe "barra" pagina /pagina
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
