import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../shared/services/login/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardChild implements CanActivateChild {
  constructor(
    private loginService: LoginService,
    private router: Router) { }

    canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | Observable<boolean> {
        if(this.loginService.usuarioEstaAutenticado()) return true;

        this.router.navigate(['/login']);
        return false;
    }
}
