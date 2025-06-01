import { BaseComponent } from './BaseComponent';

export class Button extends BaseComponent {
    public click(): void {
        console.log('Button clicked');
        this.mediator.notify(this, 'click');
    }
}

export class Textbox extends BaseComponent {
    private text: string = '';

    public setText(text: string): void {
        this.text = text;
        console.log(`Textbox text set to: ${text}`);
        this.mediator.notify(this, 'textChanged');
    }

    public getText(): string {
        return this.text;
    }
}

export class Checkbox extends BaseComponent {
    private checked: boolean = false;

    public check(): void {
        this.checked = !this.checked;
        console.log(`Checkbox ${this.checked ? 'checked' : 'unchecked'}`);
        this.mediator.notify(this, 'check');
    }

    public isChecked(): boolean {
        return this.checked;
    }
}
