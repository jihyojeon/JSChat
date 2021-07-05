// Useless Facts from https://bestlifeonline.com/useless-facts/
let uselessData = [
    "No number from 1 to 999 includes the letter 'a' in its word form.",
    "Many oranges are actually green.",
    "The opposite sides of a die will always add up to seven.",
    "You are 13.8 percent more likely to die on your birthday.",
    "Playing dance music can help ward off mosquitoes.",
    "The King of Hearts is the only king in a deck of cards without a mustache.",
    "'Dreamt' is the only word in the English language that ends with 'mt.'",
    "Those metal studs on your jeans have a name and a purpose.",
    "A Greek-Canadian man invented the 'Hawaiian' pizza.",
    "If you open your eyes in a pitch-black room, the color you'll see is called 'eigengrau.'",
    "Cats can't taste sweet things because of a genetic defect.",
    "It's possible to turn peanut butter into diamonds.",
    "A group of hippos is called a 'bloat.'",
    "Pogonophobia is the fear of beards.",
    "Alaska is the only state whose name is on one row on a keyboard.",
    "And 'tesseradecades', 'aftercataracts' and 'sweaterdresses' are the longest words you can type using only your left hand.",
    "The average adult spends more time on the toilet than they do exercising.",
    "Your fingernails grow faster on your dominant hand.",
    "A 'jiffy' is about one trillionth of a second.",
    "Dragonflies have six legs but can't walk.",
    "Golf balls tend to have 336 'dimples.'",
    "Montpelier, Vermont, is the only U.S. capital without a McDonald's.",
    "Apple seeds contain cyanide.",
    "Mulan has the highest kill-count of any Disney character.",
    "A cubic inch of human bone can bear the weight of five standard pickup trucks.",
    "A frigate bird can sleep while it flies.",
    "Jupiter is twice as massive as all the other planets combined.",
    "Your body contains about 100,000 miles of blood vessels.",
    "The little dot above a lowercase 'i' and 'j' has a name.",
    "The chicken and the ostrich are the closest living relatives of the Tyrannosaurus rex."
    ];
    
let dateShown = '';

// Click 'Send' button or press Enter Key
$(document).ready(function(){
    $('.btn').click(function(){
        sendMessage();
    });
    $('input').keydown(function(key) {
        if (key.keyCode == 13) {
            sendMessage();
        }
    });
});

// Messenger Functions
function sendMessage(){
    let msg = $('input').val();
    if (msg != ''){
        if (dateShown !== new Date().toLocaleDateString()){
            dateShown = new Date().toLocaleDateString();
            $('.message-list').append("<li class ='message-item date'>"+dateShown+"</li>");
            $('.message-list').scrollTop($('.message-list').prop('scrollHeight'));
        }
        $('input').val("");
        writeLine(msg); // send
        receiveLine(); // receive
        $('.message-list').scrollTop($('.message-list').prop('scrollHeight'));
    }
}

function writeLine(text){
    // Show Messege
    $('.message-list').append("<li class ='message-item item-user'>"+text+"</li>");
    $('.message-list').append("<li class ='message-item time-user'>"+new Date().toLocaleTimeString()+"</li>");
    $('.message-list').scrollTop($('.message-list').prop('scrollHeight'));
}

function receiveLine(){
    // Pick random data and delete it
    let n = Math.floor(Math.random()*uselessData.length); // 0-29
    // Show Messege
    $('.message-list').append("<li class ='message-item item-receive'>"+uselessData[n]+"</li>");
    uselessData.splice(n, 1);
    // show time
    $('.message-list').append("<li class ='message-item time-receive'>"+new Date().toLocaleTimeString()+"</li>");
    $('.message-list').scrollTop($('.message-list').prop('scrollHeight'));
 }