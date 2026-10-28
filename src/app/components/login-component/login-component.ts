import { ChangeDetectorRef, Component } from '@angular/core';
import { ServiceEmpleados } from '../../services/service-empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  public usuario!: string;
  public password!: string;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router,
  ){}

  login() {
    this._service.iniciarSesion(this.usuario, this.password).subscribe( response =>{
      let token = response.response;
      localStorage.setItem('authToken', token);
      this._router.navigate(['/menu']);
    })
  }

  volverMenu(): void {
    this._router.navigate(['/menu']);
  }
}
