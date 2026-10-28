import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Inyectamos el Router para redirigir si es necesario
  const router = inject(Router);
  
  // Comprobamos si existe el token en el almacenamiento
  const token = localStorage.getItem('authToken');

  if (token) {
    // Si hay token, devolvemos true y le dejamos entrar a la ruta
    return true;
  } else {
    // Si no hay token, lo mandamos al Login de una patada y devolvemos false
    router.navigate(['/']);
    return false;
  }
};