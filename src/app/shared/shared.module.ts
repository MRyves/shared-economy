import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './layout/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {SectionHeaderComponent} from './layout/section-header/section-header.component';
import {OfferDialogComponent} from './offer-dialog/offer-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
    declarations: [NavigationComponent, SectionHeaderComponent, OfferDialogComponent, ConfirmDialogComponent],
    entryComponents: [OfferDialogComponent, ConfirmDialogComponent],
    exports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        NavigationComponent,
        NgxSpinnerModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
        FlexLayoutModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        MatDialogModule
    ]
})
export class SharedModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
    }
}
