function hide(el){
    el.style.display = 'none';
}

function show(el){
    el.style.display = '';
}

function enable(el){
    el.disabled = false;
}

function disable(el){
    el.disabled = true;
}

function submitForm(answer){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(answer.toLowerCase() === 'istanbul'){
                resolve();
            } else{
                reject(new Error('Good guess but a wrong asnwer. Try again!'));
            }
        }, 1500);
    });
}

async function handleFormSubmit(e){
    e.preventDefault();
    disable(textarea);
    disable(button);
    show(loadingMessage);
    hide(errorMessage);
    try {
        await submitForm(textarea.value);
        show(successMessage);
        hide(form);
    } catch(err){
        show(errorMessage);
        errorMessage.textContent = err.message;
        console.log(errorMessage);
    } finally {
        console.log("okay2");
        hide(loadingMessage);
        enable(textarea);
        enable(button);
    }
} 

function handleTextareaChange(){
    if(textarea.value.length === 0){
        disable(button);
    } else {
        enable(button);
    }
}

let form = document.getElementById('form');
let textarea = document.getElementById('textarea');
let button = document.getElementById('button');
let loadingMessage = document.getElementById('loading');
let errorMessage = document.getElementById('error');
let successMessage = document.getElementById('success');

form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;