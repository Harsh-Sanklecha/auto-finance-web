import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule.forChild([{
            path: '',
            component: DashboardComponent
        }]),
        MatButtonModule
    ],
    exports: [
        DashboardComponent
    ],
    declarations: [DashboardComponent],
    providers: [],
})
export class DashboardModule { }
