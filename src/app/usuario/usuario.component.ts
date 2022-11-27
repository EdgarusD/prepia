import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  providers: [Geolocation],
})
export class UsuarioComponent implements OnInit {
  constructor(private _userService: ServiceService, private geo: Geolocation, private router: Router) {}

  ngOnInit() {
    console.log(this._userService.usuarioLoggeado());
    this.locate();
  }

  latitud: any;
  longitud: any;

  locate() {
    this.geo
      .getCurrentPosition()
      .then((resp) => {
        this.latitud = resp.coords.latitude;
        this.longitud = resp.coords.longitude;
      })
      .catch((error) => {
        console.log('Error al obtener ubicación', error);
        this.latitud = '-';
        this.longitud = '-';
      });
  }

  logOut(){
    this._userService.salir().then(()=> {this.router.navigate(['/loggin'])}).catch(error=>console.log("error al salir"))
  }
}
