var myImage001 = document.querySelector('#meitu001');
var myImage002 = document.querySelector('#meitu002');

myImage001.onclick = function(){
    var mySrc001 = myImage001.getAttribute('src');

    if(mySrc001 ==='images/jianlingmeitu0001.jpg')
    {myImage001.setAttribute ('src','images/jianlingmeitu0002.jpg');}   
    else if(mySrc001 ==='images/jianlingmeitu0002.jpg' ) 
         {myImage001.setAttribute ('src','images/jianlingmeitu0001.jpg');}    
}

myImage002.onclick = function(){
    var mySrc002 = myImage002.getAttribute('src');

    if(mySrc002 ==='images/jianlingmeitu0003.jpg')
    {myImage002.setAttribute ('src','images/jianlingmeitu0004.jpg');}   
    else if(mySrc002 ==='images/jianlingmeitu0004.jpg' ) 
         {myImage002.setAttribute ('src','images/jianlingmeitu0005.jpg');}
         else  {myImage002.setAttribute ('src','images/jianlingmeitu0003.jpg');}
             
}
                 
var myButton = document.querySelector('#anniu1');
var myH = document.querySelector('h1');

function setUserName() {
    var myName = prompt('请输入大佬的名字.');
    localStorage.setItem('name',myName);
    myH.textContent = '剑灵大佬是' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}   else {
    var storedName = localStorage.getItem('name');
    myH.textContent = '剑灵大佬是' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
