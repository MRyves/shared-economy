import {NgModule} from '@angular/core';
import {AccountRoutingModule} from './account-routing.module';
import {AccountContainerComponent} from './container/account-container/account-container.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [AccountContainerComponent, LoginComponent],
    imports: [
        SharedModule,
        AlertModule.forRoot(),
        AccountRoutingModule,
    ]
})
export class AccountModule {
}
