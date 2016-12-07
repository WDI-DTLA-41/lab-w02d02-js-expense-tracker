console.log('linked!')

// The UL that contains all the expenses
var expenseList = document.querySelector('.expenses');


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
  var newExpense = document.createElement('li');
  newExpense.classList.add('expense');
  newExpense.innerHTML = "Name: " + expenseNmInput.value + " Amount: " + expenseAmInput.value + "  ";
  var remSpan = document.createElement('span');
  remSpan.innerHTML = "X";
  remSpan.classList.add('remove');
  newExpense.appendChild(remSpan);
  expenseList.appendChild(newExpense);
  countExpenses();

};


// Add Event Listener to Button
var button = document.querySelector('button');
button.addEventListener('click', addExpense);

// Add Event Listener to UL to perform task removal
expenseList.addEventListener('click', function (evt){
  if (evt.target.classList.contains('remove')) {
      event.target.parentNode.remove();
      countExpenses();
      return true;
  }
});

