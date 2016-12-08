console.log('Let it snow, let it snow, let it snow!');

// create querySelectors
var button = document.querySelector('#add-expense');
var expenseTable = document.querySelector('tbody');
var inputExpenseName = document.querySelector('#expense-name');
var inputExpenseAmount = document.querySelector('#expense-amount');
var expenseTotal = document.querySelector('.expense-total');

var handleInput = function(event) {
  if (event.keyCode === 13);
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
  deleteButton.addEventListener('click', handleDelete);
};

// create delete handler
var handleDelete = function(event) {
  event.target.parentNode.parentNode.remove(event.target);
}

var sumTotal = function() {
 var dataAmount = document.querySelectorAll('.amount');
 for(var i = 0; i < dataAmount.length; i++) {
  console.log(dataAmount);
 }
};

button.addEventListener('click', handleInput);
button.addEventListener('keypress', handleInput);
