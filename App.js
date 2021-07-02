// Variables
let messages = document.querySelector('.message-list');
let btn = document.querySelector('.btn');
let input = document.querySelector('input');
// let dateToday = new Date.toLocaleDateString();
// let dateShown = ''

// Click 'Send' button or press Enter Key
btn.addEventListener('click', sendMessage);
input.addEventListener('keyup', function(e){ if(e.keyCode == 13) sendMessage()});

// Messenger Functions
function sendMessage(){
    let msg = input.value;
    if (msg !== ''){
        input.value = '';
        // showDate();
        writeLine(msg);
        translate(msg);
    }
}

// function showDate(){
//     if (dateShown !== dateToday){
//         let d = document.createElement('li');
//         d.classList.add('message-item', 'date');
//         d.innerHTML = dateToday;
//         dateShown = dateToday;
//         messages.appendChild(d);
//         messages.scrollTop = messages.scrollHeight;
//     }
// }

function writeLine(text){
    // Show Messege
    let message = document.createElement('li');
    message.classList.add('message-item', 'item-user');
    message.innerHTML = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
    // Show time
    let time = document.createElement('li');
    time.classList.add('message-item', 'time-user');
    time.innerHTML = new Date().toLocaleTimeString();
    messages.appendChild(time);
    messages.scrollTop = messages.scrollHeight;
}

function translate(text){
    // Show message
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
    // show time
    let time = document.createElement('li');
    time.classList.add('message-item', 'time-trans');
    time.innerHTML = new Date().toLocaleTimeString();
    messages.appendChild(time);
    messages.scrollTop = messages.scrollHeight;
 }