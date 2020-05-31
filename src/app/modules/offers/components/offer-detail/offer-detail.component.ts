import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewEncapsulation
} from '@angular/core';
import {Offer} from '../../../../core/models/offer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-offer-detail',
    templateUrl: './offer-detail.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferDetailComponent implements OnInit {

    private offerSubject = new BehaviorSubject<Offer>(null);

    @Input()
    set offer(offer: Offer) {
        this.offerSubject.next(offer);
    }

    get offer() {
        return this.offerSubject.getValue();
    }

    @Input()
    isEligibleForChange = false;

    @Input()
    actionButtonText = 'UPDATE!';

    @Output()
    outOfferUpdate = new EventEmitter<Offer>();
    offerForm: FormGroup;
    submitted = false;

    constructor(private fb: FormBuilder, private spinnerService: NgxSpinnerService) {
    }

    ngOnInit(): void {
        this.spinnerService.show();
        this.offerForm = this.fb.group({
            title: ['', [Validators.required]],
            description: ['', [Validators.required]],
            price: ['', [Validators.required, Validators.min(0.05)]],
            city: ['', [Validators.required]]
        });

        this.offerSubject.subscribe(offer => {
            if (offer) {
                this.offerForm.patchValue(offer, {onlySelf: true, emitEvent: false});
                this.spinnerService.hide();
            }
        });
    }

    updateOffer() {
        if (this.offerForm.valid) {
            this.outOfferUpdate.emit({
                ...this.offer,
                title: this.f.title.value,
                description: this.f.description.value,
                city: this.f.city.value,
                price: +this.f.price.value
            });
            this.submitted = true;
        }
    }

    private get f() {
        return this.offerForm.controls;
    }

}
