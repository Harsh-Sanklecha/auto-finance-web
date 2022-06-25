import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    currentUser: any

    constructor(
        private router: Router,
        private authService: AuthService
    ) {
        this.authService.currentUser.subscribe(res => {
            this.currentUser = res    
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.currentUser) {
            return true
        } else {
            this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
            return false
        }
    }
}
