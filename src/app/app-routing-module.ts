import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { EmpleadosComponent } from './components/empleados-component/empleados-component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "menu", component: MenuComponent, canActivate: [authGuard]},
  { path: "perfil", component: PerfilComponent, canActivate: [authGuard]},
  { path: "subordinados", component: SubordinadosComponent, canActivate: [authGuard]},
  { path: "empleados", component: EmpleadosComponent, canActivate: [authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
