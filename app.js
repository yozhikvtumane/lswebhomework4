//Parsing elements
var aboutMe = document.getElementsByTagName('ul');
var nickName = document.getElementById('nickname');
var favorites = document.getElementById('favorites');
var homeTown = document.getElementById('hometown');
var listItems = document.getElementsByTagName('li');

//Document styling
document.body.style.backgroundColor = "#ff0000";
document.body.style.fontFamily = "sans-serif";
aboutMe[0].style.backgroundColor = "#3c40ff";

//Adding text
nickname.innerHTML = "yozhikvtumane";
favorites.innerHTML = "a lot";
homeTown.innerHTML = "New-York (jk)";

//Adding class to listitems
for (var i = 0; i < listItems.length; i++) {
	listItems[i].className = "listitem";
}

//Creating  and adding Image 
var image = document.createElement('img');
image.src = "http://lorempixel.com/200/200/cats/1";
aboutMe[0].appendChild(image);