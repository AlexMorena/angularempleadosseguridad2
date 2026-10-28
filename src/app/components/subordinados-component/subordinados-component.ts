import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service-empleados';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit{
  public subordinados!: Array<Empleado>

  constructor(
    private _service: ServiceEmpleados,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ){}

  volverMenu(): void {
    this._router.navigate(['/menu']);
  }

  ngOnInit(): void {
    this._service.cargarSubordinados().subscribe(data => {
      this.subordinados = data;
      this._cdr.detectChanges();
    })
  }

}
