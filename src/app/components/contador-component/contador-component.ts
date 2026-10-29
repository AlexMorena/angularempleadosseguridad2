import { Component, computed, inject, signal } from '@angular/core';
import { ServiceSignal } from '../../services/service-signal';

@Component({
  selector: 'app-contador-component',
  standalone: false,
  styleUrl: './contador-component.css',
  templateUrl: './contador-component.html',
})
export class ContadorComponent {
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);
  public contador = this._serviceSignal.contador;
  public doble = this._serviceSignal.doble;

  //Podemos utilizar computed para acciones de un signal


  reiniciarContador(): void {
    this._serviceSignal.reiniciarContador();
  }

  incrementarContador(): void {
    this._serviceSignal.incrementarContador();
  }
}
