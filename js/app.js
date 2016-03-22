// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  clickCounter = 0;
  $("#playerTurn").text("X");


  $(".box").on("click",function() {
      if($(this).text()) {
          clickCounter += 1;
          alert("Cant do that");

      }
      else {
          if (clickCounter % 2 === 0) {
              $(this).text("X");
              $(this).addClass("X clicked");
              clickCounter += 1;
              $("#playerTurn").text("O");
          }
          else if (clickCounter % 2 !== 0) {
              $(this).text("O");
              $(this).addClass("O clicked");
              clickCounter += 1;
              $("#playerTurn").text("X");
          }
      }
  });

  $(".reset").on("click", function() {
      $(".box").text("");
  });

  if (($(".box-1-1").text() === "X") && ($(".box-1-2").text() === "X") && ($(".box1-3").text() === "X")) {
      alert("You won!");
  }


});
