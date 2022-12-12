const addButton = document.querySelector('#add');

const updateLocalStorage = () => {
    const textareaData = document.querySelectorAll('textarea');
    const notes = [];

    textareaData.forEach((note) => {
        return notes.push(note.value);
    })
    console.log(notes);

    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `<div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
<div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ? "hidden" : ""}"></textarea> ` ;

    note.innerHTML = htmlData ;
    // note.insertAdjacentElement('afterbegin',htmlData);
    // console.log(note);

    //create and delete handling
    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    //deleting node
    delButton.addEventListener('click' ,() => {
        note.remove();
        updateLocalStorage();
    })
    // edit using edit button
    textarea.value = text;
    textarea.innerHTML = text;

    editButton.addEventListener('click' , () => {
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })
    textarea.addEventListener('change' , (event) => {
        const val = event.target.value;
        // console.log(val);
        mainDiv.innerHTML = val;
        updateLocalStorage();
    })

    document.body.appendChild(note);
}
//sending back data from local storage
const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){ notes.forEach((note) => addNote(note )) }; 

addButton.addEventListener('click' , () => {
    addNote();
})