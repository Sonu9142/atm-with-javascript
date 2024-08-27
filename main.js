let pin = "1234";
let balance = 10000;
let loggedIn = false;


function validatePin() {
  let enteredPin = document.getElementById("pin").value;
  if (enteredPin === pin) {
    document.getElementById("options").style.display = "block";
    document.getElementById("display").innerText = "PIN validated. Choose an option.";
    loggedIn = true;
  } else {
    document.getElementById("display").innerText = "Incorrect PIN. Try again.";
  }
}


function checkBalance() {
  if (loggedIn) {
    document.getElementById("display").innerText = `Your balance is $${balance}`;
  }
}

function deposit() {
  if (loggedIn) {
    let amount = parseFloat(prompt("Enter amount to deposit:"));
    if (!isNaN(amount) && amount > 0) {
      balance += amount;
      document.getElementById("display").innerText = `$${amount} deposited successfully. Your new balance is $${balance}`;
    } else {
      document.getElementById("display").innerText = "Invalid amount. Deposit failed.";
    }
  }
}

function withdraw() {
  if (loggedIn) {
    let amount = parseFloat(prompt("Enter amount to withdraw:"));
    if (!isNaN(amount) && amount > 0) {
      if (balance >= amount) {
        balance -= amount;
        document.getElementById("display").innerText = `$${amount} withdrawn successfully. Your new balance is $${balance}`;
      } else {
        document.getElementById("display").innerText = "Insufficient funds. Withdrawal failed.";
      }
    } else {
      document.getElementById("display").innerText = "Invalid amount. Withdrawal failed.";
    }
  }
}

function logout() {
  document.getElementById("options").style.display = "none";
  document.getElementById("display").innerText = "Logged out successfully.";
  
  loggedIn = false;
}
