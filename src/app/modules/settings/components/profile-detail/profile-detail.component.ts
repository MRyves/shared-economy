import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {User} from '../../../../core/models/user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-profile-detail',
    templateUrl: './profile-detail.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileDetailComponent implements OnInit {

    userForm: FormGroup;
    submitted = false;
    hasChanges = false;

    @Input()
    user: User;

    @Output()
    outUserEdit = new EventEmitter<User>();

    @Output()
    outDelete = new EventEmitter<void>();

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            username: new FormControl({value: this.user.username, disabled: true}, Validators.required),
            firstName: [this.user.firstName, [Validators.required]],
            lastName: [this.user.lastName, [Validators.required]],
            email: [this.user.email, [Validators.required, Validators.email]],
            bio: [this.user.bio]
        });

        this.userForm.valueChanges.subscribe(() => this.hasChanges = true);
    }

    get f() {
        return this.userForm.controls;
    }

    submit() {
        if (!this.hasChanges || !this.userForm.valid) {
            return;
        }

        this.submitted = true;

        this.outUserEdit.emit({
            ...this.user,
            firstName: this.f.firstName.value,
            lastName: this.f.lastName.value,
            email: this.f.email.value,
            bio: this.f.bio.value
        });
    }

    deleteProfile() {
        this.outDelete.emit();
    }


}
