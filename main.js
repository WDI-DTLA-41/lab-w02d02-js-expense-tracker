console.log('Let it snow, let it snow, let it snow!');

var button = document.querySelector('#add-expense');
var expenseTable = document.querySelector('tbody');
var inputExpenseName = document.querySelector('#expense-name');
var inputExpenseAmount = document.querySelector('#expense-amount');

// create table headers

var handleInput = function(event) {
// things to do when clicked

  // create Table Row
  var expenseRow = document.createElement('tr');

  // create 3 table Data
  var expenseNameData = document.createElement('td');
  var expenseAmountData = document.createElement('td');
  var expenseDeleteData = document.createElement('td');

  // add input values to Data
  expenseNameData.textContent = inputExpenseName.value;
  expenseAmountData.textContent = inputExpenseAmount.value;
  expenseTable.appendChild(expenseRow);
  expenseRow.appendChild(expenseNameData);
  expenseRow.appendChild(expenseAmountData);
  expenseAmountData.classList.add('amount');

  // create delete button
  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  expenseDeleteData.appendChild(deleteButton);
  expenseRow.appendChild(expenseDeleteData);
};

var handleDelete = function(event) {
  event.target.parentNode.parentNode.remove(event.target);
}

button.addEventListener('click', handleInput);
expenseTable.addEventListener('click', handleDelete);
