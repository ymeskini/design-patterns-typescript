import { AuthenticationDialog } from './AuthenticationDialog';

describe('Mediator Pattern', () => {
    let dialog: AuthenticationDialog;

    beforeEach(() => {
        dialog = new AuthenticationDialog();
    });

    test('should start in registration mode', () => {
        expect(dialog.getTitle()).toBe('Authentication Dialog');
        expect(dialog.getLoginOrRegisterCheckbox().isChecked()).toBe(false);
    });

    test('should switch to login mode when checkbox is checked', () => {
        dialog.getLoginOrRegisterCheckbox().check();
        expect(dialog.getTitle()).toBe('Log in');
        expect(dialog.getLoginOrRegisterCheckbox().isChecked()).toBe(true);
    });

    test('should switch to registration mode when checkbox is unchecked', () => {
        // First check to go to login mode
        dialog.getLoginOrRegisterCheckbox().check();
        expect(dialog.getTitle()).toBe('Log in');

        // Then uncheck to go back to registration mode
        dialog.getLoginOrRegisterCheckbox().check();
        expect(dialog.getTitle()).toBe('Register');
        expect(dialog.getLoginOrRegisterCheckbox().isChecked()).toBe(false);
    });

    test('should handle text input in textboxes', () => {
        dialog.getLoginUsername().setText('testuser');
        dialog.getLoginPassword().setText('testpass');

        expect(dialog.getLoginUsername().getText()).toBe('testuser');
        expect(dialog.getLoginPassword().getText()).toBe('testpass');
    });

    test('should handle registration flow', () => {
        dialog.getRegistrationUsername().setText('newuser');
        dialog.getRegistrationPassword().setText('newpass');
        dialog.getRegistrationEmail().setText('test@example.com');

        expect(dialog.getRegistrationUsername().getText()).toBe('newuser');
        expect(dialog.getRegistrationPassword().getText()).toBe('newpass');
        expect(dialog.getRegistrationEmail().getText()).toBe('test@example.com');
    });

    test('should handle button clicks', () => {
        // Test that buttons can be clicked without errors
        expect(() => {
            dialog.getOkButton().click();
            dialog.getCancelButton().click();
        }).not.toThrow();
    });
});
