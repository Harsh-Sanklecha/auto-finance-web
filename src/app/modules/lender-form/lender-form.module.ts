import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { LenderFormComponent } from './lender-form.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        MatStepperModule,
        MatButtonModule,
        RouterModule.forChild([{
            path: '',
            component: LenderFormComponent
        }]),
    ],
    exports: [LenderFormComponent],
    declarations: [LenderFormComponent],
    providers: [],
})
export class LenderFormModule { }
