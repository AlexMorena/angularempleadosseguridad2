import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceEmpleados } from './services/service-empleados';
import { LoginComponent } from './components/login-component/login-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { EmpleadosComponent } from './components/empleados-component/empleados-component';

@NgModule({
  declarations: [
    App,
    LoginComponent,
    MenuComponent,
    PerfilComponent,
    SubordinadosComponent,
    EmpleadosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceEmpleados],
  bootstrap: [App],
})
export class AppModule {}
