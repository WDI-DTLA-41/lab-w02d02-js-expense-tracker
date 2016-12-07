console.log('hi')

var total = document.querySelector('.expense-total');
var cost = document.querySelectorAll('.cost');
var input = document.querySelector('form');
var button = document.querySelector('#add-expense');
var formName = document.querySelector('#formName');
var formAmount = document.querySelector('#formAmount');

var handleInput = function (event) {
  formName.textContent = event.target.value;

  if (formName.value === '' || formAmount.value === '') {
    console.log('missing info')
    } else console.log('goodjob');

  console.log('button was clicked', event.target);
    var td = document.createElement('td');
    var tr = document.createElement('tr');

}
button.addEventListener('click', handleInput);
// input.addEventListener('keypress', handleInput);

//to do after adding event listener from inputs
// var createRow = function () {
//   var td = document.createElement('td');
//   var tr = document.createElement('tr');

// }


//to do after adding event listener of adding new tables and rows
// var calcTotal = function (){//returns total expenses of all td's
//   var total;
//   for (var i = 0; 0 < cost.length; i++) {
//   total += cost[i].textContent;
// }
// }

