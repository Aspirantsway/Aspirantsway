
    function toggleShow() {
      let shbtn = document.getElementById("showbtn");
      let para = document.getElementById("hiddenpara");
      if (para.style.display === "block") {
        para.style.display = "none";
      } else {
        para.style.display = "block";
      }
    }
  