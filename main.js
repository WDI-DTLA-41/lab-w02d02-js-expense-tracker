console.log('linked!')

// Expense Name and amount
var expenseAmInput = document.getElementById('expenseAmountInput');
var expenseNmInput = document.getElementById('expenseNameInput');

// Current Expenses
totalExpenses = 0;
var countExpenses = function() {
  totalExpenses = document.querySelectorAll('li').length;
  document.getElementById('currentTotalExpenses').innerHTML = totalExpenses;
};


var addExpense = function (){
  console.log('clicked!')
  if (expenseAmInput.value == "" || expenseNmInput.value == "") {
    return false;
  };

  // Add Expense Name and cost to Expenses list
  var expenseList = document.querySelector('.expenses');
  var newExpense = document.createElement('li');
  newExpense.classList.add('expense');
  newExpense.innerHTML = "Name: " + expenseNmInput.value + " Amount: " + expenseAmInput.value;
  var remSpan = document.createElement('span');
  remSpan.innerHTML = "X";
  remSpan.classList.add('remove');
  remSpan.addEventListener('click', removeExpense);
  newExpense.appendChild(remSpan);
  expenseList.appendChild(newExpense);
  countExpenses();

};


// Add Event Listener to Button
var button = document.querySelector('button');
button.addEventListener('click', addExpense);

// Remove Expense Function
var removeExpense = function () {
  this.parentNode.remove();
  countExpenses();
}

