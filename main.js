var button = document.querySelector('#add-expense');
var expName = document.querySelector('#name');
var amount = document.querySelector('#amount');


//display the sum of all expense amounts

var counter = function() {
  var expTable = document.querySelector('tbody');
  var total = document.querySelector('.expense-total');
  amtSum = 0;
  for (i=2; i<=expTable.children.length; i++) {
      var addThis = document.querySelector('.amt').innerText;
      amtSum = amtSum + parseInt(addThis);
      totalNum = parseInt(amtSum);
      total.innerHTML= totalNum;
  }
}

// add items to table

var addExp = function(evt) {
  console.log('clicked');
  evt.preventDefault();
  var newExp = document.createElement('tr');
  var expTable = document.querySelector('tbody');
  newExp.innerHTML = '<td class="exp">' + expName.value + '</td><td class="amt">' + amount.value + '</td>' + remove;
  expTable.appendChild(newExp);
  // remove items from table
  var remove = document.createElement('button');
  remove.textContent = 'Remove';
  newExp.appendChild(remove);
  var removeExp = function() {
  console.log('clicked');
  this.parentNode.remove()
}
  // add eventlistener to x
  for (var i = 0; i <= remove.length; i++) {
    remove[i].addEventListener('click', removeExp);
  }
  // run counter
  counter();
console.log('hello');

var tbody = document.querySelector('tbody');
var btn = document.querySelector('button');
var expName = document.querySelector('input[name="exp-name"]');
var expAmount = document.querySelector('input[name="exp-amount"]');
var expTotal = document.querySelector(".exp-total");
var total = 0;
var removeButtons = [];
var expense;
var button = document.querySelector('.remove');


var renderRow = function(name, amount) {
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  var tbody = document.querySelector('tbody')
  rmv = document.createElement('button');
  rmv.textContent = 'Remove';
  rmv.classList = 'remove';
  td.innerHTML = name;
  tr.appendChild(td);
  td = document.createElement('td');
  td.textContent = amount;
  tr.appendChild(td);
  td.appendChild(rmv);
  removeButtons.push(rmv);
  for (var i = 0; i < removeButtons.length; i++) {
      removeButtons[i].addEventListener('click', handleRemove);
    }
    return tr;
}

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
}

var addTotal = function(amount) {
  total += amount;
  expTotal.textContent = total;
}


var subtractTotal = function(amount) {
  total = expTotal.textContent - amount;
  expTotal.textContent = total;

}

var handleRemove = function() {
  console.log('clicked');
  var buttonParent = this.parentNode;
  var expRow = buttonParent.parentNode;
  expRow.remove();
  var subtract = button.parentNode.textContent;

  subtractTotal(subtract);
}



button.addEventListener('click', addExp)

btn.addEventListener('click', handleClick);




var getValues = function() {
  var val = parseFloat(expAmount.value) || 0
  return {
    name: expName.value,
    amount: val
  }
}

var clearInputs = function() {
  expAmount.value = '';
  expName.value = '';
}


