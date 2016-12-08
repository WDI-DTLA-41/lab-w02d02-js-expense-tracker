// questions: 1) if there were multiple tables, how would createExItem know which table to append a new row to?
// 2) is there a better way to combine mouse click and enter key to create a new row

var exAmount = document.querySelector('input[name="expense-amount"]');
var exName = document.querySelector('input[name="expense-name"]');
var submitButton = document.querySelector('.add-expense');

var createExItem = function() {

  if (exAmount.value === "" && exName.value === ""){
    alert("Enter Some Value");
    } else {
        var expenseAmount = exAmount.value; //gets expense amount
        var expenseName = exName.value; //gets expense name
        var tableBody = document.querySelector('tbody');
        var createNewRow = document.createElement('tr');
        createNewRow.innerHTML = '<td>' + expenseName + '</td>' + '<td>' + expenseAmount + '</td>';
        tableBody.appendChild(createNewRow);
        exAmount.value = "";
        exName.value = "";
      };
  };

//  event listener on click
submitButton.addEventListener('click', createExItem);


// event listener if enter pressed on expense name field
// reference: http://stackoverflow.com/questions/16011312/execute-function-on-enter-key
exName.addEventListener("keydown", function (e) {
  if (exAmount.value !== "" && exName.value !== "") {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"

        createExItem();
    }
};
});

// event listener if enter pressed on expense amount field
exAmount.addEventListener("keydown", function (e) {
  if (exAmount.value !== "" && exName.value !== "") {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"

        createExItem();
    }
};
});
