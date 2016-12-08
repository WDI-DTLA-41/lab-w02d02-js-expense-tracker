console.log("####")

var button = document.querySelector('button');
var expenseName = document.querySelector('.expense-name');
var expenseAmount = document.querySelector('.expense-amount');

// adds expense name
var add = function(event){
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  var inputEN = expenseName.value;
  td1.textContent = inputEN;

  var inputA = expenseAmount.value;
  td2.textContent = inputA;

   // add x
  var span = document.createElement('span');
  span.classList.add('remove');
  span.textContent = 'x';
  td3.appendChild(span);

  span.addEventListener('click', remove);

  var table = document.querySelector('.expenses');
  table.appendChild(tr);

};

button.addEventListener('click', add);

var remove = function(event){
  this.parentNode.remove();
  }
