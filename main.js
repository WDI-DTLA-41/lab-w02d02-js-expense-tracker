

console.log("you are here");


// create variables needed
var counter = 0;
var container;
var expAmt;
var expName;
var addExpAmt;
var addUpExpenses;
var removeExp;
var tableEntExp;
var tableEntName;


// this function runs when the button is clicked
addExpense = function(event){
  // get the values from the input fields

  addExp = document.createElement('div');
  expAmt = document.querySelector('.expAmt').value;
  expName = document.querySelector('.expName').value;
  console.log('did I get exp amt and name?');

// STEP 1 - this is how query the DOM for a table
  // var expAmt = document.querySelector('input');
  // var expName = document.querySelector('.expName');
  var table = document.querySelector('table');

//table.insertRow(0);

  // create a table
  var row = table.insertRow();

// Insert new cells (<td> elements) at the 1st and
// 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);

cell1.innerHTML = expAmt;
cell2.innerHTML = expName;


cell3.innerHTML = '<button>Delete row</button>';
  // create a new table row

  // delete a row
  // document.getElementById("myTable").deleteRow(0);


  // add values to table row
  // append table row to table

}

// point at button to add expense
var button = document.querySelector('button');


container = document.querySelector('#container');
// container.appendChild(addExpAmt);
// container.appendChild(addExpName);
//add expenseAmt to table

// add expenseName to table

// addExpenseAmt = function(event){


//       //document.createElement('input');


//       console.log('did I get to the add expense?');

// }


// point at input field expenseAmt and expenseName
// expAmt = function(){
//       expAmt.document.querySelector('input');

// };

// add eventListener on button when clicked
button.addEventListener('click',addExpAmt);







// enter expense amount



// enter expense name




// add event listener when user clicks button.
button.addEventListener('click', addExpense);
console.log("did i add expense?");
