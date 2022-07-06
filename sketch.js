
let channelName = "welcomePage";

let answerInput 

let you

let answer

function preload() {

  you = random (0,1000000);
  console.log (you);
  you = int (you);
  console.log (you);
  you = you.toString ();

}
function setup() {

    createCanvas(windowWidth, windowHeight);

    background(255);

    answerInput = createInput();
    answerInput.style('font-size', '20px');
    answerInput.position(windowWidth/3, 300);

    submitButton = createButton("Comment");
    submitButton.position(windowWidth/3, 350);
    submitButton.style('font-size', '20px');



    var textArray = new Array ();
    textArray[0] = "Durian";
    textArray[1] = "Tomato";
    textArray[2] = "Violence";
    textArray[3] = "Horror Movies";
    textArray[4] = "BTS";
    textArray[5] = "Avocado";

  var i = Math.floor(6*Math.random())
    

    
    textSize(40);
    text(textArray[i], windowWidth/2, 250);

    
  
  }
  
function draw() {
  

  textSize(30);

  textAlign(CENTER);

  text("Welcome! This is an anonymous channel.", windowWidth/2, 100);

  text("How do you think about the following subject? Feel free to make comments.", windowWidth/2, 150)






  submitButton.mousePressed(sendTheMessage);

}
 
function sendTheMessage() {
  if (answerInput.value() != "") {
    answer = answerInput.value();
    sendToServer();
    window.location.href = "https://jeni00.github.io/Assignment-2/_pageTwo/index.html?answer="+answer+"&you="+you; 
  } else {
    window.alert ("Please tell me your opinion on the subject. Let's see if we hold the same point of view.");

  }

}

function sendToServer() {
  // Send Data to the server to draw it in all other canvases

  createServer (you);

  dataServer.subscribe({ channels: [channelName] });

  dataServer.publish({
    channel: channelName,
    message: {
      x: 200, // TEMP
      y: 200,
      answer: answer
    },
  });

  console.log ('SEND');
}
