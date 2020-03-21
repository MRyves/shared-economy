import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AccountModule} from './account-module/account.module';
import {SharedEconomyModule} from './se-module/shared-economy.module';
import { AlertComponent } from './core/components/alert/alert.component';
import {AlertModule} from 'ngx-bootstrap';
import {SharedEconomyDb} from './core/services/shared-economy-db.service';
import {HttpClientInMemoryWebApiModule, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent
    ],
    imports: [
        BrowserModule,
        AccountModule,
        SharedEconomyModule,
        AlertModule.forRoot(),
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(SharedEconomyDb),
        AppRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
