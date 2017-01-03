var tbody = document.querySelector('tbody');
var btn = document.querySelector('button');
var expName = document.querySelector('input[name="exp-name"]');
var expAmount = document.querySelector('input[name="exp-amount"]');
var expTotal = document.querySelector(".exp-total");
var total = 0;
var removeButtons = [];
var expense;


var renderRow = function(name, amount) {
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  var tbody = document.querySelector('tbody');
  var tdRemove = document.createElement('td');
  var rmv = document.createElement('button');
  rmv.textContent = 'Remove';
  rmv.classList = 'remove';
  td.innerHTML = name;
  tr.appendChild(td);
  td = document.createElement('td');
  td.textContent = amount;
  tr.appendChild(td);
  tr.appendChild(tdRemove);
  tdRemove.appendChild(rmv);
  removeButtons.push(rmv);
  for (var i = 0; i < removeButtons.length; i++) {
      removeButtons[i].addEventListener('click', handleRemove);
    }
    return tr;
};

var handleClick = function(evt) {
  evt.preventDefault();
  expense = getValues();
  if (expense.name === '' || expense.amount === NaN) {
    return false;
  }
  addTotal(expense.amount);
  var row = renderRow(expense.name, expense.amount);
  tbody.appendChild(row);
  clearInputs();
};

var addTotal = function(amount) {
  total += amount;
  expTotal.textContent = total;
};


var subtractTotal = function(amount) {
  total = expTotal.textContent - amount;
  expTotal.textContent = total;

};

var handleRemove = function() {
  console.log('clicked');
  var buttonParent = this.parentNode;
  var expRow = buttonParent.parentNode;
  var subtract = buttonParent.previousSibling.textContent;
  subtractTotal(subtract);
  expRow.remove();
};

var getValues = function() {
  var val = parseFloat(expAmount.value) || 0;
  return {
    name: expName.value,
    amount: val
  };
};

var clearInputs = function() {
  expAmount.value = '';
  expName.value = '';
};


btn.addEventListener('click', handleClick);



