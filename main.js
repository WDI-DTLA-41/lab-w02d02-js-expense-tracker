var nameInput = document.querySelector('.expense-name');
var amountInput = document.querySelector('.expense-amount');
var button = document.getElementById('add-expense');
var tableList = document.querySelector('tbody');



var addAmtValue = function() {
  var newTr = document.createElement('tr');
  var newTd = document.createElement('td');
  var newTd2 = document.createElement('td');
  tableList.appendChild(newTr);
  newTr.appendChild(newTd2);
  newTr.appendChild(newTd);
  newTd.textContent = amountInput.value;
  newTd2.textContent = nameInput.value;
}


button.addEventListener('click', addAmtValue);



