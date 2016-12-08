var btn = document.querySelector('#add-expense');
var expAmount = document.querySelector('input[name="expense-amount"]');
var expName = document.querySelector('input[name="expense-name"]');
var expTotal = document.querySelector('.expense-total');
var expTable = document.querySelector('.expenses tbody');

var total = 0;

var hasValidValues = function() {
  return expName.value !== '' & expAmount.value !== '';
}

var getExpenseValues = function(){
  return {
    name: expName.value,
    amount: parseFloat(expAmount.value) || 0
  }
}

var renderTotal = function() {
  expTotal.textContent = total;
}

var renderRow = function(exp) {
  return '<tr class="expense"><td class="expense-name">' + exp.name + '</td><td class="expense-amount">' + exp.amount + '</td><td><button class="remove">Delete</button></td></tr>'
}

var clearExpenseValues = function() {
  expAmount.value = '';
  expName.value = '';
}

var handleClick = function(evt) {
  evt.preventDefault();
  if ( !hasValidValues() ) return false;
  var expense = getExpenseValues();
  expTable.innerHTML += renderRow(expense);
  total += expense.amount;
  renderTotal();
  clearExpenseValues();
}

var removeRow = function(evt) {
  var node = evt.target;
  if ( !node.classList.contains('remove') ) return false;
  var row = node.closest('.expense');
  var amount = row.querySelector('.expense-amount').textContent;
  row.remove();
  total -= amount;
  renderTotal();
}

btn.addEventListener('click', handleClick);
expTable.addEventListener('click', removeRow);
