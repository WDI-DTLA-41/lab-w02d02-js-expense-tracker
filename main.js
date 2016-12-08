console.log('Let it snow, let it snow, let it snow!');


// create div class 'container-expName' and 'container-expAmount'
var containerExpName = document.createElement('div');
var containerExpAmount = document.createElement('div');
containerExpName.className = 'container-expName';
containerExpAmount.className = 'container-expAmount';
document.body.appendChild(containerExpName);
document.body.appendChild(containerExpAmount);

// create input field 'inputExpenseName'
var inputExpenseName = document.createElement('input');
inputExpenseName.type = 'text';
inputExpenseName.className = 'expName';
inputExpenseName.setAttribute('placeholder','Expense Name');

// create input field 'inputExpenseAmount'
var inputExpenseAmount = document.createElement('input');
inputExpenseAmount.type = 'text';
inputExpenseAmount.className = 'expAmount';
inputExpenseAmount.setAttribute('placeholder', 'Expense Amount');

// append input fields to body
containerExpName.appendChild(inputExpenseName);
containerExpAmount.appendChild(inputExpenseAmount);

// create a button called 'Add Expense'
var addExpenseButton = document.createElement('button');
addExpenseButton.textContent = "Add Expense";
document.body.appendChild(addExpenseButton);

// create Total Expense Calculator
var totalExpenseContainer = document.createElement('div');
totalExpenseContainer.className = "totalCalcu";
var totalExpensePTag = document.createElement('p');
totalExpensePTag.textContent = "Total Expense ";
totalExpenseContainer.appendChild(totalExpensePTag);
document.body.appendChild(totalExpenseContainer);

// create a Table called 'expenseTable'
var expenseTable = document.createElement('table');
expenseTable.className = 'expenseTable';
document.body.appendChild(expenseTable);

// create a Table Row
var tableRow = document.createElement('TR');
expenseTable.appendChild(tableRow);

// create two Table Headers -- ExpName and ExpAmount
var tableHeaderExpName = document.createElement('TH');
var tableHeaderExpAmount = document.createElement('TH');
tableHeaderExpName.textContent = "Name";
tableHeaderExpAmount.textContent = "Amount";
tableRow.appendChild(tableHeaderExpName);
tableRow.appendChild(tableHeaderExpAmount);

// create function handler to create Table Data
var handleCreate = function(event) {
  console.log(inputExpenseAmount.value,inputExpenseName.value);
  var tableDataExpName = document.createElement('TD');
  var tableDataExpAmount = document.createElement('TD');
  tableDataExpName.textContent = inputExpenseName.value;
  tableDataExpAmount.textContent = inputExpenseAmount.value;
  tableHeaderExpName.appendChild(tableDataExpName);
  tableHeaderExpAmount.appendChild(tableDataExpAmount);
};

addExpenseButton.addEventListener('click', handleCreate);







