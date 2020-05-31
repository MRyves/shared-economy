import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OffersContainerComponent} from './container/offers-container/offers-container.component';
import {OffersDetailContainerComponent} from './container/offers-detail-container/offers-detail-container.component';
import {OffersNewContainerComponent} from './container/offers-new-container/offers-new-container.component';
import {AuthGuard} from '../../core/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {path: '', component: OffersContainerComponent, data: {title: 'Find your next Advert here!'}},
            {path: 'my', component: OffersContainerComponent, data: {title: 'Your offers are listed here!', onlyMyOffers: true}},
            {path: 'new', component: OffersNewContainerComponent, data: {title: 'Create a new Advert!'}},
            {path: ':offerId', component: OffersDetailContainerComponent, data: {title: 'Take a look at the offer!'}}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OffersRoutingModule {
}
