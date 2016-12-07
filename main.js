var addButton = document.querySelector('#add');
var sortButton = document.querySelector('#sort');
var total = document.querySelector('#total-expenses');
var expenseList = document.querySelector('.expenses');
var expensesArr = [];
var amount = document.querySelector('#expense-amount');

var handleClick = function(event) {
  var expenseName = document.querySelector('#expense-name');
  var amount = document.querySelector('#expense-amount');
  // numbers.push(amount.value);
  // console.log(numbers);
  var li = document.createElement('li');
  var newLi = expenseList.appendChild(li);
  //create obj of new expense and amount and push into array
  var obj = {name: expenseName.value, amount: amount.value};
  expensesArr.push(obj);
  newLi.innerHTML = expenseName.value + ' - $' + amount.value + ' ' + '<span class="remove">x</span>';
}

var remove = function(event) {
  if (event.target.classList.contains('remove')) {
    event.target.parentNode.remove();
  }
}

var sort = function(event) {
  // Sort expensesArr in descending order
  var sortedArray = expensesArr.sort(function(a, b) {
    return b.amount - a.amount;
  });
  // store array length in variable
  var length = expenseList.children.length;
  // reset inner HTML
  expenseList.innerHTML = "";
  for (var i = 0; i < length; i++) {
    expenseList.innerHTML += '<li>' + sortedArray[i].name + ' - $' + sortedArray[i].amount + ' ' + '<span class="remove">x</span></li>';
  }
}

document.body.addEventListener('click', function counter(event){
  total.innerHTML = expenseList.children.length;
});

expenseList.addEventListener('click', remove);
addButton.addEventListener('click', handleClick);
sortButton.addEventListener('click', sort);



// create a new object literal with keys for name and amount






// var expenseObject = [
//   {name: groceries, amount: 40},
//   {name: gas, amount: 60}
// ];
