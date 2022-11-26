import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formRegistro: FormGroup;

  guardarDatos() {
    this._userService.register(this.formRegistro.value).then(Response=>{
      console.log(Response)
      this.router.navigate(['/usuario'])
    }).catch(error=>console.log("error"))
  }
  constructor( private _userService: ServiceService,  private router: Router ) {
    this.formRegistro = new FormGroup({
      email: new FormControl(''),
      contraseña: new FormControl(''),
    });
  }
}
