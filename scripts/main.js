
/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Donkey Kong'; 

Features that can be added:
Make the website more creative by adding more interactive features using modern technologies (language + framework mainly JS etc.  for now):D 
Work hard and play hard principle based theme and a pop up quiz about the donkeys, so the concept is to create a pop up quiz at the 
side of the site like a pop up box for bot chat (title: Hay you, take a Donkey Kong Quiz!) so in the quiz you have questions trivia game 
about Donkeys.

Also need to find a Donkey picture with an erection based on play hard and work hard principle.
Add this for onclick alert box
function Poke() {
    alert("Ops, Stop Poking Me Please!");
}
*/



let DonkImg = document.querySelector('img');

DonkImg.onclick = function() {
    let mySrc = DonkImg.getAttribute('src');
    if(mySrc === 'images/donkey-kong.png') {
      DonkImg.setAttribute('src','images/donkey-kong2.png');
    } else {
      DonkImg.setAttribute('src','images/donkey-kong.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Donkeys are cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Donkeys are cool, ' + storedName;
}
//for the button
myButton.onclick = function() {
  setUserName();
}