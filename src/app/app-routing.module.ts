import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
        {
            path: 'offers',
            loadChildren: () => import('./modules/offers/offers.module').then(m => m.OffersModule)
        },
        {
            path: 'settings',
            loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
        },
        {
            path: 'login',
            data: {showNavigation: false},
            loadChildren: () => import('./account-module/account.module').then(m => m.AccountModule),
        },
        {
            path: 'register',
            redirectTo: 'login'
        },
        {path: '', pathMatch: 'full', redirectTo: 'offers'},
        {path: '**', pathMatch: 'full', redirectTo: 'offers'}
    ]
;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
