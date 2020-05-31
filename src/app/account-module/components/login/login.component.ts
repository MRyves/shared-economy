import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Credentials} from '../../models/credentials';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;

    @Output()
    outCredentials = new EventEmitter<Credentials>();

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
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
            email: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
        });

        this.submitted = false;
    }

}
