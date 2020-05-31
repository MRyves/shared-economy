import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AlertComponent} from './core/components/alert/alert.component';
import {AlertModule} from 'ngx-bootstrap';
import {SharedEconomyDb} from './core/services/shared-economy-db.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        AlertModule.forRoot(),
        HttpClientInMemoryWebApiModule.forRoot(SharedEconomyDb),
        AppRoutingModule,
    ],
    providers: [NgxSpinnerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
