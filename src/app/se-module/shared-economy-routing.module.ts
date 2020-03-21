import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from './container/home-container/home-container.component';
import {AuthGuard} from '../core/auth/auth.guard';
import {ProfileContainerComponent} from './container/profile-container/profile-container.component';

const routes: Routes = [
    {path: '', component: HomeContainerComponent, canActivate: [AuthGuard]},
    {path: 'home', redirectTo: ''},
    {path: 'profile', component: ProfileContainerComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SharedEconomyRoutingModule {
}
