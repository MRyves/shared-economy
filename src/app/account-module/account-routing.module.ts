import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountContainerComponent} from './container/account-container/account-container.component';

const routes: Routes = [
    {
        path: '',
        component: AccountContainerComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {
}
