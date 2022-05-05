//modal btn 1 script
  
  var modal = document.getElementById("myModal");

  var btn = document.getElementById("myBtn");

  
  var span = document.getElementsByClassName("close")[0];

  
  btn.onclick = function() {
    modal.style.display = "block";
  }

 
  span.onclick = function() {
    modal.style.display = "none";
  }

  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
//modal btn 2 script

  var modal2 = document.getElementById("myModal2");

 
  var btn2 = document.getElementById("myBtn2");


  var span2 = document.getElementsByClassName("close2")[0];

  
  btn2.onclick = function() {
    modal2.style.display = "block";
  }

 
  span2.onclick = function() {
    modal2.style.display = "none";
  }

 
  window.addEventListener("click", function(event) {
    if (event.target == modal2)
    {modal2.style.display = "none"}
});
