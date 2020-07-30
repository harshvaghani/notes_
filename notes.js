//If someone adds a note add that to the local storage
shownotes()

let btn = document.getElementById('addBtn').addEventListener('click', function(e) {

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value)
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    shownotes();
});
//function to shownotes 
function shownotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += ` <div id="notes" class="row container-fluid mx-4">
        <div class="noteCard card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text"> ${element + 1}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>

    </div>`
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<h1 style="color:red;">Nothing to show! "add a note"</h1>`
    }
}

//function  to delete a note

function deleteNote(index) {


    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notesObj));
    shownotes();


}
//it will let allow to search the things inside the notes
let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input', function(e) {
    let inputVal = searchTxt.value.toLowerCase();
    let noteCard = document.getElementsByClassName('noteCard')
    Array.from(noteCard).forEach(function(element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {

            element.style.display = "none";
        }
    });

});