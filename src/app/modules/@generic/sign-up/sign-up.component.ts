import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrls: ['sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
    name!: string
    phoneNumber!: number
    email!: string
    password!: string
    confirmPassword!: string
    companyName!: string

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {}

    onSubmit() {
        if(!this.name || !this.phoneNumber || !this.confirmPassword) {
            alert('All Fields are required')
            return
        }
        const data = {
            name: this.name,
            phoneNumber: this.phoneNumber,
            email: this.email,
            password: this.confirmPassword,
        }
        this.authService.createUser(data, this.companyName).subscribe((res) => {
            console.log(res)
        })
    }
}