import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { EmpleadosComponent } from './components/empleados-component/empleados-component';
import { AuthGuard } from './guards/auth.guard';
import { ContadorComponent } from './components/contador-component/contador-component';
import { HomeComponent } from './components/home-component/home-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'subordinados', component: SubordinadosComponent, canActivate: [AuthGuard] },
  { path: 'empleados', component: EmpleadosComponent, canActivate: [AuthGuard] },
  { path: 'contador', component: ContadorComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
