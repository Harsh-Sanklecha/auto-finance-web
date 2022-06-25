import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MainRoutingModule } from './layout.router';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MainRoutingModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [],
    declarations: [
        MainLayoutComponent
    ],
    providers: [],
})
export class MainLayoutModule { }
