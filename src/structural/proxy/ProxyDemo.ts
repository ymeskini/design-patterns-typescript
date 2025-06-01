import { Image } from './Image';
import { ImageProxy } from './ImageProxy';
import { BankAccountProxy } from './BankAccountProxy';

/**
 * Proxy Pattern Demo
 * Demonstrates Virtual Proxy (lazy loading) and Protection Proxy (access control)
 */
export class ProxyDemo {
    public static run(): void {
        console.log('=== PROXY PATTERN DEMO ===\n');

        // Virtual Proxy Demo - Lazy Loading
        console.log('1. VIRTUAL PROXY (Lazy Loading) Demo:');
        console.log('Creating image proxies...');

        const image1: Image = new ImageProxy('photo1.jpg');
        const image2: Image = new ImageProxy('photo2.jpg');

        console.log('\nGetting dimensions (no loading yet):');
        console.log(`Image1 dimensions: ${image1.getWidth()}x${image1.getHeight()}`);
        console.log(`Image2 dimensions: ${image2.getWidth()}x${image2.getHeight()}`);

        console.log('\nDisplaying images (triggers loading):');
        image1.display();
        console.log('');
        image2.display();

        console.log('\nDisplaying again (already loaded):');
        image1.display();

        // Protection Proxy Demo - Access Control
        console.log('\n\n2. PROTECTION PROXY (Access Control) Demo:');

        console.log('\nOwner account:');
        const ownerAccount = new BankAccountProxy('owner');
        ownerAccount.deposit(1000);
        ownerAccount.withdraw(500);
        console.log(`Balance: $${ownerAccount.getBalance()}`);

        console.log('\nAdmin account:');
        const adminAccount = new BankAccountProxy('admin');
        adminAccount.deposit(200);
        adminAccount.withdraw(100); // Should be denied
        console.log(`Balance: $${adminAccount.getBalance()}`);

        console.log('\nGuest account:');
        const guestAccount = new BankAccountProxy('guest');
        guestAccount.deposit(100); // Should be denied
        guestAccount.withdraw(50); // Should be denied
        console.log(`Balance: $${guestAccount.getBalance()}`); // Should be denied
    }
}

// Run the demo if this file is executed directly
if (require.main === module) {
    ProxyDemo.run();
}
