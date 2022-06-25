import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LenderDetailComponent } from './lender-detail.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '',
            component: LenderDetailComponent
        }]),
    ],
    exports: [LenderDetailComponent],
    declarations: [LenderDetailComponent],
    providers: [],
})
export class LenderDetailModule { }
