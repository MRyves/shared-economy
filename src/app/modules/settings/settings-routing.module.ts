import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../core/auth/auth.guard';
import {ProfileContainerComponent} from './container/profile-container/profile-container.component';


const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {path: '', component: ProfileContainerComponent, data: {title: 'Edit your profile'}}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule {
}
