import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';
import { DriverService } from '../lender-detail/lender-detail.service';
import { ILenderDetails, IGuarantor, ILenderAccount } from './lender.model';

@Component({
    selector: 'app-lender-form',
    templateUrl: 'lender-form.component.html',
    styleUrls: ['lender-form.component.scss']
})



export class LenderFormComponent implements OnInit {
    account: ILenderAccount = {
        loanAmount: 0,
        interest: 2,
        months: 36
    }

    lenderDetails: ILenderDetails = {
        name: '',
        number: 0,
        autoNumber: '',
        address: '',
        aadharNumber: '',
        licenseNumber: ''
    }

    guarantorDetails: IGuarantor = {
        name: '',
        number: 0
    }

    emi: any[] = []
    totalEMI: number = 0

    constructor(
        private driverService: DriverService,
        private router: Router
    ) { }

    ngOnInit() { }

    calculateEMI() {
        if (this.account.interest) {
            const monthlyInterest = this.account.interest / 100
            const result =
                Math.ceil(this.account.loanAmount * monthlyInterest * (Math.pow((1 + monthlyInterest), this.account.months) / (Math.pow((1 + monthlyInterest), this.account.months) - 1)))

            let currentDate = new Date()
            currentDate.setMonth(currentDate.getMonth() -2)
            let emiSum: number = 0
            // starting EMI from next month
            for (let i = 1; i <= this.account.months; i++) {
                this.emi.push({
                    amount: result,
                    dueDate: new Date(currentDate.setMonth(currentDate.getMonth() + 1))
                })
                emiSum += result
            }

            this.totalEMI = emiSum
        }
    }

    saveFinancerAndEMI() {
        const data = {
            lender: {
                ...this.lenderDetails,
                guarantor: this.guarantorDetails,
                account: this.account
            },
        }
        this.driverService.createDriverAndEMI(data).subscribe(res => {
            if(res.success) {
                this.router.navigateByUrl(`dashboard/driver/${res.data}`)
            }
        })
    }
}