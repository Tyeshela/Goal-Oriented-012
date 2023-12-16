class BankAccount {
    constructor() {
        this._balance = 0;
        this._accountNumber = this._generateAccountNumber();
    }

    _generateAccountNumber() {
        return Math.random().toString().substr(2, 10);
    }

    _isNegative(amount) {
        return amount < 0;
    }

    _isValidWithdrawal(amount) {
        return !this._isNegative(amount) && amount <= this._balance;
    }

    getBalance() {
        return this._balance;
    }

    deposit(amount) {
        if (!this._isNegative(amount)) {
            this._balance += amount;
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (this._isValidWithdrawal(amount)) {
            this._balance -= amount;
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }
}