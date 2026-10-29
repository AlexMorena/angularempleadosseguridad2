import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import { Login } from '../models/login';

@Injectable()
export class ServiceEmpleados {
  url = environment.urlApiEmpleados;
  constructor(private _http: HttpClient) {}

  obtenerToken() {
    return sessionStorage.getItem("TOKEN");
  }

  cargarPerfil(): Observable<Empleado> {
    let token = this.obtenerToken();
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    let request = 'api/empleados/perfilempleado';

    return this._http.get<Empleado>(this.url + request, { headers });
  }

  cargarEmpleados(): Observable<Empleado[]> {
    let token = this.obtenerToken();
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    let request = 'api/empleados';

    return this._http.get<Empleado[]>(this.url + request, { headers });
  }

  cargarSubordinados(): Observable<Empleado[]> {
    let token = this.obtenerToken();
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    let request = 'api/empleados/subordinados';

    return this._http.get<Empleado[]>(this.url + request, { headers });
  }

  iniciarSesion(usuario: Login): Observable<any> {
    let request = 'auth/login';
    // Convertimos el objeto a JSON y añadimos los headers que usa tu profesor
    let json = JSON.stringify(usuario);
    let header = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.post(this.url + request, json, { headers: header });
  }
}
