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
    //newExpense.innerHTML = "Name: " + expenseNmInput.value + " Amount: " + expenseAmInput.value + "  ";
  var expenseNameSpan = document.createElement('span');
    expenseNameSpan.classList.add('expenseName');
    expenseNameSpan.innerHTML = expenseNmInput.value;
  var expenseAmountSpan = document.createElement('span');
    expenseAmountSpan.classList.add('expenseAmount');
    expenseAmountSpan.innerHTML = expenseAmInput.value;
  var remSpan = document.createElement('span');
    remSpan.innerHTML = "X";
    remSpan.classList.add('remove');
  newExpense.appendChild(expenseNameSpan);
  newExpense.appendChild(expenseAmountSpan);
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


// Sort Expenses based off of Amount from highest to lowest
// add event listener to sort button

var sortButton = document.querySelector('#sort-button');
sortButton.addEventListener('click', hope);
var hope = function () {
  var list = document.querySelector('.expenses');

  var items = list.childNodes;
  var itemsArr = [];
  for (var i in items) {
    if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
        itemsArr.push(items[i]);
    }
  }

  itemsArr.sort(function(a, b) {
    return a.childNodes[1].innerHTML == b.childNodes[1].innerHTML
          ? 0
          : (a.childNodes[1].innerHTML < b.childNodes[1].innerHTML ? -1 : 1);
  });

  for (i = 0; i < itemsArr.length; ++i) {
    list.appendChild(itemsArr[i]);
  }
};












