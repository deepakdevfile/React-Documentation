function hide(el){
    el.style.display = "none";
}

function show(el){
    el.style.display = "";
}

function handleLastNameChange(){
    lastNameText.textContent = lastNameInput.value;
    helloText.textContent = ('Hello ' + firstNameInput.value + ' ' + lastNameInput.value + '!');
}

function handleFirstNameChange(){
    firstNameText.textContent = firstNameInput.value;
    helloText.textContent = ('Hello ' + firstNameInput.value + ' ' + lastNameInput.value + '!');
}

function handleFormSubmit(e){
    e.preventDefault();
    if(editButton.textContent === 'Edit Profile'){
        editButton.textContent = 'Save Profile';
        hide(firstNameText);
        hide(lastNameText);
        show(firstNameInput);
        show(lastNameInput);
    } else{
        editButton.textContent = 'Edit Profile';
        show(firstNameText);
        show(lastNameText);
        hide(firstNameInput);
        hide(lastNameInput);
    }
}

let form = document.getElementById('form');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let lastNameInput = document.getElementById('lastNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameText = document.getElementById('lastNameText');
let helloText = document.getElementById('helloText');

form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;