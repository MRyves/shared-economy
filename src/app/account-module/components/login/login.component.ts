import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Credentials} from '../../models/credentials';
import {AlertService} from '../../../core/services/alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;

    @Output()
    outCredentials = new EventEmitter<Credentials>();

    constructor(private formBuilder: FormBuilder, private alertService: AlertService) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    loginSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.outCredentials.emit({
            username: this.loginForm.get('username').value,
            password: this.loginForm.get('password').value
        });

        this.submitted = false;
    }

}
