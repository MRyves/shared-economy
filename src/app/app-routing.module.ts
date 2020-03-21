import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
        {
            path: '',
            loadChildren: () => import('./se-module/shared-economy-routing.module').then(m => m.SharedEconomyRoutingModule)
        },
        {
            path: 'login',
            loadChildren: () => import('./account-module/account-routing.module').then(m => m.AccountRoutingModule),
        },
        {
            path: 'register',
            redirectTo: 'login'
        }
    ]
;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
