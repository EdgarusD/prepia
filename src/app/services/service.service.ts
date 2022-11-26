import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private auth: Auth) { }

  register({email, contraseña}:any){
    return createUserWithEmailAndPassword(this.auth, email, contraseña);
  }
}
