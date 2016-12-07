console.log('linked!')

var table = document.getElementById('expensesTable');

// Expense Name and amount
var expenseAmInput = document.getElementById('expenseAmountInput');
var expenseNmInput = document.getElementById('expenseNameInput');

// Current Expenses
totalExpenses = 0;
var countExpenses = function() {
  totalExpenses = document.querySelectorAll('tr').length - 1;
  document.getElementById('currentTotalExpenses').innerHTML = totalExpenses;
};


var addExpense = function (){
  console.log('clicked!')
  if (expenseAmInput.value == "" || expenseNmInput.value == "") {
    return false;
  };
  addExpensesToTable();
  countExpenses();

};


// Add Event Listener to Button
var button = document.querySelector('button');
button.addEventListener('click', addExpense);



// function for adding expenses to a table
var addExpensesToTable = function () {
var row = table.insertRow(table.rows.length);
var exp = row.insertCell(0);
var amnt = row.insertCell(1);
var delButton = row.insertCell(2);
delButton.innerHTML = '<button class="remove">Delete</button>'
exp.innerHTML = expenseNmInput.value;
amnt.innerHTML = expenseAmInput.value;
};


// add event listener to delete button to remove table row
table.addEventListener('click', function (evt){
  if (evt.target.classList.contains('remove')) {
    console.log('Button was clicked');
    console.log(evt);
    console.log(evt.target.parentNode.parentNode);
    evt.target.parentNode.parentNode.remove();
    countExpenses();
    return true;
  };
});




