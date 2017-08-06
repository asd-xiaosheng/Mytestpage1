var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc !=='images/jianlingmeitu0001.jpg'){
        myImage.setAttribute ('src','images/jianlingmeitu0001.jpg');
    }   else {
        myImage.setAttribute ('src','images/jianlingmeitu0002.jpg');
    }
}

var myButton = document.querySelector('Button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool,' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}   else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}