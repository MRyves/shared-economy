import {ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Offer} from '../../core/models/offer';

@Component({
    selector: 'app-offer-modal',
    templateUrl: './offer-dialog.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferDialogComponent implements OnInit {
    offerForm: FormGroup;
    isNew: boolean;

    constructor(
        private dialogRef: MatDialogRef<OfferDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public offer: Offer,
        private fb: FormBuilder) {
        this.isNew = !this.offer.id;
    }

    ngOnInit() {
        this.offerForm = this.fb.group({
            title: [this.offer.title, [Validators.required]],
            description: [this.offer.description, [Validators.required]],
            price: [this.offer.price, [Validators.required, Validators.min(0.05)]],
            city: [this.offer.city, [Validators.required]]
        });
    }

    private get fc() {
        return this.offerForm.controls;
    }

    cancel(): void {
        this.dialogRef.close();
    }

    save(): void {
        this.dialogRef.close({
            ...this.offer,
            title: this.fc.title.value,
            description: this.fc.description.value,
            price: this.fc.price.value,
            city: this.fc.city.value
        } as Offer);
    }

}
