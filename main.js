var $addExpenseBtn = document.querySelector('#add-expense');
var $expAmount = document.querySelector('input[name="expense-amount"]');
var $expName = document.querySelector('input[name="expense-name"]');
var $expTotal = document.querySelector('.expense-total');
var $expTable = document.querySelector('.expenses tbody');
var $headingName = document.querySelector('.heading-name');
var $headingAmount = document.querySelector('.heading-amount');

var total = 0;

var hasValidValues = function() {
  return $expName.value !== '' & $expAmount.value !== '';
}

var getExpenseValues = function(){
  var amount = parseFloat($expAmount.value) || 0;
  return {
    name: $expName.value,
    amount: amount
  }
}

var renderRow = function(exp) {
  return '<tr class="expense"><td class="expense-name">' + exp.name + '</td><td class="expense-amount">' + exp.amount + '</td><td><button class="remove">Delete</button></td></tr>'
}

var clearExpenseValues = function() {
  $expAmount.value = '';
  $expName.value = '';
}

var addExpense = function(evt) {
  evt.preventDefault();
  if ( !hasValidValues() ) {
    return false;
  }
  var expense = getExpenseValues();
  $expTable.innerHTML += renderRow(expense);
  total += expense.amount;
  $expTotal.textContent = total;
  clearExpenseValues();
}

var removeExpense = function(evt) {
  var node = evt.target;
  if ( !node.classList.contains('remove') ) {
    return false;
  }
  var row = node.closest('.expense');
  // get amount for that row
  var amount = parseInt(row.querySelector('.expense-amount').textContent);
  row.remove();
  total -= amount;
  $expTotal.textContent = total;
}

var sortByName = function(evt) {
  var $expenses = document.querySelectorAll('.expense');
  // convert nodeList to an Array so we can call .sort
  Array.from($expenses).sort(function(a, b) {
    var a = a.querySelector('.expense-name').textContent;
    var b = b.querySelector('.expense-name').textContent;
    return a > b;
  }).forEach(function($exp) {
    // append sorted nodes in order
    $expTable.append($exp);
  });
}

var sortByAmount = function(evt) {
  var $expenses = document.querySelectorAll('.expense');
  // convert nodeList to an Array so we can call .sort
  Array.from($expenses).sort(function(a, b) {
    var a = parseInt(a.querySelector('.expense-amount').textContent);
    var b = parseInt(b.querySelector('.expense-amount').textContent);
    return a > b;
  }).forEach(function($exp) {
    // append sorted nodes in order
    $expTable.append($exp);
  });
}

$headingName.addEventListener('click', sortByName);
$headingAmount.addEventListener('click', sortByAmount);
$addExpenseBtn.addEventListener('click', addExpense);
$expTable.addEventListener('click', removeExpense);
