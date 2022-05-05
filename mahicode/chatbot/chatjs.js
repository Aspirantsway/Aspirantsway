timer();

function timer() {
  var now = new Date();
    hours = now.getHours();
    ampm = hours < 12 ? ' AM' : ' PM';
    minutes = now.getMinutes();
    seconds = now.getSeconds()
    
    if (hours > 12) {
      hours = hours - 12;
    }
    t_str = [hours, //otherwise: what's the use of AM/PM?
                  (minutes < 10 ? "0" + minutes : minutes),
                  (seconds < 10 ? "0" + seconds : seconds)]
    .join(':') + ampm;
  document.getElementById('time_span').innerHTML = t_str;
  setTimeout(timer, 1000);
}

// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
} 

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}
  

// Gets the first message
function firstBotMessage() {
    let firstMessage = "आप अपने सवाल बटन्स के माध्यम से भी पूछ सकते हैं यथा:- <br><b>Main Manu</b>" + "<br>" +
    '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="prelimsButton()">Prelims</button>'+  '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainsButton()">Mains</button>'+  '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="optionalButton()">Optional</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="essayButton()">Essay</button>'+  '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="languagePaperButton()">Language Papers</button>'+  '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="interviewButton()">Interview</button>'+  '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="firstReadingButton()">First reading</button>'+  '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="notesButton()">Notes</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="booklistButton()">Booklist</button>'+  '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="startingButton()">Starting</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="strategyButton()">Strategy</button>'+ "<br>" + "<b>Other Buttons</b>"+ "<br>" + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;font-size:11px;" onclick="upsccseMeaningButton()">What is the UPSC Cse</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;font-size:11px;" onclick="fullFormsButton()">Full forms</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;font-size:11px;" onclick="collectorButton()">कलेक्टर कैसे बनें?</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;font-size:11px;" onclick="moremainButton()">more buttons</button>';
    
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $(".chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love your Website!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this
     setTimeout(() => {
        getHardResponse(sampleText);
    }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("💝")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
//chattime
