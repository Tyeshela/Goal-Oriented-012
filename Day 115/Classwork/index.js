import 'core-js/stable';

let balance = 0;

// Update balance
function updateBalance() {
    document.getElementById('balance').innerText = `Balance: $${balance}`;
}

// Deposit
document.getElementById('deposit').addEventListener('click', () => {
    balance += 10;
    updateBalance();
});

// Withdraw
document.getElementById('withdraw').addEventListener('click', () => {
    if (balance >= 10) {
        balance -= 10;
        updateBalance();
    } else {
        alert("Insufficient funds");
    }
});

updateBalance();