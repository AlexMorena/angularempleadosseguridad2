import { Injectable, signal } from "@angular/core";
import { Empleado } from "../models/empleado";
import { ServiceEmpleados } from "./service-empleados"; // Importante para poder pedir el perfil

@Injectable({providedIn: 'root'})
export class ServiceAuthEmpleados{
    // Tu Signal global
    public user = signal<Empleado | null>(null);

    constructor(
        private _service: ServiceEmpleados
    ){}
    
    iniciarSesionEmpleado(token: string): void {
        // 1. Guardamos el token en sessionStorage
        sessionStorage.setItem("TOKEN", token);
        
        // 2. Pedimos el perfil a la API y actualizamos la "caja reactiva"
        this._service.cargarPerfil().subscribe(empleado => {
            this.user.set(empleado);
        });
    }

    cerrarSesionEmpleado(): void {
        // Vaciamos el token y el signal
        sessionStorage.removeItem("TOKEN");
        this.user.set(null);
    }
}