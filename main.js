console.log('diky');

var button = document.querySelector('button')

button.addEventListener('click', function(){
    var table = document.createElement('tr');
    var tr = document.createElement('tr');
    document.body.appendChild(table);

    // document.getElementById('list').appendChild('td')
    tr.appendChild(td);
    tr.setAttribute("contenteditable", "true")
});


// var addExpLine = function(){
//     var tr = document.createElement('tr');
//     var newTd = document.createElement('td');
//     document.body.appendChild(tr);
//     tr.appendChild(newTd);
// };




// var newDiv;
// var button = document.querySelector('button');

// var addNote = function(event){
//     var note = document.createElement('div');
//     note.classList.add('note');
//     var container = document.querySelector('#container');
//     container.appendChild(note);
//     note.setAttribute("contenteditable", "true")
//   };

//   button.addEventListener('click', addNote);
