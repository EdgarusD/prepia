import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { sign } from 'crypto';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private auth: Auth) {}

  register({ email, contraseña }: any) {
    return createUserWithEmailAndPassword(this.auth, email, contraseña);
  }

  login({ email, contraseña }: any) {
    return signInWithEmailAndPassword(this.auth, email, contraseña);
  }

  usuarioLoggeado() {
    return this.auth.currentUser?.uid;
  }

  salir(){
    return signOut(this.auth);
  }
}
