import { Injectable } from '@angular/core';
import { CanMatch, CanActivate, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanMatch, CanActivate {

  constructor( private authService: AuthService, private router: Router ) {}

  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {

    let auth: boolean = false;

    if( this.authService.auth || sessionStorage.getItem('auth') == 'true' ) {
      auth = true;
    }

    return auth;

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

    let auth: boolean = false;

    if( this.authService.auth || sessionStorage.getItem('auth') == 'true' ) {
      auth = true;
    }

    return auth;

  }
  
}