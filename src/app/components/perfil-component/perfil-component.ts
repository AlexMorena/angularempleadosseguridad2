import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service-empleados';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit{
  public empleado!: Empleado;

  constructor(
    private _service: ServiceEmpleados,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ){}

  volverMenu(): void {
    this._router.navigate(['/menu']);
  }

  ngOnInit(): void {
    this._service.cargarPerfil().subscribe(data => {
      this.empleado = data;
      this._cdr.detectChanges();
    })
  }


}
