import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service-empleados';

@Component({
  selector: 'app-empleados-component',
  standalone: false,
  styleUrl: './empleados-component.css',
  templateUrl: './empleados-component.html',
})
export class EmpleadosComponent implements OnInit{
  public empleados!: Array<Empleado>;

  constructor(
    private _service: ServiceEmpleados,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ){}

  volverMenu(): void {
    this._router.navigate(['/menu']);
  }

  ngOnInit(): void {
    this._service.cargarEmpleados().subscribe(data => {
      this.empleados = data;
      this._cdr.detectChanges();
    })
  }
}
