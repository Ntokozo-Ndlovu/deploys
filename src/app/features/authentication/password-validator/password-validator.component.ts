import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { letterRegex, numberRegex, specialCharacterRegex } from 'src/app/core/helpers/constants';

@Component({
    selector: 'app-password-validator',
    templateUrl: './password-validator.component.html',
    styleUrls: ['./password-validator.component.scss'],
})
export class PasswordValidatorComponent implements OnInit {
    @Input() get passwordInput(): string {
        return this._passwordInput;
    }

    set passwordInput(value: string) {
        this._passwordInput = value;
        this.passwordValidLength = this._passwordInput.length > 7;
        this.passwordHasSymbol = this.specialCharPattern.test(this._passwordInput);
        this.passwordHasNumber = this.numberPattern.test(this._passwordInput);
        this.passwordHasLetter = this.letterPattern.test(this._passwordInput);

        this.$passwordValidity.emit(
            this.passwordValidLength && this.passwordHasSymbol && this.passwordHasNumber && this.passwordHasLetter,
        );
    }
    _passwordInput: string = '';

    @Output() $passwordValidity: EventEmitter<boolean> = new EventEmitter();

    passwordValidLength: boolean = false;
    passwordHasLetter: boolean = false;
    passwordHasNumber: boolean = false;
    passwordHasSymbol: boolean = false;

    specialCharPattern: RegExp = specialCharacterRegex;
    numberPattern: RegExp = numberRegex;
    letterPattern: RegExp = letterRegex;

    constructor() {}

    ngOnInit(): void {}
}
