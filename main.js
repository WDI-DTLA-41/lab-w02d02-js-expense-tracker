var expenseCounter = function(num){
  newNum = parseInt(num);
  expenseTotal.textContent = newNum + count;
  count = count + newNum;
}

var createRow = function(name, num){

  if (name !== '' && num !== ''){
      for(var count = 0;count < 1; count++){
        var tr = document.createElement('tr');
        mainTable.appendChild(tr);
        for(var count_1 = 0; count_1 < 3; count_1++){
          var td = document.createElement('td');
          tr.appendChild(td);
          if (count_1 === 0){
            td.textContent = name;
          }
          if (count_1 === 1){
            td.textContent = num;
          }
          if(count_1 === 2){
            var deleteButton = document.createElement('div');
            deleteButton.setAttribute('class','delete');
            td.appendChild(deleteButton);
            deleteButton.innerHTML = 'Delete';
          }
        }
      }
    expenseCounter(num);
  }
    else {
      alert("Please input a an Expense name and an Expense amount.");
    }

}

var newNum;
var count = 0;
var addButton = document.querySelector('button');
var mainTable = document.querySelector('table');
var addExpenseButton = document.querySelector('button');
var inputName = document.querySelectorAll('input')[0];
var inputAmount = document.querySelectorAll('input')[1];
var form = document.querySelector('#form');
var expenseTotal = document.querySelector('.expense-total');

//form.addEventListener('keyup', function(){
//  if(event.keyCode === 13){
//    if(inputName.value !== ''){
//      inputExpenseName(inputName.value);
//      inputName.value = '';
//    } else if (inputAmount.value !== ''){
//        inputAmount.value = '';
//          event.target.value = '';
//        }
//  }
//});

addButton.addEventListener('click', function(){
    createRow(inputName.value,inputAmount.value);

  inputName.value  = '';
  inputAmount.value = '';
});
