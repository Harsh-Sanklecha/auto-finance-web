import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILender } from '../lender-form/lender.model';
import { DriverService } from './lender-detail.service';

@Component({
    selector: 'app-lender-detail',
    templateUrl: 'lender-detail.component.html',
    styleUrls: ['lender-detail.component.scss']
})

export class LenderDetailComponent implements OnInit {
    id!: string;
    lenderDetails!: ILender
    emi: any[] = []
    constructor(
        private router: ActivatedRoute,
        private driverService: DriverService
    ) { }

    ngOnInit() {
        this.router.paramMap.subscribe(params => {
            this.id = params.get('driver-id') || ''
        })
        
        this.driverService.getLender(this.id).subscribe(res => {
            if(res.success) {
                this.lenderDetails = res.data.driver
                this.emi = res.data.EMI
            }
        })
    }
}