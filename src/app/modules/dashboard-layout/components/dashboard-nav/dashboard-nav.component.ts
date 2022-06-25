import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard/dashboard.service';
import { ICompany } from 'src/app/shared/models/model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-dashboard-nav',
    templateUrl: 'dashboard-nav.component.html',
    styleUrls: ['dashboard-nav.component.scss']
})

export class DashboardNavComponent implements OnInit {
    companies: ICompany[] = []
    constructor(
        private dashboardService: DashboardService
    ) { }

    ngOnInit() {
        this.getAllFinancerCompanies()
    }

    getAllFinancerCompanies() {
        this.dashboardService.getAllFinancerCompanies().subscribe(res => {
            if(res.success) {
                this.companies = res.data
            }
        })
    }
}