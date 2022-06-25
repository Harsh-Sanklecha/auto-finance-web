import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/shared/guards/logged-in.guard';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

export const routes: Routes = [{
    path: '',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule)
}]

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: MainLayoutComponent,
            children: routes
        }])
    ],
    exports: [RouterModule]
})

export class MainRoutingModule { }