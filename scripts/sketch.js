window.onload = function() {
    let submit_button = document.getElementById("submit-button");
    let reset_button = document.getElementById("reset-button");
    var squCollection = document.getElementsByClassName("square");
    let squContainer = document.getElementById("square-container");

    function resetBoard() {
      event.preventDefault();

      for (var i=squCollection.length-1; i>= 0 ; i--) {
        var squToRemove = document.getElementById(`square${i}`);
        squToRemove.parentNode.removeChild(squToRemove);
      }
    }


    function createBoard() {
      event.preventDefault();
      let squNumber = parseInt(Math.pow((document.getElementById("square-number").value), 2));
      let squRows = parseInt(document.getElementById("square-number").value);
      let squColumns = squRows;

      squContainer.style.gridTemplateColumns = `repeat(${squColumns}, 1fr)`;
      squContainer.style.gridTemplateRows = `repeat(${squRows}, 1fr)`;
    
      resetBoard();
      if (Number.isInteger(squNumber) && squNumber >= 1) {

        for (i=0; i<=squNumber-1; i++) {
          var iDiv = document.createElement('div');
          iDiv.className = "square";
          iDiv.id = `square${i}`;
          iDiv.style.border = "1px solid rgba(119, 119, 119, 0.5)";
          iDiv.style.backgroundColor = "white";

          squContainer.appendChild(iDiv);       
        }        
        
        document.querySelectorAll(".square").forEach(item => {
          item.addEventListener('mouseover', event => {
            item.style.backgroundColor = "blue";
          })
        });

      } else {
        alert("Input must be a positive number");
      }
        
        
    }

    submit_button.addEventListener("click", createBoard);
    reset_button.addEventListener("click", resetBoard);


}