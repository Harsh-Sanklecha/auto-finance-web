import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanActivate {
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
            this.router.navigate(['/dashboard'])
            return false
        } else {
            return true
        }
    }
}
