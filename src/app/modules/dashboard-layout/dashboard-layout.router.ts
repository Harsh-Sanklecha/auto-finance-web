import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { USER_STATUS } from 'src/app/shared/models/enums';
import { DashboardMainLayoutComponent } from './components/dashboard-main-layout/dashboard-main-layout.component';

export const routes: Routes = [{
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
},{
    path: 'form',
    canActivate: [AuthGuard],
    loadChildren: () => import('../lender-form/lender-form.module').then(m => m.LenderFormModule)
},{
    path: 'lender/:lender-id',
    canActivate: [AuthGuard],
    loadChildren: () => import('../lender-detail/lender-detail.module').then(m => m.LenderDetailModule)
}]

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: DashboardMainLayoutComponent,
            children: routes
        }])
    ],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }