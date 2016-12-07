var button = document.querySelector('#add-expense');

//when button is clicked
//add a new tr with two children- amount and name

var expName = document.querySelector('#name');
var amount = document.querySelector('#amount');

var addExp = function(evt) {
  console.log('clicked');
  evt.preventDefault();
  var newExp = document.createElement('tr');
  var expTable = document.querySelector('tbody');
  newExp.innerHTML = '<td id="exp">' + expName.value + '</td><td id="amt">' + amount.value + '</td>';
  expTable.appendChild(newExp);
}

button.addEventListener('click', addExp)

