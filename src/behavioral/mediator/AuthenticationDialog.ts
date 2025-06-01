import { Mediator } from './Mediator';
import { Button, Textbox, Checkbox } from './Components';

export class AuthenticationDialog implements Mediator {
    private title: string;
    private loginOrRegisterChkBx: Checkbox;
    private loginUsername: Textbox;
    private loginPassword: Textbox;
    private registrationUsername: Textbox;
    private registrationPassword: Textbox;
    private registrationEmail: Textbox;
    private okBtn: Button;
    private cancelBtn: Button;

    constructor() {
        this.title = 'Authentication Dialog';

        // Create components and set this dialog as their mediator
        this.loginOrRegisterChkBx = new Checkbox();
        this.loginUsername = new Textbox();
        this.loginPassword = new Textbox();
        this.registrationUsername = new Textbox();
        this.registrationPassword = new Textbox();
        this.registrationEmail = new Textbox();
        this.okBtn = new Button();
        this.cancelBtn = new Button();

        // Set mediator for all components
        this.loginOrRegisterChkBx.setMediator(this);
        this.loginUsername.setMediator(this);
        this.loginPassword.setMediator(this);
        this.registrationUsername.setMediator(this);
        this.registrationPassword.setMediator(this);
        this.registrationEmail.setMediator(this);
        this.okBtn.setMediator(this);
        this.cancelBtn.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (sender === this.loginOrRegisterChkBx && event === 'check') {
            if (this.loginOrRegisterChkBx.isChecked()) {
                this.title = 'Log in';
                console.log('Switched to login mode');
            } else {
                this.title = 'Register';
                console.log('Switched to registration mode');
            }
        }

        if (sender === this.okBtn && event === 'click') {
            if (this.loginOrRegisterChkBx.isChecked()) {
                console.log('Attempting to log in...');
                console.log(`Username: ${this.loginUsername.getText()}`);
                console.log(`Password: ${this.loginPassword.getText()}`);
            } else {
                console.log('Attempting to register...');
                console.log(`Username: ${this.registrationUsername.getText()}`);
                console.log(`Password: ${this.registrationPassword.getText()}`);
                console.log(`Email: ${this.registrationEmail.getText()}`);
            }
        }

        if (sender === this.cancelBtn && event === 'click') {
            console.log('Dialog cancelled');
        }
    }

    // Getter methods for testing
    public getLoginOrRegisterCheckbox(): Checkbox {
        return this.loginOrRegisterChkBx;
    }

    public getLoginUsername(): Textbox {
        return this.loginUsername;
    }

    public getLoginPassword(): Textbox {
        return this.loginPassword;
    }

    public getRegistrationUsername(): Textbox {
        return this.registrationUsername;
    }

    public getRegistrationPassword(): Textbox {
        return this.registrationPassword;
    }

    public getRegistrationEmail(): Textbox {
        return this.registrationEmail;
    }

    public getOkButton(): Button {
        return this.okBtn;
    }

    public getCancelButton(): Button {
        return this.cancelBtn;
    }

    public getTitle(): string {
        return this.title;
    }
}
