

console.log("you are here");


// create variables needed
var count;
var row;
var container;
var expAmt;
var expName;
var addExpAmt;
var addUpExp;
var removeExp = document.querySelector('span');
var tableEntExp;
var tableEntName;


// this function runs when the button is clicked
addExpense = function(event){
  // get the values from the input fields

  addExp = document.createElement('div');
  expAmt = document.querySelector('.expAmt').value;
  expName = document.querySelector('.expName').value;
  console.log('did I get exp amt and name?');

      // counter
     addUpExp = document.querySelectorAll('.row').length;
     count = addUpExp + 1;
     console.log(count);

    // end counter

// STEP 1 - this is how query the DOM for a table
  var table = document.querySelector('table');

// create a table
var row = table.insertRow();


// STEP 2 - makes new table element (row)
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);  // this cell needs to increment
var cell3 = row.insertCell(2);  // this row is the Delete button
var cell4 = row.insertCell(3);  // this row is the 'X' to remove the

// STEP 3 - grab what's in the cell user input on Amt and Name
cell1.innerHTML = expAmt;
cell2.innerHTML = expName;

// this creates a button to delete the row
cell3.innerHTML = '<button>Delete row</button>';
cell4.innerHTML = '<span class="removeExp"> x </span>';




};
// removeExp = this;
//removeExp
// var removeExp = function(){
//   this.parentNode.remove();
//     var clickToRemove = document.querySelectorAll('.removeExp');
//     for (var i = 0; i < clickToRemove.length; i++){
//       clickToRemove[i].addEventListener('click',removeExp);
//     }
// }

// point at button to add expense
var button = document.querySelector('button');


container = document.querySelector('#container');
// container.appendChild(addExpAmt);
// container.appendChild(addExpName);
//add expenseAmt to table

// add eventListener on button when clicked
button.addEventListener('click',addExpAmt);


// add event listener when user clicks button.
button.addEventListener('click', addExpense);
console.log("did i add expense?");
