import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service-empleados';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { ServiceAuthEmpleados } from '../../services/service-auth-empleados';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild("cajausuario") cajaUsuario!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router,
    private _serviceAuth: ServiceAuthEmpleados
  ){}

  login() {
    let userName = this.cajaUsuario.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let login = new Login(userName, password);

    this._service.iniciarSesion(login).subscribe( response =>{
      this._serviceAuth.iniciarSesionEmpleado(response.response);
      this._router.navigate(['/']);
    })
  }

  

  volverMenu(): void {
    this._router.navigate(['/']);
  }
}
