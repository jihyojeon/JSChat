// Variables
let messages = document.querySelector('.message-list');
let btn = document.querySelector('.btn');
let input = document.querySelector('input');

// Click 'Send' button or press Enter Key
btn.addEventListener('click', sendMessage);
input.addEventListener('keyup', function(e){ if(e.keyCode == 13) sendMessage()});

// Messenger Functions
function sendMessage(){
    let msg = input.value;
    input.value = '';
    writeLine(msg);
    translate(msg);
}

function writeLine(text){
    let message = document.createElement('li');
    message.classList.add('message-item', 'item-user');
    message.innerHTML = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

function translate(text){
    let message = document.createElement('li');
    message.classList.add('message-item', 'item-trans');
    google.language.translate(text, "en", "ko", function(result)
    {
        if (!result.error){
            message.innerHTML = result.translation;
        }
    });
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
 }