import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss'],
})
export class LogginComponent implements OnInit {
  formLoggin: FormGroup;

  Entrar() {
    this._userService
      .login(this.formLoggin.value)
      .then((Response: any) => {
        console.log(Response);
      })
      .catch((error) => console.log(error));
  }

  constructor(private _userService: ServiceService) {
    this.formLoggin = new FormGroup({
      email: new FormControl(''),
      contraseña: new FormControl(''),
    });
  }

  ngOnInit() {}
}
