console.log('hi')

var total = document.querySelector('.expense-total');
var input = document.querySelector('form');
var button = document.querySelector('#add-expense');
var formName = document.querySelector('#formName');
var formAmount = document.querySelector('#formAmount');
var table = document.querySelector('tbody')
var numRows = document.querySelectorAll('tr').length;//includes one extra row
var report = [];
 var runningTotal = [];
   var newTotal;
   var digit = 0;



var handleInput = function (event) {
  if (formName.value === '' || formAmount.value === '') {
    console.log('missing info')
    } else {
      // console.log('Name:' + formName.value);
      // console.log('Amount:' + formAmount.value);
      var tr = document.createElement('tr'); //creates new row
      tr.innerHTML = "<td class ='inputData'>" + formName.value + "</td><td class='cost'>" + formAmount.value + "</td>"
      table.appendChild(tr);
      report.push(formAmount.value);
      //clears forms
      formName.value = '';
      formAmount.value ='';
      runningTotal = [];
      calcTotal();
    }

  // console.log('button was clicked', event.target);

}
button.addEventListener('click', handleInput);

//to do after adding event listener of adding new tables and rows
var calcTotal = function (){

for (var i = 0; i < report.length; i++) {

   digit = (parseFloat(report[i]));
   runningTotal.push(digit);
   console.log('digit = ', digit);
   console.log(runningTotal);
    }
  newTotal = runningTotal.reduce(function(x, y) {
       return x + y})

  total.innerText = newTotal;
}


