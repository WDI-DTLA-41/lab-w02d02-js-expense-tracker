var addButton = document.querySelector('#add');
var total = document.querySelector('#total-expenses');
var expenseList = document.querySelector('.expenses');

var handleClick = function(event) {
  var expenseName = document.querySelector('#expense-name');
  var amount = document.querySelector('#expense-amount');
  var li = document.createElement('li');
  var newLi = expenseList.appendChild(li);
  newLi.innerHTML = expenseName.value + ' - $' + amount.value + ' ' + '<span class="remove">x</span>';
}

var remove = function(event) {
  if (event.target.classList.contains('remove')) {
    event.target.parentNode.remove();
  }
}



document.body.addEventListener('click', function counter(event){
  total.innerHTML = expenseList.children.length;
});

expenseList.addEventListener('click', remove);
addButton.addEventListener('click', handleClick);
