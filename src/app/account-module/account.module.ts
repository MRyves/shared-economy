import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccountRoutingModule} from './account-routing.module';
import {AccountContainerComponent} from './container/account-container/account-container.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [AccountContainerComponent, LoginComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AlertModule.forRoot(),
        AccountRoutingModule
    ]
})
export class AccountModule {
}
