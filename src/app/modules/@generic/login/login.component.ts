import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
    phoneNumber!: number
    password!: string

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() { }

    onSubmit() {
        if(!this.phoneNumber || !this.password) {
            alert('All Fields are Requied')
            return
        }

        const data = {
            phoneNumber: this.phoneNumber,
            password: this.password
        }
        this.authService.login(data).subscribe((res) => {
            if(res) {
                this.router.navigate(['dashboard'])
            }
        })
    }
}