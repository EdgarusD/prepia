import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {

  constructor(private _userService:ServiceService) { 
    
  } 

  ngOnInit() {
    console.log(this._userService.usuarioLoggeado());
  }

}
