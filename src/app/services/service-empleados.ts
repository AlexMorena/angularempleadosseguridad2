import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { Empleado } from "../models/empleado";

@Injectable()

export class ServiceEmpleados{
    url = environment.urlApiEmpleados;
    constructor(
        private _http: HttpClient
    ){}

    obtenerToken(){
        return localStorage.getItem('authToken');
    }

    cargarPerfil(): Observable<Empleado>{
        let token = this.obtenerToken();
        let headers = new HttpHeaders().set("Authorization", "Bearer " + token);
        let request = "api/empleados/perfilempleado";

        return this._http.get<Empleado>(this.url + request, { headers });
    }

    cargarEmpleados(): Observable<Empleado[]>{
        let token = this.obtenerToken();
        let headers = new HttpHeaders().set("Authorization", "Bearer " + token);
        let request = "api/empleados";

        return this._http.get<Empleado[]>(this.url + request, { headers });
    }

    cargarSubordinados(): Observable<Empleado[]>{
        let token = this.obtenerToken();
        let headers = new HttpHeaders().set("Authorization", "Bearer " + token);
        let request = "api/empleados/subordinados";

        return this._http.get<Empleado[]>(this.url + request, { headers });
    }

    iniciarSesion(usuario: string, passw: string): Observable<any>{
        let body = {
            userName: usuario,
            password: passw
        }
        let request = "auth/login";

        return this._http.post(this.url + request, body)
    }
}