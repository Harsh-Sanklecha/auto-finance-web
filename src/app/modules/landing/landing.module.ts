import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from '../@generic/sign-up/sign-up.component';
import { LandingComponent } from './landing.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../@generic/login/login.component';


@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        FormsModule,
        RouterModule.forChild([{
            path: '',
            component: LandingComponent
        }])
    ],
    exports: [LandingComponent],
    declarations: [
        LandingComponent,
        SignUpComponent,
        LoginComponent
    ],
    providers: [],
})
export class LandingModule { }