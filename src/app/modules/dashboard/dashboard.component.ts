import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/shared/models/model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    company!: ICompany
    todaysDate: Date = new Date()

    constructor(
        private authService: AuthService
    ) {
        this.authService.currentCompany.subscribe(res => this.company = res)
    }

    ngOnInit() { }
}