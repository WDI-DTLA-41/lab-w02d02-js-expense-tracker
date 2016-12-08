var addButton = document.querySelector('#add');
var total = document.querySelector('#total-expenses');
var expenseList = document.querySelector('.expenses');
var expensesArr = [];
var amount = document.querySelector('#expense-amount');

var table = document.querySelector('table');

var tableBody = document.querySelector('#tableBody');


var handleClick = function(event) {
  var expenseName = document.querySelector('#expense-name');
  var amount = document.querySelector('#expense-amount');
  // numbers.push(amount.value);
  // console.log(numbers);
  var tr = document.createElement('tr');
  tr.classList.add('row');
  var newRow = tableBody.appendChild(tr);

  //create obj of new expense and amount and push into array
  var obj = {name: expenseName.value, amount: parseFloat(amount.value)};
  expensesArr.push(obj);
  newRow.innerHTML = '<td>' + expenseName.value + '</td>' + '<td>' + amount.value + '</td>';
}

var remove = function(event) {
  var element = event.target;
  if (element.classList.contains('remove')) {
    element.parentNode.remove();
  }
  for (var i=0; i<expensesArr.length; i++);
  if (element.parentNode.textContent === expensesArr[i].name + ' - $' + expensesArr[i].amount + ' x') //
  expensesArr.splice(i, 1);
}

var sort = function(event) {
    var sortedArray = expensesArr.sort(function(a, b) {
    return b.amount - a.amount;
  });
    if (event.target.classList.contains('head')) {
      tableBody.innerHTML = "";
      for (var i = 0; i < sortedArray.length; i++) {
        tableBody.innerHTML += '<tr><td>' + sortedArray[i].name + '</td><td>' + sortedArray[i].amount + '</td></tr>';
      }
    }
  }


//   // store array length in variable
//   var length = expenseList.children.length;
//   // reset inner HTML
//   expenseList.innerHTML = "";
//   for (var i = 0; i < length; i++) {
//     expenseList.innerHTML += '<li>' + sortedArray[i].name + ' - $' + sortedArray[i].amount + ' ' + '<span class="remove">x</span></li>';
//   }
// }


var counter = function (event){
    var sum = 0;
    for (var i = 0; i < expensesArr.length; i++) {
    sum += expensesArr[i].amount;
    console.log(sum);
  }
  total.innerHTML = sum;
};




expenseList.addEventListener('click', remove);
addButton.addEventListener('click', handleClick);
table.addEventListener('click', sort);
addButton.addEventListener('click', counter);


// create a new object literal with keys for name and amount



//STEPS:

//1. on click, push object to array with name and amount keys

// var expenseObject = [
//   {name: groceries, amount: 40},
//
// ];

// 2. appendChild with expenseObject.name and expenseObject.amount to
// ul element

// 3.





// Sort expensesArr in descending order:

// var sortedArray = expensesArr.sort(function(a, b) {
//     return b.amount - a.amount;
//   });





