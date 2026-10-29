import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthEmpleados } from '../../services/service-auth-empleados';
import { ServiceSignal } from '../../services/service-signal'; // Asegúrate de importarlo

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  // 1. Inyectamos los servicios usando la sintaxis moderna (como tu profesor)
  private _serviceAuth: ServiceAuthEmpleados = inject(ServiceAuthEmpleados);
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);
  
  // 2. Exponemos los signals a la vista HTML para que el menú cambie en tiempo real
  public usuario = this._serviceAuth.user;
  public contador = this._serviceSignal.contador;

  constructor(private _router: Router) {}

  cerrarSesion() {
    // 3. El servicio se encarga de borrar el sessionStorage y vaciar el Signal
    this._serviceAuth.cerrarSesionEmpleado();

    // 4. Redirigimos al usuario al Home o al Login
    this._router.navigate(['/']);
  }
}