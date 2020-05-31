import {NgModule} from '@angular/core';

import {SettingsRoutingModule} from './settings-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ProfileContainerComponent} from './container/profile-container/profile-container.component';
import {ProfileDetailComponent} from './components/profile-detail/profile-detail.component';


@NgModule({
    declarations: [ProfileContainerComponent, ProfileDetailComponent],
    imports: [
        SharedModule,
        SettingsRoutingModule
    ]
})
export class SettingsModule {
}
