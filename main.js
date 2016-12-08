var addButton = document.querySelector('#add');
var total = document.querySelector('#total-expenses');
var expensesArr = [];
var amount = document.querySelector('#expense-amount');
var table = document.querySelector('table');
var tableBody = document.querySelector('#tableBody');
var clicked = false;


var handleClick = function(event) {
  var expenseName = document.querySelector('#expense-name');
  var amount = document.querySelector('#expense-amount');
  var tr = document.createElement('tr');
  tr.classList.add('row');
  var newRow = tableBody.appendChild(tr);
  var obj = {name: expenseName.value, amount: parseFloat(amount.value)};

  expensesArr.push(obj);
        var sum = 0;
    for (var i = 0; i < expensesArr.length; i++) {
    sum += expensesArr[i].amount;
    console.log(sum);
  }
  total.innerHTML = sum;
  newRow.innerHTML = '<td class="expense-name">' + expenseName.value + '</td>' + '<td class="expense-amount">' + amount.value + '</td><td><button class="remove">remove</button></td>';
}

var remove = function(event) {
  var element = event.target;
  if (element.classList.contains('remove')) {
    var grandpa = element.parentNode.parentNode;
    grandpa.remove();
    var removedName = grandpa.children[0];
    //loop through array and remove object with matching expense name in DOM
    //this way sort event does not add removed array items back to DOM when
    //it loops through array to change table to sorted table
    for (var i=0; i<expensesArr.length; i++) {
      if (expensesArr[i].name == removedName.textContent) {
      expensesArr.splice(i, 1);
      }
    }
    var removedNumber = grandpa.children[1].textContent;
    total.innerHTML -= parseFloat(removedNumber);
  }
}

var sortArray = function(event) {
  if (!clicked) {
    expensesArr = expensesArr.sort(function(a, b) {
    return b.amount - a.amount;
    });
    clicked = true;
  } else if (clicked) {
    expensesArr = expensesArr.sort(function(a, b) {
    return a.amount - b.amount;
    });
    clicked = false;
  }
  if (event.target.classList.contains('head')) {
    tableBody.innerHTML = "";
    for (var i = 0; i < expensesArr.length; i++) {
      tableBody.innerHTML += '<tr><td>' + expensesArr[i].name + '</td><td>' + expensesArr[i].amount + '</td>' + '<td><button class="remove">remove</button></td></tr>';
    }
  }
}

// var counter = function (event){
//   if (event.target.classList.contains('counter')) {
//     var sum = 0;
//     for (var i = 0; i < expensesArr.length; i++) {
//     sum += expensesArr[i].amount;
//     console.log(sum);
//   }
//   total.innerHTML = sum;
//   }
// };

table.addEventListener('click', remove);
addButton.addEventListener('click', handleClick);
table.addEventListener('click', sortArray);
// document.body.addEventListener('click', counter);




