import { computed, inject, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ServiceSignal {
  //recuperamos nuestro servicio utilizando inject
  //para que sea SINGLETON
  //Esta variable apunta al contador

  public contador = signal<number>(0);

  public doble = computed(() => this.contador() * 2);

  reiniciarContador(): void {
    this.contador.set(0);
  }

  incrementarContador(): void {
    this.contador.update(value => value + 1);
  }
}
