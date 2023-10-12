(function() {
  'use strict';


// YOUR CODE HERE

  //===============REFACTORED FINAL VERSION===============
  // Create NodeList holding all elements with class of button
  const buttons = document.querySelectorAll('.button');

  // Create object that holds button id and bulb information
  const buttonsObj = {
    'stopButton' : {id: 'stopLight', color: 'red'},
    'slowButton' : {id: 'slowLight', color: 'yellow'},
    'goButton' : {id: 'goLight', color: 'green'}
  }

  // forEach loop to iterate over the buttons NodeList
  buttons.forEach(button => {

    // Creates a listoner for mouseover on the currently iterated button
    button.addEventListener('mouseover', function(e) {
      // Logs text along with the id of the current button being iterated
      console.log(`Entered ${e.target.id} button`);
    });

    // Creates a listoner for mouseout on the currently iterated button
    button.addEventListener('mouseout', function(e) {
      // Logs text along with the id of the current button being iterated
      console.log(`Left ${e.target.id} button`);
    });

    // Create listoner for click 
    button.addEventListener('click', function(e) {
      // Create variable that holds the current buttons associated bulb attributes 
      const btnObj = buttonsObj[e.target.id]; 
      // Checking if btnObj was populated properly
      if (btnObj) {
        // Creating variable for the specific bulb based on its id
        const bulb = document.getElementById(btnObj.id);
        // Checking if bulb was populated properly
        if (bulb) {
          // Ternary operator to see what the current color of the bulb is
          bulb.style.backgroundColor = bulb.style.backgroundColor === 'black' ? btnObj.color : 'black';
          // Logging if the light is on or off based on the color of the bulb
          console.log(`${btnObj.id} bulb is ${bulb.style.backgroundColor === 'black' ? 'off' : 'on'}`)
        }
      }
    });
  });





/**
 * 
  //===============Ryans Version===============
  // YOUR CODE HERE
  // declare btn var for each button
  const stopBtn = document.querySelector('#stopButton')
  const slowBtn = document.querySelector('#slowButton')
  const goBtn = document.querySelector('#goButton')

  // declare light var for each light
  let stopLight = document.querySelector('#stopLight')
  let slowLight = document.querySelector('#slowLight')
  let goLight = document.querySelector('#goLight')  


  // add eventListener for on click to add/remove class name to stop to stopLight
  stopBtn.addEventListener('click', function(){
    stopLight.classList.toggle('stop')
    if (stopLight.classList.contains('stop')){
      console.log('StopLight on');
    } else {
      console.log('StopLight off')
    }
  })

  slowBtn.addEventListener('click', function(){
    slowLight.classList.toggle('slow')
    if (slowLight.classList.contains('slow')){
      console.log('SlowLight on');
    } else {
      console.log('Slowlight off')
    }
  })

  goBtn.addEventListener('click', function (){
    goLight.classList.toggle('go')
    if (goLight.classList.contains('go')){
      console.log('GoLight on');
    } else {
      console.log('GoLight off')
    }
  })
 */



  


  /*
  ===============FIRST TRY===============
  // Creating button variables for the three different buttons
  const btnStop = document.getElementById('stopButton');
  const slowButton = document.getElementById('slowButton');
  const goButton = document.getElementById('goButton');

  // Creating eventlistoners of click, mouseover, mouseout for each button
  btnStop.addEventListener('click', toggleStop)
  btnStop.addEventListener('mouseover', () => mouseOver('stopButton'))
  btnStop.addEventListener('mouseout', () => mouseOut('stopButton'))

  slowButton.addEventListener('click', toggleSlow)
  slowButton.addEventListener('mouseover', () => mouseOver('slowButton'))
  slowButton.addEventListener('mouseout', () => mouseOut('slowButton'))

  goButton.addEventListener('click', toggleGo)
  goButton.addEventListener('mouseover', () => mouseOver('goButton'))
  goButton.addEventListener('mouseout', () => mouseOut('goButton'))
*/
})();


/*
===============FIRST TRY===============
// Function to check the stop lights color and then change it from black->red || red->black
function toggleStop() {
  let stopLight = document.getElementById('stopLight');
  let stopColor = stopLight.style.backgroundColor;
  stopLight.style.backgroundColor = stopColor === 'black' ? 'red' : 'black';
}


// Function to check the slow lights color and then change it from black->yellow || yellow->black
function toggleSlow() {
  let slowLight = document.getElementById('slowLight');
  let slowColor = slowLight.style.backgroundColor;
  slowLight.style.backgroundColor = slowColor === 'black' ? 'yellow' : 'black';
}


// Function to check the go lights color and then change it from black->green || green->black
function toggleGo() {
  let goLight = document.getElementById('goLight');
  let goColor = goLight.style.backgroundColor;
  goLight.style.backgroundColor = goColor === 'black' ? 'green' : 'black';
}


// Function that takes in a string argument and uses it to pass a message back to the console about which button was moused over
function mouseOver(btnstring) {
  console.log(`Entered ${btnstring} button`)
}


// Function that takes in a string argument and uses it to pass a message back to the console about which button the mouse left
function mouseOut(btnstring) {
  console.log(`Left ${btnstring} button`)
}
*/




/**
 //===============Ryans Version===============
 function addEnterAndLeftListeners(button){
  let action = button.textContent;
  // 
  button.addEventListener('mouseenter', function(){
    console.log(`Entered ${action} button`)
  });
  button.addEventListener('mouseleave', function (){
    console.log(`Left ${action} button`)
  })
 */