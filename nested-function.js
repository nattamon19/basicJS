function cal_tax() {
    console.log('Hello tax');
}

function print_hello() {
    console.log('Hello!!!');
}

let saving_account_management = () => { 
    let balance = 0;
    let account_name = "John Doe"

    let deposit = (amount) => {
        balance = amount + balance
    }
    let withdraw = (amount) => {
        balance = balance - amount
    }
    let show_balance = () => {
        console.log(balance)
    }
    return {deposit, withdraw, show_balance}
}

const saving = saving_account_management()
saving.show_balance() // 0
saving.deposit(1000)
saving.deposit(1000)
saving.deposit(1000)
saving.show_balance()
saving.withdraw(800)
saving.show_balance()



