import { Component, OnInit } from '@angular/core';
interface Solicitudes {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  solicitudes: Solicitudes [] = [
      {
      icon: 'thunderstorm-outline',
      name: 'Desazolve de drenaje',
      redirectTo: '/desasolve',
    },
    {
      icon: 'leaf-outline',
      name: 'Recolección de ramas en vía pública',
      redirectTo: '/arboles',
    }
    // {
    //   icon: '',
    //   name: '',
    //   redirectTo: '/'
    // }
  ];

  constructor() { }

  ngOnInit() {
  }

}
