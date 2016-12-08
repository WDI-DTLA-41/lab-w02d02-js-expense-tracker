var expense = document.querySelector('button');
var spent = document.querySelector('.amt');
var desc = document.querySelector('.desc');


expense.addEventListener('click', function(event) {
// console.log('too');
  var table = document.querySelector('table');
  var row = document.createElement('tr');
  var cellOne = document.createElement('td');
  cellOne.classList.add('sum');
  var cellTwo = document.createElement('td');
  var cellThree = document.createElement('td');
// a remove button in the Remove Cell of each row
  var remove = document.createElement('button');

  var cellOneVal = spent.value;
  var cellTwoVal = desc.value;

  table.appendChild(row);
  row.appendChild(cellOne);
  row.appendChild(cellTwo);
  row.appendChild(cellThree);
  cellThree.appendChild(remove);

  cellOne.innerHTML=cellOneVal;
  cellTwo.innerHTML=cellTwoVal;
var array = [];
var count = 0;
array = document.querySelectorAll('.sum');


  for( var i = 0;i < array.length; i++){
  count+=parseInt(array[i].textContent)
};
console.log(count);

});

// Expense total - move into click fct.





