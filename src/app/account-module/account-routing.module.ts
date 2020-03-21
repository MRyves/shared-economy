import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountContainerComponent} from './container/account-container/account-container.component';

const routes: Routes = [
    {
        path: 'login',
        component: AccountContainerComponent,
        data: {showNavigation: false}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {
}
