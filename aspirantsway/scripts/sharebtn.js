//sharebtn script

  
const facebookBtn = document.querySelector(".facebook-btn");


const whatsappBtn = document.querySelector(".whatsapp-btn");

const telegramBtn = document.querySelector(".telegram-btn")

function init() {
  

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi everyone, please check this out: ");
 

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );
  telegramBtn.setAttribute(
    "href",
    `https://t.me/share/url?url=&{postUrl}&text=&{postTitle}`
    );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle}${postUrl}`
  );
}

init();

 //copybtn copy script
 
  function copyToClipboard(text) {
    var inputc = document.body.appendChild(document.createElement("input"));
    inputc.value = window.location.href;
    inputc.focus();
    inputc.select();
    document.execCommand('copy');
    inputc.parentNode.removeChild(inputc);
    alert("URL Copied.");
  }

