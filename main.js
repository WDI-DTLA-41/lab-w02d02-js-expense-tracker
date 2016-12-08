console.log("####")

var button = document.querySelector('button');
var expenseName = document.querySelector('.expense-name');
var expenseAmount = document.querySelector('.expense-amount');

// adds expense name
var add = function(event){

  // create element tr and td
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');

  // append td --> tr
  tr.appendChild(td1);
  tr.appendChild(td2);

  // get input value from expense name
  var inputEN = expenseName.value;
  td1.textContent = inputEN;

  // get input value from expense amount
  var inputA = expenseAmount.value;
  td2.textContent = inputA;

  // add x
  var td3 = document.createElement('td');
  td3.classList.add('remove');
  td3.textContent = 'x';
  tr.appendChild(td3);

  // add event listener for removing x
  td3.addEventListener('click', remove);

  // append tr to the table
  var table = document.querySelector('.expenses');
  table.appendChild(tr);

  // function(counter){
  //   var i = 0;
  //   var row = document.querySelector('td');
  //   row.innerHTML = "<p>Total Expenses: $<span class='expense-total'>" + i +"</p>"
  // }

};

// add event listener for button click
button.addEventListener('click', add);

// add function to remove
var remove = function(event){
    this.parentNode.remove();
  }



