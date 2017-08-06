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
    var myName = prompt('请输入你的名字.');
    localStorage.setItem('name',myName);
    myHeading.textContent = '剑灵大佬,' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}   else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = '剑灵大佬,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
