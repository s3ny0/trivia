let startButton = document.getElementById("start-button"); //Start button that initiates the sequence

let mainCard = document.getElementById("main-card"); //All data will be rendered in the main card

let messageElement = document.createElement("h3"); //The message elements to display messages
messageElement.id = "message-element";

let proceedButton = document.createElement("button"); //Button to proceed to next phase
proceedButton.textContent = "Proceed";

let inputBox = document.createElement("input");
inputBox.type = "text";

startButton.addEventListener("click", function () {
  mainCard.textContent = "";
  let startingMessage = "Excited to see what's next?";
  messageElement.textContent = startingMessage;
  mainCard.appendChild(messageElement);
  
  //Displaying the disclaimer
  let disclaimer = document.createElement("p");
  disclaimer.textContent = "Disclaimer: information gathered from your inputs is stored locally on your browser and will be deleted when you terminate the session";
  mainCard.appendChild(disclaimer);
  
  //Displaying the proceed button
  mainCard.appendChild(proceedButton);
})

proceedButton.addEventListener("click", function () {
  mainCard.textContent = "";
  messageElement.textContent = "What is your name?"
  
  mainCard.appendChild(messageElement);
  mainCard.appendChild(inputBox);
  mainCard.appendChild(proceedButton);
  
  proceedButton.addEventListener("click", function () {
    mainCard.textContent = "";
  })
})
