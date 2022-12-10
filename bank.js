const balance = document.getElementById('balance');
const depositbtn = document.getElementById('depositbtn')
const depositInput = document.getElementById('depositinput floatingInput')
const withdrawbtn = document.getElementById('withdrawbtn')
const withdrawInput = document.getElementById('withdrawinput floatingInput')
let curr_balance = 100;

// display balance
class bank {
    getBalance() {
        balance.innerText = `₹${curr_balance}`
        return curr_balance;
    }

    // deposit
    deposit(depositAmount) {
        if (depositAmount > 0) {
            curr_balance += Number.parseInt(depositAmount);
            this.getBalance();
        }
    }

    // withdraw balance
    withdraw(withdrawAmount) {
        if (curr_balance >= withdrawAmount) curr_balance -= Number.parseInt(withdrawAmount);
        this.getBalance();
    }
}

const acc = new bank();

depositbtn.onclick = () => {
    acc.deposit(depositInput.value);
}
withdrawbtn.onclick = () => {
    acc.withdraw(withdrawInput.value);
}