class SavingAccount {
    constructor() {
        // attributes
        this.balance = 0;
        this.account_name = "John Doe";
    }

    deposit(amount) {
        this.balance = amount + this.balance
    }
    withdraw(amount) {
        this.balance = this.balance - amount
    }
    show_balance() {
        console.log(this.balance)
    }
}

const account1 = new SavingAccount()
account1.deposit(2000)
account1.deposit(2000)
account1.withdraw(500)
account1.show_balance()