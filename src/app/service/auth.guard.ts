import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  if (localStorage.getItem('UserType') == 'Admin') {

    return true;
  }

  return true;
}
