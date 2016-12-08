console.log("####")

var button = document.querySelector('button');
var expenseName = document.querySelector('.expense-name');
var expenseAmount = document.querySelector('.expense-amount');

var add = function(event){
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  tr.appendChild(td);

  var inputEN = expenseName.value;
  td.textContent = inputEN;

  var table = document.querySelector('.expenses');
  table.appendChild(tr);

};

button.addEventListener('click', add);

