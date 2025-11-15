import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const auhtGuard: CanActivateFn = (route, state) => {
  inject(Router).navigate(['/login']);
  return false;
};

