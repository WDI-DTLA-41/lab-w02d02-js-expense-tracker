console.log('hello');

var tbody = document.querySelector('tbody');
var btn = document.querySelector('button');
var expName = document.querySelector('input[name="exp-name"]');
var expAmount = document.querySelector('input[name="exp-amount"]');
var expTotal = document.querySelector(".exp-total");
var total = 0;

var handleClick = function(evt) {
  evt.preventDefault();
  var expense = getValues();
  if (expense.name === '' || expense.amount === NaN) {
    return false;
  }
  updateTotal(expense.amount);
  var row = renderRow(expense.name, expense.amount);
  tbody.appendChild(row);
  clearInputs();
}

var handleRemove = function() {

}


var updateTotal = function(amount) {
  total += amount;
  expTotal.textContent = total;
}

btn.addEventListener('click', handleClick);
// <tr>
//    <td>Coffee</td>
//    <td>2.00</td>
// </tr>

var renderRow = function(name, amount) {
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  var rmv = document.createElement('button');
  rmv.textContent = "Remove";
  td.textContent = name;
  tr.appendChild(td);
  td = document.createElement('td');
  td.textContent = amount;
  tr.appendChild(td);
  td.appendChild(rmv)
  return tr;
}

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


// var row = renderRow('coffee', '2.00');
// tbody.appendChild(row);
// row = renderRow('muffin', '2.00');
// tbody.appendChild(row);
