import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Utils } from 'src/utils/utils';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = sessionStorage.getItem('access-token');
    if (!token) {
      console.log('1');
      this.router.navigateByUrl('');
      return false;
    } else {
      if (!Utils.tokenExpired(token)) {
        console.log('2');
        return true;
      } else {
        console.log('3');
        this.router.navigateByUrl('');
        return false;
      }
    }
  }
}