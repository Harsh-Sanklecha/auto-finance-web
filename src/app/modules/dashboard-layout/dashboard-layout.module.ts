import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DashboardMainLayoutComponent } from './components/dashboard-main-layout/dashboard-main-layout.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { DashboardRoutingModule } from './dashboard-layout.router';
import { MatIconModule } from '@angular/material/icon';
import { LenderFormModule } from '../lender-form/lender-form.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DashboardRoutingModule,
        DashboardModule,
        LenderFormModule,
        MatIconModule
    ],
    exports: [],
    declarations: [
        DashboardMainLayoutComponent,
        DashboardNavComponent
    ],
    providers: [],
})
export class DashboardMainLayoutModule { }
