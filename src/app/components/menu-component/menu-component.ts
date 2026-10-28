import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  constructor(private _router: Router) {}

  cerrarSesion() {
    // 1. Eliminamos el token de la memoria del navegador
    localStorage.removeItem('authToken');

    // (Si en el futuro se usa sessionStorage, el comando es: sessionStorage.removeItem('authToken'))

    // 2. Redirigimos al usuario a la pantalla de Login
    this._router.navigate(['/']);
  }
}
