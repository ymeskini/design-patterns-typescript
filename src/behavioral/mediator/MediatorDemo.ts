import { AuthenticationDialog } from './AuthenticationDialog';

export class MediatorDemo {
    public static run(): void {
        console.log('Mediator Pattern Demo\n');

        const dialog = new AuthenticationDialog();

        console.log('Initial state - Registration mode');
        console.log(`Dialog title: ${dialog.getTitle()}\n`);

        // Switch to login mode
        console.log('Switching to login mode...');
        dialog.getLoginOrRegisterCheckbox().check();
        console.log(`Dialog title: ${dialog.getTitle()}\n`);

        // Fill in login credentials
        console.log('Filling login credentials...');
        dialog.getLoginUsername().setText('john_doe');
        dialog.getLoginPassword().setText('password123');
        console.log();

        // Click OK to login
        console.log('Clicking OK button...');
        dialog.getOkButton().click();
        console.log();

        // Switch back to registration mode
        console.log('Switching back to registration mode...');
        dialog.getLoginOrRegisterCheckbox().check();
        console.log(`Dialog title: ${dialog.getTitle()}\n`);

        // Fill in registration details
        console.log('Filling registration details...');
        dialog.getRegistrationUsername().setText('new_user');
        dialog.getRegistrationPassword().setText('newpassword');
        dialog.getRegistrationEmail().setText('user@example.com');
        console.log();

        // Click OK to register
        console.log('Clicking OK button...');
        dialog.getOkButton().click();
        console.log();

        // Cancel dialog
        console.log('Clicking Cancel button...');
        dialog.getCancelButton().click();
    }
}

// Demo execution
if (require.main === module) {
    MediatorDemo.run();
}
