/**
 * Protection Proxy example - Controls access based on permissions
 */
export interface BankAccount {
    deposit(amount: number): void;
    withdraw(amount: number): void;
    getBalance(): number;
}

export class RealBankAccount implements BankAccount {
    private balance: number = 0;

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    public withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Insufficient funds');
        }
    }

    public getBalance(): number {
        return this.balance;
    }
}

export class BankAccountProxy implements BankAccount {
    private realAccount: RealBankAccount;
    private userRole: string;

    constructor(userRole: string) {
        this.realAccount = new RealBankAccount();
        this.userRole = userRole;
    }

    public deposit(amount: number): void {
        if (this.userRole === 'owner' || this.userRole === 'admin') {
            this.realAccount.deposit(amount);
        } else {
            console.log('Access denied: You do not have permission to deposit');
        }
    }

    public withdraw(amount: number): void {
        if (this.userRole === 'owner') {
            this.realAccount.withdraw(amount);
        } else {
            console.log('Access denied: Only account owner can withdraw');
        }
    }

    public getBalance(): number {
        if (this.userRole === 'owner' || this.userRole === 'admin') {
            return this.realAccount.getBalance();
        } else {
            console.log('Access denied: You do not have permission to view balance');
            return -1;
        }
    }
}
